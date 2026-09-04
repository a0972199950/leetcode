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

## 下一題（待 /q 依本層出題）

**層級：expression eval / 複雜 stack 狀態**（856 是這層第一題，已完成）

- 下一題候選：227 Basic Calculator II（運算子優先級，池內 2022-11-07）
- 150 Evaluate RPN、394 Decode String、636 Exclusive Time 都在 8 個月內，不在池裡

## 學習曲線進度

```
基本 stack 操作（232）✅
stack 模擬（844）✅
stack 序列驗證（946）✅
bracket matching（921）✅
expression eval / 複雜 stack 狀態 ← 目前在這裡（856 ✅ / 227 待做）
monotonic stack
Next Greater Element 類
```

## 備註

- 901 Online Stock Span（monotonic stack 層）在 2026-09-04 因 /q 誤判進度被提早出題並完成。
  這**不代表**複習進度推進到 monotonic stack 層——照上面的曲線，該層還在後面。
  等複習走到 monotonic stack 層時，901 已寫過可略過。
