# 資深前端工程師面試常考題型

根據常見的前端面試經驗，出現率由高到低大致如下：

---

## 1. 演算法與資料結構

### Tier 1 — 最高頻（幾乎必考）

| 類型 | 常見題目 | 原因 |
| --- | --- | --- |
| 字串操作 | 反轉、回文、anagram、子字串搜尋 | 前端天天處理字串 |
| 陣列 / Hash Map | Two Sum、去重、交集、頻率統計 | 基礎中的基礎 |
| Stack | 有效括號、Min Stack、計算器 | 跟 DOM 巢狀結構、call stack 概念相關 |
| 滑動視窗 / 雙指標 | 最長不重複子字串、最小覆蓋子串 | 考查對子字串/子陣列的處理能力 |

### Tier 2 — 中高頻

| 類型 | 常見題目 | 原因 |
| --- | --- | --- |
| BFS / DFS（樹） | 層序遍歷、最大深度、反轉二元樹 | DOM 就是一棵樹 |
| Linked List | 反轉、合併、偵測環 | 考基礎資料結構理解 |
| Binary Search | 搜尋旋轉陣列、找邊界 | 考邏輯嚴謹度 |
| 動態規劃（入門） | 爬樓梯、最長遞增子序列、coin change | 通常只考 1D DP |

### Tier 3 — 偶爾出現

| 類型 | 備註 |
| --- | --- |
| Graph / Union Find | 大廠才會考，中小公司幾乎不出 |
| Heap / Priority Queue | 偶爾出 Top-K 類型 |
| Backtracking | 排列組合，較少見 |
| 2D DP / 高階 DP | 很少考，除非是對演算法要求很高的公司 |

### 前端特有的「變形題」

面試官有時不直接出 LeetCode 原題，而是包裝成前端場景：

- 實作 `JSON.parse` / `JSON.stringify` → 本質是 Stack + 遞迴
- DOM 樹遍歷（找某個節點、算深度） → BFS / DFS
- 事件委派、路徑比對 → 字串處理 + Trie
- 實作 `debounce` / `throttle` / `Promise.all` → 不是 LeetCode 但高頻
- 扁平化巢狀陣列 / 物件 → 遞迴 / Stack

### 建議優先練習順序

1. **陣列 + HashMap + 字串** — 把 Easy/Medium 刷熟
2. **Stack** — 括號、單調棧、計算器系列
3. **樹的 BFS/DFS** — 二元樹的各種遍歷
4. **滑動視窗 + 雙指標** — 子字串類型題
5. **基礎 DP** — 爬樓梯、house robber、coin change

---

## 2. JavaScript 核心

- 閉包（Closure）、作用域鏈、`this` 綁定
- Prototype Chain、繼承模式
- Event Loop、Microtask vs Macrotask
- `Promise`、`async/await` 手寫實作
- 手寫 `debounce`、`throttle`、`deepClone`、`flatten`、`curry`

---

## 3. 前端系統設計

- 設計 Infinite Scroll / Virtual List
- 設計即時通訊系統（WebSocket）
- 設計前端權限管理系統
- CDN 策略、快取機制（Service Worker、HTTP Cache）
- 微前端架構設計

---

## 4. 框架原理（React / Vue）

- Virtual DOM Diff 演算法
- React Fiber 架構、Reconciliation
- Hooks 原理（為什麼不能放在條件式裡）
- 狀態管理方案比較與取捨
- SSR / CSR / SSG / ISR 差異

---

## 5. 效能優化

- Critical Rendering Path
- Code Splitting、Tree Shaking、Lazy Loading
- Web Vitals（LCP、FID、CLS）優化策略
- Memory Leak 偵測與修復
- Bundle Size 分析與優化

---

## 6. 網路與安全

- HTTP/1.1 vs HTTP/2 vs HTTP/3
- CORS、CSRF、XSS 防禦
- Cookie / Session / JWT 認證機制
- HTTPS、CSP（Content Security Policy）

---

## 7. 工程化與 DevOps

- Webpack / Vite 打包原理
- CI/CD Pipeline 設計
- Monorepo 管理（Turborepo、Nx）
- 測試策略（Unit / Integration / E2E）