---
name: q
description: 出一個 LeetCode 練習題目給使用者，可選擇指定題型（如 stack、DP）。當使用者輸入 /q 或 /q <type> 時使用。
---

# /q — 出 LeetCode 練習題

`args` 若有提供，代表題型（例如 `stack`）；沒有則為隨機出題。

流程：決定候選題 → 取得題目資料 → 核對清單 → 建檔或更新日期 → 回覆。

## 通用規則

- 優先選大型科技公司的考古題。
- 最後練習時間距今 8 個月以內的題目不出（依 `PROGRESS.md`；SESSION.md 標記「進行中」的題除外）。這是唯一的新舊題篩選條件，其餘一律看是否最符合當前曲線並通過核對清單，不分新題或已有檔案的題。

## 一、決定候選題

### 無 type

不看 SESSION.md。在通用規則範圍內，依前端面試常見題型隨機挑一題，題型與難度不做遞進判斷。

### 有 type

先看根目錄 `SESSION.md`，找出對應該 type 的題型段落（對應方式由你判斷）。

**有對應段落，且尚有下一題**：該段落是唯一依據。「已完成」表格、「下一題」候選、「學習曲線進度」都以文件內容為準，直接依它出下一題。

- 某題標記「進行中，尚未算完成」：預設下次出題回頭練這題。使用者若明確表示不想重練（例如覺得時間間隔太短、沒有鑑別度），改出同一深度的其他候選（通常 SESSION.md 的「下一題」已列好），並在該段落註記這個決定。

**沒有對應段落，或段落顯示學習曲線已走完**：改用 `PROGRESS.md` 決定，見下節。

### 用 PROGRESS.md 決定（有 type、SESSION.md 沒有可用下一題時）

`PROGRESS.md` 由 `yarn sync-progress` 維護，欄位：題號、標題、難度、標籤、解題狀態（已解出／未解出／—）、最後練習時間（沒有紀錄為「未提交」）、連結，依最後練習時間新到舊排序。

1. **判斷近期進度**：取最後練習時間在 8 個月以內、標籤符合該 type 的紀錄；同 type 沒有，就看全體 8 個月內的最近紀錄；仍沒有，從該 type 學習曲線的基礎難度起步。綜合判斷：
   - 最近練到的難度落點（Easy / Medium / 公認簡單的 Hard）
   - 用過哪些技巧或題型變化
   - 是否站穩（解題狀態為「未解出」，視為該深度還沒站穩）

2. **沿學習曲線推進**：依該題型業界公認的常見進階路徑，由淺到深挑下一題。不設固定題數：同一深度連續穩定通過、且用過該深度的代表性技巧 → 往下一個深度；有卡關 → 留在同深度換個角度；已到曲線最深處 → 仍挑最符合該深度的題。

   曲線示意（僅為示意，以 SESSION.md 為準）：
   - stack：括號匹配 → 雙 stack／表達式求值 → stack 存物件狀態 → monotonic stack → Next Greater Element 類
   - binary search：標準找值 → 找邊界／lower_bound → 旋轉陣列 → 對答案二分

3. **選題**：從標籤符合、且不在 8 個月內的題目中（含 `PROGRESS.md` 沒有紀錄的題），挑最符合上述難度落點的一題。

## 二、取得題目資料

候選題定案前，先向 LeetCode GraphQL 取得資料（核對清單需要讚數、倒讚數與 Premium 標記，建檔也會用到同一份）：

```bash
curl -s -X POST "https://leetcode.com/graphql" \
  -H "Content-Type: application/json" \
  -H "Referer: https://leetcode.com/problems/<slug>/" \
  -d '{"query":"query q($titleSlug: String!) { question(titleSlug: $titleSlug) { questionFrontendId title difficulty likes dislikes isPaidOnly content topicTags { name } codeSnippets { langSlug code } } }","variables":{"titleSlug":"<slug>"}}'
```

- 用 Bash 工具執行；`<slug>` 是題目網址中的那段（例如 `valid-parentheses`）。
- `codeSnippets` 中 `langSlug === "typescript"` 那筆的 `code` 是官方 TypeScript 函式簽名。
- `content` 是題目本文 HTML，其中 `<pre>` 區塊是官方範例。
- GraphQL 不可用時，改用 firecrawl 或 browser 類工具讀題目頁。

## 三、核對清單

每個候選題（有 type、無 type，SESSION.md 或 PROGRESS.md 來源都一樣）都要逐條通過。任何一條沒過，換下一個候選重新核對。

1. **難度上限**：以前端工程師的普遍面試難度為準。Easy 或 Medium 通過。Hard 必須實際查過該題評論／討論區的風向（用 WebSearch 或 firecrawl 搜尋），有明確說法顯示它是公認簡單的 Hard 才通過；查不到就不選。
2. **技巧深度**（有 type 時）：這題的難處在正在複習的技巧本身。如果 check function 或子問題需要一整套完全不同的演算法（例如二分的判斷函式需要 DFS／Union-Find／Heap），它屬於 Hard 的廣度組合，不當作該技巧的下一層。
3. **評價**：`dislikes` 不得大於 `likes`。
4. **非數學題**：核心解法不靠數論、公式推導、幾何公式這類數學技巧，而是邏輯與資料結構導向。
5. **非 Premium**：`isPaidOnly` 為 `false`。
6. **SESSION.md 一致性**（走 SESSION.md 路徑時）：這題是該段落「下一題」中的候選，或至少不牴觸段落記錄的曲線位置。

## 四、建檔或更新日期

以 `problems/<題號>/<題號>.ts` 是否存在分流。

### 檔案已存在

只更新日期，不建立任何檔案：

```bash
yarn sync-progress --touch <題號>
```

這會把該題 `.ts` 開頭的「最後練習時間」改成今天，並重新產生 `PROGRESS.md`。

### 檔案不存在（新題）

依序完成 1–6。全程不需詢問使用者。

1. **建立 template**：`yarn template <題號>. <題目名稱>`（題號與題目名稱之間有一個 `.`，例如 `yarn template 20. Valid Parentheses`），會建立 `problems/<題號>/<題號>.ts`，內容是題號標題、`console.clear()`、`// paste function here`、空的 `console.log()`。

2. **加上最後練習時間與網址**：在檔案第一行下方插入兩行：

   ```
   // 20. Valid Parentheses
   // 最後練習時間：2026-08-25
   // https://leetcode.com/problems/valid-parentheses/
   ```

   日期為今天，格式 `YYYY-MM-DD`。

3. **寫入函式簽名**：把 `// paste function here` 換成官方 TypeScript 函式簽名，函式主體留空，由使用者自己實作。

4. **補上驗證測資**：把最後的 `console.log()` 換成每個官方 Example 一行，順序與題目描述一致：

   ```
   console.log(<函式名稱>(<Example 的輸入>)) // <Example 的輸出>
   ```

   - 測資只用題目列出的 Example。
   - 多參數函式照簽名的參數順序拆開傳入。例如 `Input: nums = [-1,0,3,5,9,12], target = 9` 寫成 `console.log(search([-1,0,3,5,9,12], 9)) // 4`。
   - 輸出若是陣列或物件，`//` 後面照 Node.js `console.log` 印出的樣子寫（例如 `[ 7, 0, 8 ]`），不用 LeetCode 網頁的 JSON 格式（`[7,0,8]`）。

5. **建立題目說明檔**：在 `problems/<題號>/<題號>.md` 用第二節取得的 `content` 整理成 Markdown，格式如下：

   ````markdown
   # <題號>. <題目名稱>

   - **難度**：<Easy|Medium|Hard>
   - **連結**：<題目網址>
   - **標籤**：<topicTags 以逗號串接，例如 Array, Hash Table>

   ## 題目描述

   <正文>

   ## 範例

   **Example 1:**

   ```
   Input: ...
   Output: ...
   Explanation: ...
   ```

   （依序列出所有 Example；原文沒有 Explanation 就省略該行）

   ## 限制條件

   - <Constraints 逐條列出>
   ````

   HTML 轉換對照：

   | HTML | Markdown |
   | --- | --- |
   | `<code>` | `` `反引號` `` |
   | `<strong>`、`<b>` | `**粗體**` |
   | `<em>`、`<i>` | `_斜體_` |
   | `<ul>`、`<li>` | `- 項目` |
   | `<img src="X">` | `![](X)` |
   | `10<sup>4</sup>` | `104`（上標數字直接接在後面，與現有 md 一致） |

   `content` 中的每一張 `<img>` 都要轉成 `![](原始 src)`，放在原文對應的位置（通常在對應 Example 上方）。寫完後比對 `content` 的 `<img>` 數量與 md 的 `![]()` 數量，一致才算完成。

   排版與轉換風格參考 `problems/994/994.md`、`problems/997/997.md`、`problems/666/666.md`。

6. **更新總覽表**：執行 `yarn sync-progress`（不加 `--touch`），重新產生 `PROGRESS.md`。

## 五、回覆格式

```
<題號>. <標題> - <連結>
難度：<難度>｜標籤：<標籤>
核對：讚 <likes> / 倒讚 <dislikes>（Hard 另附風向依據）
選題理由：<一句話，說明它在學習曲線或難度上的位置>
```