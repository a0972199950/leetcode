# LeetCode 刷題專案 — Copilot 指南

## 專案概覽

這是一個使用 TypeScript 實作的 LeetCode 刷題與面試準備專案。使用 `tsx` 直接執行 `.ts` 檔案，無需編譯步驟。

## 常用指令

- 建立新題目：`yarn template <題號> <題目名稱>`（例：`yarn template 42 Trapping Rain Water`）
- 執行解答：`yarn start <題號>`（例：`yarn start 20`）
- 監視模式：`yarn dev`

## 解答檔案結構

每個題目檔案遵循以下格式：

```typescript
// <題號>. <題目名稱>

export {}
console.clear()

// 解題函式
function solutionName(params: Type): ReturnType {
  // 實作
}

// 測試用例
console.log(solutionName(testInput))
```

- 檔案路徑：`problems/<題號>.ts`
- 舊版解法保留為區塊註解，新解法寫在下方
- 在解法上方註明時間與空間複雜度：`// Time: O(n)` / `// Space: O(n)`

## 程式碼風格

- 使用 **camelCase** 命名變數與函式
- 偏好箭頭函式作為內聯輔助工具：`const isValid = (x: number) => x > 0`
- 迴圈索引使用 `i`, `j`, `k`；字元變數使用 `char`
- 使用 TypeScript 型別註記（`number[]`, `Map<string, number>`, `Set<number>` 等）
- 縮排使用 **2 個空格**
- 省略分號（專案 ESLint 規則）
- 偏好 `for...of` 搭配 `split('')` 遍歷字串
- 使用 `console.log()` 作為測試輸出

## 資料結構

專案內建的資料結構位於 `data-structure/`：

| 檔案 | 內容 |
|------|------|
| `LinkedList.ts` | `ListNode` 類別與 `LinkedList` 建構函式 |
| `BinaryTree.ts` | 二元樹實作 |
| `Heap.ts` | `MinHeap`（enqueue / dequeue / bubbleUp / bubbleDown） |
| `MaxBinaryHeap.ts` | 最大二元堆積 |
| `AVL.ts` | AVL 平衡樹 |
| `AgencyList.ts` | 鄰接表（圖） |

## 常見解題模式

回應 LeetCode 題目時，優先考慮以下常用模式：

- **雙指標（Two Pointers）**：排序陣列、回文、容器問題
- **滑動視窗（Sliding Window）**：子字串/子陣列最佳化
- **DFS / BFS**：樹、圖、矩陣遍歷
- **動態規劃（DP）**：最佳子結構、記憶化
- **Stack / Queue**：括號匹配、單調棧
- **Binary Search**：已排序資料的搜尋
- **Backtracking**：排列、組合、子集
- **Union Find**：連通分量
- **Heap / Priority Queue**：Top-K、排程

## 面試題目

面試相關題目放在 `interviews/<公司名>/` 下，執行方式：
`yarn start interviews <公司名> <檔名>`

## 回應偏好

- 使用**繁體中文**進行說明與註解
- 解釋解題思路時，說明**為什麼**選擇該演算法
- 提供時間與空間複雜度分析
- 如有多種解法，從暴力解到最佳解依序說明

## 指令模板 (Template Commands)

當我輸入以下簡寫時，請執行對應的複雜 Prompt：

- `/q [type?]`:
  "
  出一個 leetcode 題目，[type] 為 題目類型。例如：`/q stack` 代表出一題 stack 相關的題目
1. **題目難度**：根據前端工程師的普遍面試難度出題。除非是公認簡單的 hard 題目，否則以 Easy 和 Medium 為主。
2. **循序漸進**：我會重複練習同樣題型，因此你可以以循序漸進的方式，將該類型題目從基本到進階。例如 stack 題型可以從簡單的括號匹配題開始，逐步增加難度到雙 stack, stack 物件儲存，monotonic stack、Next Greater Element 等。
3. **輸出**：你必須輸出題目編號，標題與連結。例如：`20. Valid Parentheses - https://leetcode.com/problems/valid-parentheses/`
  "
4. **創建 template**：執行 `yarn template <題號>. <題目名稱>`(不要忘記題號和題目名稱之間有一個.)，以創建對應題目的解答檔案。例如 `yarn template 20. Valid Parentheses` 會在 `problems/20.ts` 創建一個新的解答檔案。若檔案已存在，不用再出新的一題，直接告訴我該題目已經存在了，並提供該題目的編號、標題與連結。
5. **無 type 時**：這代表我要隨機練習題目，請你根據前端工程師的普遍面試題目類型與難度，隨機選擇一題出題。
6. **出題範圍**：優先考慮大型科技公司考古題，並告訴我該題目常被哪家公司使用。
7. **忽略已完成題目**：不用考慮我是否做過該題，也就是不用檢查 /problems/ 目錄下是否已經有該題的解答檔案。
8. **避免數學題**：盡量不要出需要數學公式推導或數論技巧的題目（例如取餘數性質、質因數分解、幾何公式等），優先出邏輯與資料結構導向的題目。
  "

- `/judge`:
  "
  根據當前開啟的文件內容與文件名稱判斷是哪一題 LeetCode 題目。通常文件名稱就是題目編號，例如 `20.ts` 就是 LeetCode 第 20 題 "Valid Parentheses"。
  根據我當前的解法，找出可以改進的地方，並用提問的方式循序漸進引導我思考改進的方向。以下是一些可以考慮的問題：
1. **時間複雜度**：目前的解法的時間複雜度是多少？是否有更優的演算法可以降低時間複雜度？
2. **空間複雜度**：目前的解法的空間複雜度是多少？是否有更優的演算法可以降低空間複雜度？
3. **程式碼可讀性**：目前的程式碼是否清晰易懂？是否有冗長或重複的部分可以簡化？
4. **邊界條件**：目前的解法是否考慮了所有可能的邊界條件？是否有漏掉的測試用例？
請根據以上幾點提供具體的改進建議，並說明為什麼這些改進會提升解法的效率或可讀性。

若有標準最佳解法，不要直接貼出完整程式碼，而是從我目前的解法出發，一步步推導到最佳解法：
1. 先指出我目前解法中某個可以優化的「操作」或「步驟」（例如：查表的時機、重複的判斷邏輯）
2. 用具體的提問引導我思考：「如果把這個步驟提前/移到別的地方做，會怎樣？」
3. 說明這個改動帶來的好處，並展示改動後的局部程式碼片段
4. 如果還有下一步優化，重複上述過程，逐步收斂到最佳解法
5. 最後再給出完整的最佳解法程式碼作為參考

重點是讓推導過程自然、不跳躍，讓我能理解「為什麼會想到這樣寫」，而不是憑空冒出一個技巧。
  "