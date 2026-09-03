import fs from 'fs-extra'
import path from 'path'

const ROOT = path.join(__dirname, '..')
const PROBLEMS_DIR = path.join(ROOT, 'problems')
const OUT_FILE = path.join(ROOT, 'PROGRESS.md')

const NOTE_RE = /^\/\/\s*最後練習時間[：:]\s*(\d{4}-\d{2}-\d{2})\s*$/
const STATUS_RE = /^\/\/\s*解題狀態[：:]\s*(\S+)\s*$/

function todayStr(): string {
  const d = new Date()
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function detectEol(raw: string): string {
  if (raw.includes('\r\n')) return '\r\n'
  if (raw.includes('\r')) return '\r'
  return '\n'
}

/** 更新指定題目 .ts 檔案開頭的「最後練習時間」註解為今天日期，沒有的話就新增一行 */
function touch(problemFolder: string) {
  const tsPath = path.join(PROBLEMS_DIR, problemFolder, `${problemFolder}.ts`)
  if (!fs.existsSync(tsPath)) {
    console.error(`找不到檔案：${tsPath}`)
    process.exitCode = 1
    return
  }
  const raw = fs.readFileSync(tsPath, 'utf8')
  const eol = detectEol(raw)
  const lines = raw.split(eol)
  const noteLine = `// 最後練習時間：${todayStr()}`

  let replaced = false
  for (let i = 1; i <= 3 && i < lines.length; i++) {
    if (NOTE_RE.test(lines[i])) {
      lines[i] = noteLine
      replaced = true
      break
    }
  }
  if (!replaced) {
    lines.splice(1, 0, noteLine)
  }
  fs.writeFileSync(tsPath, lines.join(eol))
  console.log(`已更新 ${problemFolder} 最後練習時間 -> ${todayStr()}`)
}

interface Row {
  id: string
  title: string
  difficulty: string
  tags: string
  lastPracticed: string | null
  /** 解題狀態註解的值（例如「未解出」）；沒寫這行註解時為 null */
  solveStatus: string | null
  url: string
}

function parseProblem(folder: string): Row | null {
  const dir = path.join(PROBLEMS_DIR, folder)
  const mdPath = path.join(dir, `${folder}.md`)
  const tsPath = path.join(dir, `${folder}.ts`)
  if (!fs.existsSync(tsPath)) return null

  const tsRaw = fs.readFileSync(tsPath, 'utf8')
  const eol = detectEol(tsRaw)
  const tsLines = tsRaw.split(eol)

  let lastPracticed: string | null = null
  for (let i = 0; i <= 3 && i < tsLines.length; i++) {
    const m = tsLines[i].match(NOTE_RE)
    if (m) { lastPracticed = m[1]; break }
  }

  let solveStatus: string | null = null
  for (let i = 0; i <= 5 && i < tsLines.length; i++) {
    const m = tsLines[i].match(STATUS_RE)
    if (m) { solveStatus = m[1]; break }
  }

  if (fs.existsSync(mdPath)) {
    const md = fs.readFileSync(mdPath, 'utf8')
    const titleMatch = md.match(/^#\s*(.+)$/m)
    const diffMatch = md.match(/\*\*難度\*\*[：:]\s*(\S+)/)
    const tagMatch = md.match(/\*\*標籤\*\*[：:]\s*(.+)/)
    const urlMatch = md.match(/\*\*連結\*\*[：:]\s*(\S+)/)
    return {
      id: folder,
      title: titleMatch ? titleMatch[1].trim() : folder,
      difficulty: diffMatch ? diffMatch[1].trim() : '-',
      tags: tagMatch ? tagMatch[1].trim() : '-',
      lastPracticed,
      solveStatus,
      url: urlMatch ? urlMatch[1].trim() : '-',
    }
  }

  // 自訂題目（非 LeetCode 原題），沒有 md 檔
  const firstLine = (tsLines[0] || '').replace(/^\/\/\s*/, '').trim()
  return {
    id: folder,
    title: firstLine || folder,
    difficulty: '-',
    tags: '自訂',
    lastPracticed,
    solveStatus,
    url: '-',
  }
}

function isTouchedWithinMonths(dateStr: string | null, months: number): boolean {
  if (!dateStr) return false
  const d = new Date(dateStr)
  const cutoff = new Date()
  cutoff.setMonth(cutoff.getMonth() - months)
  return d >= cutoff
}

function generate() {
  const folders = fs.readdirSync(PROBLEMS_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)

  const rows = folders
    .map(parseProblem)
    .filter((r): r is Row => r !== null)

  // 依最後練習時間新到舊排序，沒有紀錄的排最後；同一天/都沒有紀錄則依題號排序
  rows.sort((a, b) => {
    if (a.lastPracticed && b.lastPracticed) {
      if (a.lastPracticed !== b.lastPracticed) return b.lastPracticed.localeCompare(a.lastPracticed)
    } else if (a.lastPracticed && !b.lastPracticed) {
      return -1
    } else if (!a.lastPracticed && b.lastPracticed) {
      return 1
    }
    const na = parseInt(a.id, 10)
    const nb = parseInt(b.id, 10)
    if (!isNaN(na) && !isNaN(nb)) return na - nb
    return a.id.localeCompare(b.id)
  })

  const staleCount = rows.filter(r => !isTouchedWithinMonths(r.lastPracticed, 8)).length

  const lines: string[] = []
  lines.push('# 題目練習總覽')
  lines.push('')
  lines.push(`> 由 \`yarn sync-progress\` 自動產生，請勿手動編輯。最後更新：${todayStr()}`)
  lines.push('')
  lines.push(`共 ${rows.length} 題，其中 ${staleCount} 題超過 8 個月未練習（可作為 /q 複習候選）。`)
  lines.push('')
  lines.push('依「最後練習時間」新到舊排序，沒有紀錄的排在最後。')
  lines.push('')
  lines.push('| 題號 | 標題 | 難度 | 標籤 | 解題狀態 | 最後練習時間 | 連結 |')
  lines.push('| --- | --- | --- | --- | --- | --- | --- |')
  for (const r of rows) {
    // 狀態欄留空、但有最後練習時間 → 預設「已解出」；連練習紀錄都沒有 → 用「—」
    const status = r.solveStatus ?? (r.lastPracticed ? '已解出' : '—')
    lines.push(`| ${r.id} | ${r.title} | ${r.difficulty} | ${r.tags} | ${status} | ${r.lastPracticed ?? '未提交'} | ${r.url} |`)
  }
  lines.push('')

  fs.writeFileSync(OUT_FILE, lines.join('\n'))
  console.log(`已更新 ${OUT_FILE}（共 ${rows.length} 題）`)
}

const args = process.argv.slice(2)
const touchIdx = args.indexOf('--touch')
if (touchIdx !== -1) {
  const target = args[touchIdx + 1]
  if (!target) {
    console.error('請提供 --touch 後面的題號/資料夾名稱')
    process.exit(1)
  }
  touch(target)
}
generate()
