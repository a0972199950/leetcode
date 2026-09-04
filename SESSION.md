# Stack 複習進度（從頭開始）

> 本次 session 目標：從 stack 學習曲線起點重新複習，不依賴 8 個月內的舊進度。

## 已完成

| 題號 | 題目 | 難度 | 重點 |
|------|------|------|------|
| 232 | Implement Queue using Stacks | Easy | inStack / outStack 分工，amortized O(1) |
| 844 | Backspace String Compare | Easy | stack 模擬；另有 O(1) space 雙指標解（從右往左掃，backs counter） |
| 946 | Validate Stack Sequences | Medium | greedy pop：每次 push 後立刻盡量 pop；可 in-place 重用 pushed 陣列省 O(n) space |

## 下一題（已 touch）

**921. Minimum Add to Make Parentheses Valid**（Medium）
https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/

- Bracket matching 的入門題，問最少加幾個括號讓字串合法
- 進入 bracket matching 系列的第一題（20 Valid Parentheses 在 8 個月內，不在池裡）

## 學習曲線進度

```
基本 stack 操作（232）✅
stack 模擬（844）✅
stack 序列驗證（946）✅
bracket matching ← 目前在這裡（921 待做）
expression eval / 複雜 stack 狀態
monotonic stack
Next Greater Element 類
```
