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

## 下一題（已 touch）

**856. Score of Parentheses**（Medium）— 超過 8 個月沒練，這次當複習
https://leetcode.com/problems/score-of-parentheses/

- expression eval / 複雜 stack 狀態層的第一題
- 承接 921 的 bracket 結構，但 stack 這次存的是「累積出來的分數值」而非括號本身 → 進入「stack 存狀態」
- 舊解（2024-03-27）：遇 `)` 就把棧頂數字一路加總到 `(` 為止，`sum === 0 ? 1 : 2 * sum` 回填
- 這層後續候選：227 Basic Calculator II（運算子優先級）

## 學習曲線進度

```
基本 stack 操作（232）✅
stack 模擬（844）✅
stack 序列驗證（946）✅
bracket matching（921）✅
expression eval / 複雜 stack 狀態 ← 目前在這裡
monotonic stack
Next Greater Element 類
```

## 備註

- 901 Online Stock Span（monotonic stack 層）在 2026-09-04 因 /q 誤判進度被提早出題並完成。
  這**不代表**複習進度推進到 monotonic stack 層——照上面的曲線，該層還在後面。
  等複習走到 monotonic stack 層時，901 已寫過可略過。
