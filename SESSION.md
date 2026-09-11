# 多題型複習進度

> 每個題型各自獨立，**只依各自的表格與曲線走**，不要拿 PROGRESS.md 裡其他題型 / 其他時間的練習歷史去推進度，也不要把不屬於複習範圍的題目寫進對應題型的表格。

---

# Stack 複習進度（從頭開始）

## 已完成

| 題號 | 題目 | 難度 | 重點 |
|------|------|------|------|
| 232 | Implement Queue using Stacks | Easy | inStack / outStack 分工，amortized O(1) |
| 844 | Backspace String Compare | Easy | stack 模擬；另有 O(1) space 雙指標解（從右往左掃，backs counter） |
| 946 | Validate Stack Sequences | Medium | greedy pop：每次 push 後立刻盡量 pop；可 in-place 重用 pushed 陣列省 O(n) space |
| 921 | Minimum Add to Make Parentheses Valid | Medium | bracket matching 入門；leftCount / move 兩計數器即可 O(1) space，不用真的開 stack |
| 856 | Score of Parentheses | Medium | stack 存數字：`0` 當邊界 marker，遇 `)` 往回收兄弟分數到 marker 為止，`sum ? 2*sum : 1` 回填。信任 constraint 拿掉 `-1` 防呆。累加器版（每層一格）看過但不採用，不直覺 |
| 227 | Basic Calculator II | Medium | 雙 stack（numberStack + operatorStack）+ NaN 當數字分隔符；遇 `+ -` 全部結算、遇 `* /` 只消耗上一個 `* /`。不變量：operatorStack 最多兩格且形狀固定 `[+/-, */]`，所以實際是 O(1) space。除法用 `Math.trunc` 比 `Math.floor` 不用靠「左運算元非負」推論。total/lastTerm 兩變數版看過但不採用，不直覺 |
| 84 | Largest Rectangle in Histogram | Hard | 演進：倒水法（枚舉高度，O(n×高度範圍)）→ 排序分段（仍 O(n²)）→ monotonic stack（枚舉「每根 bar 當最矮」，pop 時左邊界 = 新 top、右邊界 = 現在 index，兩邊都不含）。用 `>` 讓相等 bar 留在 stack，最左那根最後拿完整寬度。尾端補虛擬 0 bar、左邊空時 index -1 兩個 sentinel。曾因 `max = -Infinity` 在全 0 輸入回傳 -Infinity，改 `max = 0` 修掉 |
| 735 | Asteroid Collision | Medium | stack 模擬三種碰撞結局：`while` 吃掉較小的正數、`top + asteroid === 0` 同歸於盡、「被吃掉」是隱性 else（刻意不寫）。`top + asteroid === 0` 取代 `Math.abs` 相等判斷，順便修掉負對負誤消的 bug（隱含 top 必須為正）。amortized O(n)：每顆最多 push / pop 各一次 |
| 503 | Next Greater Element II | Medium | 遞減 stack + 掃 2n 用 `i % n`，讓前段元素「再走過來一次」pop 掉剩下的，不用回頭找；剩在 stack 裡的都等於最大值 → -1。push 條件四種寫法（`i < n` / `=== undefined` / 無條件 / `=== -1`）都對，只有 `i < n` 不變量一句話講完，其餘要證明第二圈重複 entry 不會蓋錯答案；`=== -1` 還撞到 -1 是合法值（sentinel 撞合法值） |

## 下一題（待 /q 依本層出題）

**層級：monotonic stack**（503 已完成，NGE 循環變形走過；下一步是「stack 不只找 next greater」的變形）

- **962 Maximum Width Ramp 進行中，尚未算完成**：目前寫出來的是正確、O(n) 的雙指標版（`possibleLefts` / `possibleRights` 建好後用兩根指標掃，過程中沒有 pop，不是 stack 的消耗模式）。使用者要求改用真正的 stack push/pop 版再解一次（建遞減 stack，從右往左掃，符合條件就 pop 消耗掉，不回頭）才算這題完成。下次 `/q` 或 `/judge` 962 時接續這個目標，不要當新題出。
- 962 補完後，monotonic stack 這層還有一個候選（契合度相當，非必做）：
  - 456 132 Pattern（從右往左掃，stack 維護「第三個數」候選；池內 2024-04-17）
- 739、496、907、402、1019 都算 NGE 基礎應用，已練過或跟 503 同類型，不再另外排；84、901 已提前做過，略過

## 學習曲線進度

```
基本 stack 操作（232）✅
stack 模擬（844）✅
stack 序列驗證（946）✅
bracket matching（921）✅
expression eval / 複雜 stack 狀態（856 ✅ / 227 ✅ / 735 ✅）
monotonic stack ← 目前在這裡（503 ✅；962 進行中，需補 stack push/pop 版；456 待做；84、901 已提前做過）
（這層走完後 stack 題型複習告一段落，不再另立 「Next Greater Element 類」關卡——
 739/496 純 NGE、503 循環變形都已練過，NGE 本身是 monotonic stack 最基礎的應用，
 不是比 84/962/456 更進階的下一站，原本的分層順序反了）
```

## 備註

- 901 Online Stock Span（monotonic stack 層）在 2026-09-04 因 /q 誤判進度被提早出題並完成。
  這**不代表**複習進度推進到 monotonic stack 層——照上面的曲線，該層還在後面。
  等複習走到 monotonic stack 層時，901 已寫過可略過。
- 84 Largest Rectangle in Histogram（monotonic stack 層）是 2026-09-03 卡住、2026-09-05 補完的題目，不是照曲線出的。
  跟 901 一樣**不推進**曲線位置；走到 monotonic stack 層時 84、901 都可略過，直接出該層其他題。

---

# BST 複習進度

> 完成狀態依 PROGRESS.md 裡最後練習時間落在**近兩個月內**（2026-07-05 之後）的紀錄認定，由淺入深排列。

## 已完成

| 題號 | 題目 | 難度 | 重點 |
|------|------|------|------|
| 98 | Validate Binary Search Tree | Medium | 最終版用中序遍歷、輸出必須嚴格遞增來判斷合法性；另外兩版看過：純遞迴回傳 min/max 往上比較、往下傳遞 (min, max) 邊界檢查每個 node |
| 230 | Kth Smallest Element in a BST | Medium | 中序遍歷 = 排序序列，直接把整棵樹攤平成陣列取第 k-1 項；沒有做「遍歷到第 k 個就提早結束」的優化，是 O(n) 不是 O(k) |
| 669 | Trim a Binary Search Tree | Medium | 利用 BST 有序性遞迴剪枝：node 值 < low 直接丟掉整個 node 連同左子樹、只留右子樹遞迴結果；> high 反過來；範圍內才對左右子樹分別遞迴。O(n) time / O(h) space，比先 BFS 收集再重建 BST（O(n·h)）快 |
| 235 | Lowest Common Ancestor of a Binary Search Tree | Medium | 用大小關係直接判斷該往左或右走：p、q 都比 current 小就往左、都比較大就往右，其餘情況（跨越或其中一個等於 current）current 就是答案。O(h) time / O(1) space，比一般樹的雙邊祖先集合解法快很多 |
| 1038 | Binary Search Tree to Greater Sum Tree | Medium | 反向中序遍歷（右 → 中 → 左），維護一個累加 sum，把「中序遞增」的性質倒過來變成「反中序遞減」，順便累加每個 node |
| 173 | Binary Search Tree Iterator | Medium | 設計題。最終版用 `parentStack` 模擬中序遍歷：建構時先把最左路徑上的祖先都推進 stack；`next()` 若有右子樹就換到右子樹再把新的最左路徑推進去，否則直接 pop 祖先；amortized O(1)、space O(h)。另一版直接中序遍歷攤平成陣列存起來，space O(n) |
| 450 | Delete Node in a BST | Medium | 遞迴定位到要刪除的節點：沒有左小孩直接讓右小孩頂上；有左小孩則去左子樹裡找最大值（一路往右走到底）當替代節點，把它拔下來接上原本的左右子樹。O(h) time / space |
| 449 | Serialize and Deserialize BST | Medium | 利用 BST 有序性省掉 null 佔位符：pre-order 序列化只存有值的 node；反序列化時用遞迴傳遞 (min, max) 值域邊界配合一個共用 pointer，單一次掃過陣列就能還原整棵樹 |
| 99 | Recover Binary Search Tree | Medium | 中序走訪時用 `prev` 追上一個 node，找逆序（`prev.val > curr.val`）：第一次逆序時 `first = prev`，每次逆序都更新 `second = curr`；一次逆序（相鄰 case）和兩次逆序（非相鄰 case）同一套邏輯都對。最後只 swap `.val`，不動指標。O(n) time / O(h) space |

## 下一題（待 /q 依本層出題）

**層級：BST 性質被破壞後的修復 / 結合其他技巧**

- 333 Largest BST Subtree（Medium，DP on tree + BST 驗證合併在一起判斷，較有挑戰；池內 2024-04-01）
- 1382 Balance a Binary Search Tree（Medium，中序攤平成排序陣列再用 108 的技巧重建平衡樹；池內 2024-04-06）

## 學習曲線進度

```
驗證 BST 性質（98）✅
中序遍歷 = 排序序列的應用（230、1038）✅
遞迴時利用有序性剪枝／定位（669、235）✅
BST 上的設計題（173 Iterator）✅
結構修改：刪除節點（450）✅
序列化／還原，省略 null 佔位符（449）✅
BST 性質被破壞後的修復（99）✅
← 目前在這裡：結合其他技巧（333 / 1382 待做）
```

---

# Binary Tree BFS / DFS 複習進度

> 完成狀態依 PROGRESS.md 裡最後練習時間落在**近兩個月內**（2026-07-05 之後）的紀錄認定，由淺入深排列。

## 已完成

| 題號 | 題目 | 難度 | 重點 |
|------|------|------|------|
| 104 | Maximum Depth of Binary Tree | Easy | 遞迴函式語義 =「以此節點為根的子樹有多深」：base case `null → 0`、遞迴式 `max(左, 右) + 1`。O(n) time / O(h) space（歪斜樹最壞 O(n)、平衡 O(log n)）。因為沒有要邊走邊更新的外層累計變數，helper 其實可省、`maxDepth` 自己就能遞迴；使用者選擇保留巢狀 `dfs` helper 讓寫法跟 110 / 543 一致。曾多包一層 `if (!root) return 0`，與 helper 的 base case 重複，已移除 |
| 543 | Diameter of Binary Tree | Easy | 這層的代表技巧：`dfs` 回傳「子樹高度」給上層（同 104），但**在每個節點順手更新外層答案** `max = Math.max(max, left + right)`——後序 DFS「回傳值 + side-effect 更新累計」的模子（110 同型）。base case 從 2022 版的 `node.left ? ... : 0` 三元守衛換成 `if (!node) return 0`，一併涵蓋空樹。diameter 是邊數不是節點數，故取 `left + right` 不 +1。任一路徑都有唯一「最高點」，枚舉每個節點當最高點即覆蓋所有路徑。O(n) time / O(h) space。命名小點：`max` 緊鄰 `Math.max` 讀起來繞，`maxDiameter` 更直說（未改） |
| 102 | Binary Tree Level Order Traversal | Medium | 核心：queue 逐層展開，一輪處理一整層、把下一層小孩塞進 queue。**關鍵教訓是 JS 的 `Array.prototype.shift()` 是 O(佇列長)**——用 `queue.shift()` 抽乾一層 L 個節點 = O(L²)，最寬層 ~n/2 → 整體 O(n²)。修法：`queue` 只增不減 + 一根 `index` 指標往前走（或 2024 舊版的 `for...of` 掃整個 queue 再整包換 `queue = nextQueue`），才是真 O(n)。分層方式使用者定案用**每層開頭記 `levelSize = queue.length - index` 跑固定次數**：`levelSize` 在 for 迴圈開始前先鎖住，代表「目前還沒處理的節點數」＝ 目前總共塞過幾個（`queue.length`）減掉已經處理過幾個（`index`）；迴圈中途陸續 push 下一層小孩不影響這個已鎖住的次數。另一種試過但沒採用的等價寫法是「佇列裡塞 `''` 當層分隔符」：消耗到 `''` 就 `result.push([])` 並補推下一層的 `''`，終止判斷 `index === queue.length - 1 && node === ''` 同時兼顧「停迴圈」和「擋掉尾端多一個 `[]`」——這版留作註解對照，之後 199 / 103 分層時使用者反映 `queue.length - index` 這個減法在面試現場不夠直覺，可以退回最上面那版 `queue = nextQueue` 整包置換（2024 舊版，同樣沒有這個問題）。O(n) time / O(n) space。曾走過的錯路：把單迴圈拆成 `bfs()` helper + 外層 `while` 並改用 `shift()`（複雜度回歸 + 只被呼叫一次的贅餘 helper，已移除） |
| 112 | Path Sum | Easy | DFS 路徑記錄層的**暖身**（存在性判斷，還沒用到 path 陣列 / 回溯）。重點對比 543：112 是「存不存在一條根到葉路徑」，找到一條就夠 → **不需要外層 mutable flag**，`dfs` 回傳 boolean、`dfs(left) \|\| dfs(right)` 往上合成，`\|\|` 左邊 `true` 時右邊自動不算（短路免費）。曾走過的錯路：套 543 的模子用外層 `hasAnswer` flag + void `dfs`，還在 guard 手動寫 `\|\| hasAnswer` 去複製 `\|\|` 本來就有的短路，已改回 return-based。新技巧（104/543 沒有的）：累加值（`lastSum`）**往下當參數傳**、到葉子 `!node.left && !node.right` 才結算——`&& isLeaf` 不能拿掉（`Node.val` 可負、且限定必須到葉）。`dfs` helper 這裡確實需要（要帶 `lastSum` 參數）。O(n) time / O(h) space |
| 113 | Path Sum II | Medium | 這層的代表技巧：**backtracking**——一個共用 `history` 陣列，`push` 緊接 null guard 後、`pop` 在函式**最後、無條件**執行（每個非空節點剛好一次 push 一次 pop，天然平衡），只在命中葉子時 `result.push([...history])` 抄一次快照（那次複製是輸出，省不掉）。四個易錯點：命中後**不要 `return`**（會跳過 `pop()`，路徑變髒——這是最常見 backtracking bug）、`pop()` 位置在遞迴呼叫之後、快照一定要 `[...history]` 不能直接推 `history` 本身、`&& isLeaf` 同 112。曾走過的錯路：先寫「不可變路徑」版 `const history = [...lastHistory, node.val]` 每個節點複製整條祖先路徑——正確但 O(n·h)（歪斜樹 O(n²)），且繞過了這層要練的 push/pop；已改成共用陣列 + 回溯，走訪回到 O(n)（快照另計 O(命中數·h)）。immutable 版留作註解對照。O(n) time / O(h) space（不含輸出） |
| 199 | Binary Tree Right Side View | Medium | 一題寫出兩種派系，都站穩。**BFS 版**（102 骨架延伸，現留作註解）：沿用 index 指標逐層掃描，迴圈內把 `node = layer[index]` 一路推進，故意不直接寫 `layer[layer.length-1].val`，改用「跑完整層迴圈後 `node` 剛好停在最後一個」的殘留狀態去拿最右節點——使用者確認這是刻意選擇，不是失誤。**DFS 版**（最終採用，自己想出，過程中沒被直接告知做法）：先右子樹再左子樹遞迴，`depth` 當 index，只在 `result[depth] === undefined`（該深度第一次被踩到）才寫入，right-first 保證第一次踩到的就是最右邊那個節點；不用額外 `!root` guard，`dfs(null, depth)` 直接短路涵蓋空樹。BFS 版 O(n) space（取決於最寬層的 queue 大小），DFS 版遞迴堆疊 O(h)——兩者在歪斜樹都退化成 O(n)，但一般情況 DFS 版常數更小。都 O(n) time |
| 103 | Binary Tree Zigzag Level Order Traversal | Medium | 這層的代表技巧：雙指標 `i`（頭）／`j`（尾）同步走訪同一層——因為 `i + j` 恆等於 `length - 1`，迴圈其實跑滿整層（不是提早相遇停下）。`iNode`（`i` 指到的節點）永遠負責蒐集下一層小孩，維持樹結構左到右順序、不受本層是否反向影響；`jNode` 是 `iNode` 的鏡像位置，`isReverse` 只決定這次要記錄 `iNode.val` 還是鏡像的 `jNode.val`——單一次掃描內同時完成子節點蒐集跟鏡像讀值，不必額外呼叫 `reverse()`/`unshift()`。這個寫法是在不確定 `reverse()` 成本時先選的保守版；後來透過 `/clarify` 確認 `reverse()` 對長度 L 的陣列是 O(L)，所有層加總只有 O(n)（`n ≤ 2000` 不會 TLE），跟「先正常蒐集、`isReverse` 才整層 `reverse()`」複雜度同量級，使用者知道兩者等價後仍選擇保留雙指標版。O(n) time / O(n) space |
| 236 | Lowest Common Ancestor of a Binary Tree | Medium | 後序 DFS，讓每個節點回傳「這棵子樹裡有沒有找到 p 或 q」，往上合併判斷。核心不變量：`isSelfMatch`／`isLeftMatch`／`isRightMatch` 三個布林轉數字加總，`=== 2`（任兩者成立）就是 LCA——這行直接表達「兩兩收斂」的原意；比另一版拆成兩個 if/else 分支（自己是目標+任一邊有 vs. 自己不是目標+兩邊都有）更好懂，使用者反而覺得拆分支版更難懂，最終選加總版（同一條規則被拆成兩種情境描述，不如直接寫出不變量本身）。比對用 `.val` 而非 `===` 參考比對：透過 `/clarify` 確認題目沒保證傳入的 `p`、`q` 是樹裡同一個物件參考，只保證 `All Node.val are unique` + 存在於樹中，靠值比對才安全，測資也刻意用 `new TreeNode(...)` 另外建的節點驗證這點。加了 `!!lca` 提早剪枝，找到答案後其餘分支不再往下展開。O(n) time / O(h) space |
| 124 | Binary Tree Maximum Path Sum | Hard | 跟 543 Diameter 同型的後序 DFS：每個節點回傳「往下延伸的最大單邊路徑和」，同時在每個節點更新全局 `max`（允許同時走左右兩邊的「轉彎」候選）。負貢獻怎麼不採用：寫出並比較了兩版——(a) 最終採用版，`max`／回傳值的 `Math.max(...)` 都把 `val` 自己單獨列為候選項，靠這點隱性排除負的 `leftSum`／`rightSum`；(b) 教科書版，子節點回傳前先 `Math.max(0, leftSum)` 明確砍負貢獻。兩版邏輯等價、同一組測資結果一致，使用者實測後者呼叫 `Math.max` 次數較多（4 次 vs 2 次）、多了約 1ms，決定保留呼叫次數較少的版本（這個差異在測試樹規模下多半是量測雜訊，不影響 O(n) 這個收斂複雜度）。O(n) time / O(h) space |
| 257 | Binary Tree Paths | Easy | 選做，113 backtracking 模板的直接應用：`push` 緊接 null guard 後、`pop` 函式最後無條件執行，命中葉子（`isLeaf`）時用 `paths.join('->')` 直接把目前路徑轉成輸出字串，比 113 的 `[...history]` 陣列快照更省一步（不用另外複製，join 本身就是要的輸出格式）。複雜度討論：一開始寫 `O(n)`，被問到 `join()` 本身是 O(k)（k = 當前路徑長度）之後，一起用「長鏈接完全二元樹」「毛毛蟲樹」兩個反例推翻了「化簡成 O(n)」跟「w×h」（w=最大寬度）這兩個猜測——都會被特定樹形舉出反例（前者可證明是 Θ(n²)、後者在毛毛蟲樹上嚴重低估），確認全部 `join()` 加總的正確上界是 **O(n·h)**，跟走訪本身的 O(n) 分開算，這跟 113 的「快照另計 O(命中數·h)」是同一件事，只是字串接合換了個形式。最終註解改成 `O(n * h)`。O(n·h) time / O(n) space |

## 下一題（待 /q 依本層出題）

**本題型學習曲線已全部走完，包含選做的 257 也做完了**——Binary Tree BFS/DFS 這個題型目前沒有排定的下一題，等下次 `/q tree` 再依 PROGRESS.md 找新的複習或新題。

## 學習曲線進度

```
基本 DFS 遞迴（問性質：最大深度、直徑、路徑和）✅（104 純回傳、543 回傳+節點更新累計；112 選做未做）
BFS 層序遍歷（queue，逐層處理，102 Level Order）✅（102：shift() O(n²) 陷阱 → index 指標 / 整包換；levelSize = queue.length - index 定案，面試現場不直覺時可退回 queue = nextQueue 整包置換）
DFS 路徑記錄（根到葉累積路徑，113 Path Sum II、257 Binary Tree Paths）✅（112 暖身：存在性用 `||` 合成免 flag；113：共用陣列 + push/pop 回溯，命中後不 return、快照要 [...copy]；257：同模板換成 join('->') 輸出字串，順便釐清 join 總成本是 O(n·h) 不是 O(n)）
BFS 層序變形（199 Right Side View、103 Zigzag）✅（199：BFS index 版 + DFS depth 版都寫對；103：雙指標鏡像 index 單次掃描完成蒐集+反向讀值，避開額外 reverse()/unshift() pass，確認複雜度同量級後仍選擇保留）
一般樹的 LCA（非 BST 版，後序 DFS 往上傳是否找到 p/q，236）✅（三個布林轉數字加總 `=== 2` 判斷兩兩收斂；`.val` 比對搭配 `/clarify` 確認的「無保證參考相等」）
進階後序 DFS：子樹值往上合併（124 Maximum Path Sum）✅（val 自己當候選項 vs Math.max(0,...) 明確砍負貢獻，兩版等價，選了呼叫次數較少的版本）
← 本題型複習到此結束（含選做 257，全部完成）
```

---

# Grid / Matrix BFS / DFS 複習進度

> 跟上面「Binary Tree BFS / DFS」是不同題型：這裡是把 grid 當隱式圖做連通塊遍歷（需要 visited、處理四方向與邊界）。
> 完成狀態依 PROGRESS.md 裡最後練習時間落在**近兩個月內**（2026-07-05 之後）的紀錄認定，由淺入深排列。

## 已完成

| 題號 | 題目 | 難度 | 重點 |
|------|------|------|------|
| 1020 | Number of Enclaves | Medium | 反向思考：不要逐格問「這格能不能逃到邊界」，改問「哪些格從邊界灌得到」。從四條邊上的陸地做 flood fill 把連通塊全沉成 `0`，最後數剩下的 `1` 就是答案。這是「條件＝有沒有連到邊界」題（130 / 417 / 1254）的標準招。只需**一種**標記（灌到＝逃得出＝設 `0`），「逃不出」靠最後還是 `1` 的用扣算得到，沒有「懸而未決」的中間態。曾走過的錯路：逐格 DFS 回傳 boolean「能否逃出」＋記憶化（`2` 逃得出 / `0` 逃不出 / `history` set 正在問），三種狀態並存、四方向 OR 串接的短路正確性要另外論證、`// down` 複製貼上寫成 `row - 1`（三個官方範例都沒踩到這個方向 bug）。純遞迴 flood fill 在 500×500 蛇形陸地會爆 call stack → 改**顯式 stack**。使用者偏好：外層用雙迴圈掃全圖挑邊界格（不特別只跑周長）。O(m·n) time / O(m·n) space（worst case stack 裝過所有格） |

## 下一題（待 /q 依本層出題）

**層級：從邊界往內灌 / 反向連通（1020 已站穩）**

同一招的鞏固題，或往「多源 BFS」推：

- 1254 Number of Closed Islands（Medium，跟 1020 幾乎同型：先從邊界沉掉開放島，再數剩下的島「數量」而非格數；全新題）
- 130 Surrounded Regions（Medium，一樣邊界 flood fill 標記，把沒被標到的 `O` 翻成 `X`；池內 2024-05-09）
- 994 Rotting Oranges（Medium，往下一層「多源 BFS」：所有腐爛橘子同時入隊、逐層擴散計時間；池內 2022-10-29）

## 學習曲線進度

```
連通塊 flood fill / 計數（200 Number of Islands、695 Max Area of Island；PROGRESS.md 2022–2024 練過，本輪未重做）
從邊界往內灌 / 反向連通 ← 目前在這裡（1020 ✅；1254 / 130 待做）
多源 BFS（994 Rotting Oranges、542 01 Matrix、286 Walls and Gates）
grid 上的最短路 BFS（1091 Shortest Path in Binary Matrix、909 Snakes and Ladders）
狀態編碼 BFS（1293 這類帶額外狀態維度：剩幾次消除障礙）
```

---

# Binary Search 複習進度

> 完成狀態依 PROGRESS.md 裡最後練習時間落在**近兩個月內**（2026-07-05 之後）的紀錄認定，由淺入深排列。

## 已完成

| 題號 | 題目 | 難度 | 重點 |
|------|------|------|------|
| 33 | Search in Rotated Sorted Array | Medium | 每次二分先判斷 `nums[left..middle]` 是否有序，再檢查 target 是否落在那段有序區間內，決定要縮左半還右半。O(log n) / O(1)。另一版是先二分找旋轉點、再對兩段分別做標準二分（O(2 log n)） |
| 153 | Find Minimum in Rotated Sorted Array | Medium | 比較 `nums[middle]` 跟 `nums[right]`：middle > right 代表斷點在右半，最小值在 middle 右邊；否則 middle..right 有序，最小值是 middle 或更左。收斂到 `left === right` 即為答案，不變量寫在註解裡（最小值必落在 [left, right]） |
| 34 | Find First and Last Position of Element in Sorted Array | Medium | 同一個 target 做兩次「收斂型」二分：找到 target 後不馬上回傳，往左（找最左）或往右（找最右）繼續縮範圍，直到 `right < left` 才真正結束，取最後一次記錄到的 middle |
| 162 | Find Peak Element | Medium | 找的不是定值而是「局部最大」：靠 `nums[middle+1] > nums[middle]` 判斷坡是往上還往下，決定往哪邊縮。試過「搜尋型」（while 內判斷答案）跟「收斂型」（收斂到 `left===right` 才是答案）兩種寫法，最終採用收斂型 |
| 1901 | Find a Peak Element II | Medium | 162 的 2D 版：改成對「行（column）」二分，每次先掃一整欄找出最大值所在的 row，再拿這個值跟左右兩欄同一 row 的值比較，決定往左或右縮欄位。O(m log n)：二分縮的是欄數，但每次要花 O(m) 掃一整欄 |
| 287 | Find the Duplicate Number | Medium | 不是對 index 二分，是對「值域」`[1, n-1]` 二分：`findAtMost(mid)` 算陣列裡有幾個數 `<= mid`，如果這個數量大於 mid，代表重複的數字落在 `[left, mid]`。是「二分答案」類型的入門，另外也看過 Floyd 判圈法（快慢指標）跟 Set 記錄兩種 O(n) 解法 |
| 1552 | Magnetic Force Between Two Balls | Medium | 二分答案完整應用：對「相鄰兩球最小距離 `d`」二分（範圍 `[1, max-min]`），check function 排序後只鎖第一顆球在 `sorted[0]`、之後貪心「離上一顆 ≥ `d` 就放」，湊夠 `m` 顆即可行。可行值是前綴 `[1, d*]`，`isDistancePossible` 回傳條件要用「放到 `m` 顆」而非「剛好用完」——湊夠就 `break` 讓 `remain` 不會變負，`remain === 0` 才等價於「至少 `m` 顆」。二分命中可行分支就 `max = middle`（不用 `Math.max`），最後一次命中必為 `d*`。曾走過的錯路：對「球放哪個籃子」遞迴切位置中點（只能鋪 `2^k+1` 顆、且最佳排法可能把球擠一側如 `{1,5,100}`，策略本身錯） |

## 下一題（待 /q 依本層出題）

**層級：二分答案（對值域二分 + O(n) 判斷函式）已站穩**（287 入門、1552 完整應用，check function 用貪心掃一遍）

`410`、`1011`、`875`、`1283` 這類典型「二分答案」題在 2026-05 做過，距今超過兩個月，不算本次複習已完成，但都在 8 個月內、不會被 `/q` 當新題選中。下一步往「判斷函式更複雜／二分結合其他結構」推：

- 1898 Maximum Number of Removable Characters（Medium，二分「移除幾個字元」，判斷函式是「檢查子序列」不是貪心累加；全新題）
- 1631 Path With Minimum Effort（Medium，二分「最大高低差」，判斷函式改成 BFS/DFS 走圖看能不能連通；二分 + 圖遍歷；全新題）
- 1482 Minimum Number of Days to Make m Bouquets（Medium，二分「天數」，判斷函式貪心數連續花段；全新題）

## 學習曲線進度

```
旋轉陣列找值（33）✅
旋轉陣列找邊界／最小值（153）✅
同陣列找左右邊界，一題二分兩次（34）✅
找局部最大值，不是找定值（162）✅
找局部最大值的 2D 版（1901）✅
對值域二分（不是對 index），二分答案入門（287）✅
二分答案完整應用：對答案二分 + 貪心 check（1552）✅
← 目前在這裡：判斷函式更複雜 / 二分結合其他結構（1898 子序列 check、1631 二分+圖遍歷、1482 待做）
```
