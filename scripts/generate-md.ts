import fs from 'fs-extra'
import path from 'path'

const PROBLEMS_DIR = path.join(process.cwd(), 'problems')

function getMissingProblems(): string[] {
  return fs.readdirSync(PROBLEMS_DIR)
    .filter(d => /^\d+$/.test(d))
    .filter(d => !fs.existsSync(path.join(PROBLEMS_DIR, d, `${d}.md`)))
    .sort((a, b) => parseInt(a) - parseInt(b))
}

function getSlug(num: string): string | null {
  const tsPath = path.join(PROBLEMS_DIR, num, `${num}.ts`)
  if (!fs.existsSync(tsPath)) return null
  const content = fs.readFileSync(tsPath, 'utf-8')
  const m = content.match(/leetcode\.com\/problems\/([^/\s\n]+)/)
  return m?.[1]?.replace(/\/$/, '') ?? null
}

async function fetchQuestion(slug: string) {
  const r = await fetch('https://leetcode.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Referer': `https://leetcode.com/problems/${slug}/`,
    },
    body: JSON.stringify({
      query: `query q($titleSlug: String!) { question(titleSlug: $titleSlug) { title content difficulty topicTags { name } } }`,
      variables: { titleSlug: slug }
    })
  })
  const json: any = await r.json()
  return json.data?.question ?? null
}

function decodeEntities(s: string): string {
  return s
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ')
    .replace(/&ldquo;/g, '"').replace(/&rdquo;/g, '"')
    .replace(/&lsquo;/g, "'").replace(/&rsquo;/g, "'")
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/&hellip;/g, '...').replace(/&le;/g, '≤')
    .replace(/&ge;/g, '≥').replace(/&times;/g, '×')
    .replace(/&#(\d+);/g, (_, c) => String.fromCharCode(parseInt(c)))
}

function inlineToMd(html: string): string {
  return decodeEntities(
    html
      .replace(/<sup>([\s\S]*?)<\/sup>/g, '$1')
      .replace(/<sub>([\s\S]*?)<\/sub>/g, '$1')
      .replace(/<strong[^>]*>([\s\S]*?)<\/strong>/g, '**$1**')
      .replace(/<b[^>]*>([\s\S]*?)<\/b>/g, '**$1**')
      .replace(/<em[^>]*>([\s\S]*?)<\/em>/g, '_$1_')
      .replace(/<i[^>]*>([\s\S]*?)<\/i>/g, '_$1_')
      .replace(/<code>([\s\S]*?)<\/code>/g, '`$1`')
      .replace(/<a[^>]+href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g, '[$2]($1)')
      .replace(/<[^>]+>/g, '')
  ).trim()
}

function preToText(html: string): string {
  return decodeEntities(html.replace(/<[^>]+>/g, '')).trim()
}

function parseList(html: string): string {
  const items: string[] = []
  const re = /<li>([\s\S]*?)<\/li>/g
  let m: RegExpExecArray | null
  while ((m = re.exec(html)) !== null) {
    items.push('- ' + inlineToMd(m[1]))
  }
  return items.join('\n')
}

function parseDescription(html: string): string {
  let result = html
    .replace(/<img[^>]+src="([^"]+)"[^>]*\/?>/g, '\n![]($1)\n')
    .replace(/<p[^>]*>([\s\S]*?)<\/p>/g, (_, inner) => inlineToMd(inner) + '\n\n')
    .replace(/<ul[^>]*>([\s\S]*?)<\/ul>/g, (_, inner) => parseList(inner) + '\n\n')
    .replace(/<ol[^>]*>([\s\S]*?)<\/ol>/g, (_, inner) => {
      let i = 0
      return inner.replace(/<li>([\s\S]*?)<\/li>/g, (__: string, item: string) => `${++i}. ${inlineToMd(item)}\n`) + '\n'
    })
    .replace(/<[^>]+>/g, '')

  return decodeEntities(result).replace(/\n{3,}/g, '\n\n').trim()
}

function parseExampleBlock(html: string): string {
  const lines: string[] = []

  const inputMatch = html.match(/<p><strong>Input:<\/strong>\s*<span[^>]*>([\s\S]*?)<\/span><\/p>/)
  if (inputMatch) lines.push('Input: ' + decodeEntities(inputMatch[1].replace(/<[^>]+>/g, '')))

  const outputMatch = html.match(/<p><strong>Output:<\/strong>\s*<span[^>]*>([\s\S]*?)<\/span><\/p>/)
  if (outputMatch) lines.push('Output: ' + decodeEntities(outputMatch[1].replace(/<[^>]+>/g, '')))

  // Explanation may be inline or in the next <p>
  const expInline = html.match(/<p><strong>Explanation:<\/strong>\s+([^<\n][^<]*)<\/p>/)
  const expNext = html.match(/<p><strong>Explanation:<\/strong><\/p>\s*<p>([\s\S]*?)<\/p>/)
  if (expInline) {
    lines.push('Explanation: ' + decodeEntities(expInline[1].trim()))
  } else if (expNext) {
    lines.push('Explanation: ' + inlineToMd(expNext[1]))
  }

  return lines.join('\n')
}

function parseExamples(html: string): string {
  if (!html) return ''

  const parts = html.split(/<p><strong class="example">Example \d+:<\/strong><\/p>/)
  const examples: string[] = []

  for (let i = 1; i < parts.length; i++) {
    const content = parts[i]
    let exMd = `**Example ${i}:**\n\n`

    const imgMatch = content.match(/<img[^>]+src="([^"]+)"[^>]*\/?>/)
    if (imgMatch) {
      exMd += `![](${imgMatch[1]})\n\n`
    }

    // Old format: <pre> block
    const preMatch = content.match(/<pre>\n?([\s\S]*?)<\/pre>/)
    if (preMatch) {
      exMd += '```\n' + preToText(preMatch[1]) + '\n```'
    } else {
      // New format: <div class="example-block">
      const divMatch = content.match(/<div class="example-block">([\s\S]*?)<\/div>/)
      if (divMatch) {
        exMd += '```\n' + parseExampleBlock(divMatch[1]) + '\n```'
      }
    }

    examples.push(exMd)
  }

  return examples.join('\n\n')
}

function generateMd(
  num: string, title: string, difficulty: string,
  url: string, tags: string[], content: string | null
): string {
  let md = `# ${num}. ${title}\n\n`
  md += `- **難度**：${difficulty}\n`
  md += `- **連結**：${url}\n`
  md += `- **標籤**：${tags}\n`

  if (!content) {
    md += '\n此題為 LeetCode Premium 題目，內容無法公開取得。\n'
    return md
  }

  // Remove spacer paragraphs
  let html = content.replace(/<p>&nbsp;<\/p>/g, '')

  // Extract constraints
  const constraintsMatch = html.match(/<p><strong>Constraints:<\/strong><\/p>\s*<ul>([\s\S]*?)<\/ul>/)
  let constraintsHtml = ''
  if (constraintsMatch) {
    constraintsHtml = constraintsMatch[1]
    html = html.slice(0, html.indexOf(constraintsMatch[0]))
  }

  // Split description and examples
  const firstExampleIdx = html.search(/<p><strong class="example">/)
  const descHtml = firstExampleIdx >= 0 ? html.slice(0, firstExampleIdx) : html
  const examplesHtml = firstExampleIdx >= 0 ? html.slice(firstExampleIdx) : ''

  const description = parseDescription(descHtml)
  const examples = parseExamples(examplesHtml)
  const constraints = parseList(constraintsHtml)

  if (description) md += '\n## 題目描述\n\n' + description + '\n'
  if (examples) md += '\n## 範例\n\n' + examples + '\n'
  if (constraints) md += '\n## 限制條件\n\n' + constraints + '\n'

  return md
}

async function main() {
  const missing = getMissingProblems()
  console.log(`Found ${missing.length} problems missing md files\n`)

  let succeeded = 0, premium = 0, skipped = 0, failed = 0

  for (const num of missing) {
    const slug = getSlug(num)
    if (!slug) {
      console.log(`[SKIP] ${num}: no LeetCode URL in .ts file`)
      skipped++
      continue
    }

    try {
      const question = await fetchQuestion(slug)
      if (!question) {
        console.log(`[FAIL] ${num}: API returned nothing`)
        failed++
        continue
      }

      const { title, content, difficulty, topicTags } = question
      const tags = topicTags.map((t: any) => t.name).join(', ')
      const url = `https://leetcode.com/problems/${slug}/`

      if (!content) {
        console.log(`[PREM] ${num}: ${title}`)
        premium++
      } else {
        console.log(`[OK]   ${num}: ${title}`)
        succeeded++
      }

      const md = generateMd(num, title, difficulty, url, tags, content)
      fs.writeFileSync(path.join(PROBLEMS_DIR, num, `${num}.md`), md)

      await new Promise(r => setTimeout(r, 300))
    } catch (e) {
      console.log(`[FAIL] ${num}: ${e}`)
      failed++
    }
  }

  console.log(`\nDone: ${succeeded} generated, ${premium} premium, ${skipped} skipped, ${failed} failed`)
}

main()
