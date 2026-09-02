---
name: q
description: 出一個 LeetCode 練習題目給使用者，可選擇指定題型（如 stack、DP）。當使用者輸入 /q 或 /q <type> 時使用。
---

# /q — 出 LeetCode 練習題

`args` 若有提供，代表題目類型（例如 `stack` 代表出一題 stack 相關的題目）。

## 出題前：讀取總覽表決定策略

根目錄的 `PROGRESS.md` 是由 `yarn sync-progress` 自動維護的題目練習總覽表（欄位：題號、標題、難度、標籤、最後練習時間、連結，依最後練習時間新到舊排序）。每次執行 `/q` 都必須先讀取這份表，依以下步驟決定要怎麼出題：

**核心原則：選題以「當前進度合適的難度」為主軸，8 個月只是入池條件，不是優先條件。**

1. **判斷近期進度，決定這次的難度落點**：找出總覽表中最後練習時間最近的數筆紀錄（有指定 type 時優先看同標籤的紀錄，同 type 沒有近期紀錄再看全體最近紀錄），綜合判斷：

   **只有「最後練習時間距今在 8 個月以內」的紀錄才算數，超過 8 個月沒練的一律不納入「近期進度」的判斷**（那些題目屬於步驟 2 的複習候選，不代表當前手感）。若指定 type 的同標籤紀錄全部都超過 8 個月，就當作該 type 沒有近期紀錄，改看全體 8 個月內的最近紀錄；若全體也都超過 8 個月，視為沒有可參考的近期進度，從該 type（或整體）學習曲線的基礎難度重新起步。

   - 最近練到的難度落點（Easy / Medium / 公認簡單的 Hard）
   - 用過哪些技巧或題型變化
   - 是否穩定通過（未提交、卡關的視為該難度還沒站穩）

   然後沿著**業界公認的該演算法學習曲線**，由淺到深挑下一題。學習曲線不要寫死成固定幾個階段，依該題型實際的常見進階路徑判斷（例如 stack：括號匹配 → 雙 stack／表達式求值 → stack 存物件狀態 → monotonic stack → Next Greater Element 類；binary search：標準找值 → 找邊界／lower_bound → 旋轉陣列 → 對答案二分）。無指定 type 時，改用整體難度落點做同樣的遞進判斷。

   推進**不設固定題數**，靠近期紀錄判斷：同一深度連續穩定通過、且已用過該深度的代表性技巧 → 往下一個深度；有卡關或未提交紀錄 → 留在同深度換個角度再出一題。難度上下界一律遵守下方「出題規則」第 1 點（Easy/Medium 為主，除非公認簡單的 Hard）。

2. **組可選題池**：從總覽表中**排除**「最後練習時間距今在 8 個月以內」的題目；剩下的（從沒練過、或超過 8 個月沒練的）都在可選池。有指定 type 時只看標籤符合的題目。

3. **選題**：從可選池中挑一題最符合步驟 1 判斷出的下一題難度的題目，**不分全新題或既有舊題，純看難度契合度**：
   - 挑到的是**既有檔案的舊題**（超過 8 個月沒練）：不用跑 `yarn template`（檔案已存在），直接告訴使用者題號、標題、連結，並註明「這題已經超過 8 個月沒練習了，這次當複習」。收尾走第 15 步的 `--touch`。
   - 挑到的是**全新題目**：依下方「出題規則」與「建立 template 後的後續步驟」完整跑一遍。
   - 該難度找不到合適的既有舊題時，直接出一題符合該難度的全新題目——這是常態，不是例外。

## 出題規則

1. **題目難度**：根據前端工程師的普遍面試難度出題。除非是公認簡單的 hard 題目，否則以 Easy 和 Medium 為主。
2. **循序漸進**：使用者會重複練習同樣題型，因此以循序漸進的方式，將該類型題目從基本到進階出題。例如 stack 題型可以從簡單的括號匹配題開始，逐步增加難度到雙 stack、stack 物件儲存、monotonic stack、Next Greater Element 等。實際的「進階到哪裡了」以上面步驟 1「判斷近期進度，決定這次的難度落點」的判斷為準，不要單純憑空猜測。
3. **輸出**：必須輸出題目編號、標題與連結。例如：`20. Valid Parentheses - https://leetcode.com/problems/valid-parentheses/`
4. **創建 template**：執行 `yarn template <題號>. <題目名稱>`（題號和題目名稱之間必須有一個 `.`），以創建對應題目的解答檔案。例如 `yarn template 20. Valid Parentheses` 會在 `problems/20/20.ts` 創建一個新的解答檔案（資料夾與檔案同名）。若檔案已存在，不用再出新的一題，直接告訴使用者該題目已經存在，並提供該題目的編號、標題與連結。
5. **無 type 時**：這代表使用者要隨機練習題目，請根據前端工程師的普遍面試題目類型與難度，隨機選擇一題出題。
6. **出題範圍**：優先考慮大型科技公司考古題，並告訴使用者該題目常被哪家公司使用。
7. **忽略已完成題目**：不用考慮使用者是否做過該題，也就是不用檢查 `/problems/` 目錄下是否已經有該題的解答檔案（可選池中挑到既有舊題的情況除外，那本來就是要挑已存在的題目）。
8. **避免數學題**：盡量不要出需要數學公式推導或數論技巧的題目（例如取餘數性質、質因數分解、幾何公式等），優先出邏輯與資料結構導向的題目。
9. **濾除負評題目**：不要出 LeetCode 上倒讚（dislike）數量大於讚（like）數量的題目，這類題目通常題意不清或品質較差。

## 建立 template 後的後續步驟（重要，每次出全新題目都要做）

`yarn template` 執行完只會產生一個空殼檔案（`// ${題號}. ${題目名稱}` + `// paste function here` + 空的 `console.log()`），**不會**包含題目網址。接下來必須自動完成以下步驟，不用額外詢問使用者：

10. **加上最後練習時間與題目網址註解**：在檔案第一行（`// ${題號}. ${題目名稱}`）的正下方，依序插入兩行：
    ```
    // 最後練習時間：<今天日期，格式 YYYY-MM-DD>
    // <題目網址>
    ```
    例如：
    ```
    // 20. Valid Parentheses
    // 最後練習時間：2026-08-25
    // https://leetcode.com/problems/valid-parentheses/
    ```
    自訂題目（非 LeetCode 原題）不需要網址那一行，改以說明文字取代（可參考現有的自訂題目檔案格式），但「最後練習時間」那行仍要加。

11. **抓取官方題目內容**：對 LeetCode GraphQL API 發 POST 請求取得題目本文、範例、標籤與 TypeScript 函式簽名：

    ```
    curl -s -X POST "https://leetcode.com/graphql" \
      -H "Content-Type: application/json" \
      -H "Referer: https://leetcode.com/problems/<slug>/" \
      -d '{"query":"query questionContent($titleSlug: String!) { question(titleSlug: $titleSlug) { title content difficulty topicTags { name } codeSnippets { langSlug code } } }","variables":{"titleSlug":"<slug>"}}'
    ```

    `<slug>` 是題目網址那段（例如 `valid-parentheses`）。回傳的 `data.question.codeSnippets` 陣列裡，`langSlug === "typescript"` 的那筆 `code` 就是 LeetCode 官方提供的 TypeScript 函式簽名（例如 `function isValid(s: string): boolean {\n    \n};`）；`data.question.content` 是題目本文 HTML，裡面的 `<pre>Input: ...\nOutput: ...</pre>` 區塊就是官方範例；`data.question.topicTags` 是題目標籤陣列；`data.question.difficulty` 是難度。若題目是 LeetCode Premium，`content` 會是 `null`。

12. **寫入函式簽名**：把檔案裡的 `// paste function here` 換成上一步抓到的官方 TypeScript 函式簽名（維持函式主體是空的，讓使用者自己實作，不要幫使用者寫解法）。

13. **補上驗證測試資料**：把檔案最下面的 `console.log()` 換成一行以上的 `console.log(<函式名稱>(<官方範例的輸入>)) // <官方範例的輸出>`，每個官方 Example 對應一行，順序跟題目描述一致。格式必須跟專案裡其他題目一致（值尾端加 `// <值>`）。

    - **只能用題目本身列出的 Example 當測資，絕對不能自己編造額外的隱藏測資或邊界案例。**
    - 多參數的函式，`console.log` 要照函式簽名的參數順序把 Example 的 Input 拆開傳入（例如 `Input: nums = [-1,0,3,5,9,12], target = 9` 要寫成 `console.log(search([-1,0,3,5,9,12], 9)) // 4`）。
    - 若輸出是陣列/物件等非原始值，`// Expected:` 後面直接照 Node.js `console.log` 印出來的樣子寫（例如 `[ 7, 0, 8 ]`），不要照抄 LeetCode 網頁上的 JSON 格式（`[7,0,8]`）。

14. **建立題目說明 md 檔**：在同一個資料夾（`problems/<題號>/`）建立 `<題號>.md`，把第 11 步抓到的內容整理成 Markdown，格式固定如下：

    > ⚠️ **絕對不能漏掉圖片！** 第 11 步抓到的 `content` HTML 裡若有 `<img>` 標籤（很多題目的 Example 是用圖片呈現的，例如樹、直方圖、格子圖），**每一張都必須轉成 `![](原始 src)` 寫進 md**，位置對應原文（通常在對應的 Example 區塊上方或該範例說明處）。這是最常被遺忘的一步，寫完 md 後務必回頭比對 `content` 裡的 `<img>` 數量，確認 md 裡的 `![]()` 數量一致才算完成。

    ```markdown
    # <題號>. <題目名稱>

    - **難度**：<Easy|Medium|Hard>
    - **連結**：<題目網址>
    - **標籤**：<topicTags 以逗號串接，例如 Array, Hash Table>

    ## 題目描述

    <content 轉成 Markdown 後的正文，LeetCode 慣用的 HTML 標籤對應轉換：<code> → `反引號`、<strong>/<b> → **粗體**、<em>/<i> → _斜體_、<ul>/<li> → - 項目、<img> → ![](原始 src)、<sup> 上標數字直接接在數字後面不用特殊語法（例如 10^4 寫成 104，維持跟 LeetCode 原文一致的視覺呈現）>

    ## 範例

    **Example 1:**

    \`\`\`
    Input: ...
    Output: ...
    Explanation: ...（若原文有 Explanation 才寫）
    \`\`\`

    <依序列出所有 Example，Explanation 沒有就省略該行>

    ## 限制條件

    <Constraints 區塊逐條轉成條列，程式碼片段一樣用反引號包住>
    ```

    - 若題目是 LeetCode Premium（`content` 為 `null`），md 內容只需保留標題、難度、連結三行，並加一行「此題為 LeetCode Premium 題目，內容無法公開取得。」，不用寫「題目描述」「範例」「限制條件」等區塊。
    - 自訂題目（非 LeetCode 原題，沒有走 GraphQL 這條路）不需要建立 md 檔。
    - 排版與轉換風格請直接參考現有的 `problems/994/994.md`、`problems/997/997.md`、`problems/666/666.md` 這幾個檔案。

## 收尾：更新總覽表（每次執行 /q 都要做，不管是全新題目還是複習候選）

15. **更新最後練習時間與總覽表**：
    - 若是從可選池挑到的既有舊題，執行 `yarn sync-progress --touch <題號>`（會把該題 `.ts` 檔開頭的「最後練習時間」註解更新成今天，並重新產生 `PROGRESS.md`）。
    - 若是全新出的題目，因為第 10 步已經手動把「最後練習時間」寫進 `.ts` 檔了，這裡只需要執行 `yarn sync-progress`（不用加 `--touch`）重新產生 `PROGRESS.md` 即可。
