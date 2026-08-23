---
name: q
description: 出一個 LeetCode 練習題目給使用者，可選擇指定題型（如 stack、DP）。當使用者輸入 /q 或 /q <type> 時使用。
---

# /q — 出 LeetCode 練習題

`args` 若有提供，代表題目類型（例如 `stack` 代表出一題 stack 相關的題目）。

## 出題規則

1. **題目難度**：根據前端工程師的普遍面試難度出題。除非是公認簡單的 hard 題目，否則以 Easy 和 Medium 為主。
2. **循序漸進**：使用者會重複練習同樣題型，因此以循序漸進的方式，將該類型題目從基本到進階出題。例如 stack 題型可以從簡單的括號匹配題開始，逐步增加難度到雙 stack、stack 物件儲存、monotonic stack、Next Greater Element 等。
3. **輸出**：必須輸出題目編號、標題與連結。例如：`20. Valid Parentheses - https://leetcode.com/problems/valid-parentheses/`
4. **創建 template**：執行 `yarn template <題號>. <題目名稱>`（題號和題目名稱之間必須有一個 `.`），以創建對應題目的解答檔案。例如 `yarn template 20. Valid Parentheses` 會在 `problems/20/20.ts` 創建一個新的解答檔案（資料夾與檔案同名）。若檔案已存在，不用再出新的一題，直接告訴使用者該題目已經存在，並提供該題目的編號、標題與連結。
5. **無 type 時**：這代表使用者要隨機練習題目，請根據前端工程師的普遍面試題目類型與難度，隨機選擇一題出題。
6. **出題範圍**：優先考慮大型科技公司考古題，並告訴使用者該題目常被哪家公司使用。
7. **忽略已完成題目**：不用考慮使用者是否做過該題，也就是不用檢查 `/problems/` 目錄下是否已經有該題的解答檔案。
8. **避免數學題**：盡量不要出需要數學公式推導或數論技巧的題目（例如取餘數性質、質因數分解、幾何公式等），優先出邏輯與資料結構導向的題目。
9. **濾除負評題目**：不要出 LeetCode 上倒讚（dislike）數量大於讚（like）數量的題目，這類題目通常題意不清或品質較差。

## 建立 template 後的後續步驟（重要，每次出題都要做）

`yarn template` 執行完只會產生一個空殼檔案（`// paste function here` + 空的 `console.log()`）。接下來必須自動完成以下兩件事，不用額外詢問使用者：

10. **抓取官方題目內容**：對 LeetCode GraphQL API 發 POST 請求取得題目本文、範例與 TypeScript 函式簽名：

    ```
    curl -s -X POST "https://leetcode.com/graphql" \
      -H "Content-Type: application/json" \
      -H "Referer: https://leetcode.com/problems/<slug>/" \
      -d '{"query":"query questionContent($titleSlug: String!) { question(titleSlug: $titleSlug) { title content difficulty codeSnippets { langSlug code } } }","variables":{"titleSlug":"<slug>"}}'
    ```

    `<slug>` 是題目網址那段（例如 `valid-parentheses`）。回傳的 `data.question.codeSnippets` 陣列裡，`langSlug === "typescript"` 的那筆 `code` 就是 LeetCode 官方提供的 TypeScript 函式簽名（例如 `function isValid(s: string): boolean {\n    \n};`）；`data.question.content` 是題目本文 HTML，裡面的 `<pre>Input: ...\nOutput: ...</pre>` 區塊就是官方範例。

11. **寫入函式簽名**：把檔案裡的 `// paste function here` 換成上一步抓到的官方 TypeScript 函式簽名（維持函式主體是空的，讓使用者自己實作，不要幫使用者寫解法）。

12. **補上驗證測試資料**：把檔案最下面的 `console.log()` 換成一行以上的 `console.log(<函式名稱>(<官方範例的輸入>)) // Expected: <官方範例的輸出>`，每個官方 Example 對應一行，順序跟題目描述一致。格式必須跟專案裡其他題目一致（值尾端加 `// Expected: <值>`）。

    - **只能用題目本身列出的 Example 當測資，絕對不能自己編造額外的隱藏測資或邊界案例。**
    - 多參數的函式，`console.log` 要照函式簽名的參數順序把 Example 的 Input 拆開傳入（例如 `Input: nums = [-1,0,3,5,9,12], target = 9` 要寫成 `console.log(search([-1,0,3,5,9,12], 9)) // Expected: 4`）。
    - 若輸出是陣列/物件等非原始值，`// Expected:` 後面直接照 Node.js `console.log` 印出來的樣子寫（例如 `[ 7, 0, 8 ]`），不要照抄 LeetCode 網頁上的 JSON 格式（`[7,0,8]`）。
