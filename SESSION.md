# Stack 複習進度（從頭開始）

> 本次 session 目標：從 stack 學習曲線起點重新複習，**只依這份文件的順序走**。
> 不要拿 PROGRESS.md 裡其他題型 / 其他時間的練習歷史來推進度，也不要把那些題目寫進這份文件。

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
- 其他候選（契合度相當，新舊題平等看待）：
  - 456 132 Pattern（從右往左掃，stack 維護「第三個數」候選；池內 2024-04-17）
- 較輕的選項：1019 Next Greater Node in Linked List（NGE 套 linked list；全新題）
- 739、496、907、402 在 8 個月內，不在池裡；84、901 已提前做過，略過

## 學習曲線進度

```
基本 stack 操作（232）✅
stack 模擬（844）✅
stack 序列驗證（946）✅
bracket matching（921）✅
expression eval / 複雜 stack 狀態（856 ✅ / 227 ✅ / 735 ✅）
monotonic stack ← 目前在這裡（503 ✅；962 進行中，需補 stack push/pop 版；456 待做；84、901 已提前做過）
Next Greater Element 類
```

## 備註

- 901 Online Stock Span（monotonic stack 層）在 2026-09-04 因 /q 誤判進度被提早出題並完成。
  這**不代表**複習進度推進到 monotonic stack 層——照上面的曲線，該層還在後面。
  等複習走到 monotonic stack 層時，901 已寫過可略過。
- 84 Largest Rectangle in Histogram（monotonic stack 層）是 2026-09-03 卡住、2026-09-05 補完的題目，不是照曲線出的。
  跟 901 一樣**不推進**曲線位置；走到 monotonic stack 層時 84、901 都可略過，直接出該層其他題。
