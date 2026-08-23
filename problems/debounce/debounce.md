# 題目：實作 Enhanced Debounce

實作一個 `debounce` 函式，需支援以下功能：

```typescript
interface DebouncedFn<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): void
  cancel(): void        // 取消尚未執行的 callback
  flush(): void         // 立即執行尚未執行的 callback（如果有的話）
  pending(): boolean    // 回傳是否有尚未執行的 callback
}

function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number,
  options?: { leading?: boolean; trailing?: boolean }
): DebouncedFn<T>
```

## 需求說明

1. **基本 debounce**：在最後一次呼叫後等待 `delay` 毫秒才執行
2. **`leading: true`**：第一次呼叫時**立即執行**，之後在 delay 期間的呼叫被忽略（直到冷卻結束）
3. **`trailing: true`**（預設）：delay 結束後才執行，取最後一次呼叫的參數
4. **`leading + trailing` 同時為 true**：第一次立即執行，delay 結束後**若期間有新呼叫**則再執行一次
5. **`cancel()`**：取消等待中的執行
6. **`flush()`**：若有等待中的執行，立即觸發（用最後一次的參數）
7. **`pending()`**：回傳是否有等待中的執行

## 測試案例

```typescript
// Case 1: 基本 trailing debounce
const log = debounce(console.log, 300)
log('a')        // t=0
log('b')        // t=100
log('c')        // t=200
// t=500 → 印出 'c'

// Case 2: leading debounce
const log2 = debounce(console.log, 300, { leading: true, trailing: false })
log2('a')       // t=0 → 立即印出 'a'
log2('b')       // t=100 → 忽略
log2('c')       // t=200 → 忽略
// t=500 後冷卻結束，下一次呼叫才會再觸發

// Case 3: leading + trailing
const log3 = debounce(console.log, 300, { leading: true, trailing: true })
log3('a')       // t=0 → 立即印出 'a'
log3('b')       // t=100 → 忽略（但記住參數）
log3('c')       // t=200 → 忽略（但記住參數）
// t=500 → 印出 'c'（trailing 觸發，用最後一次的參數）

// Case 4: flush / cancel / pending
const log4 = debounce(console.log, 300)
log4('hello')
log4.pending()  // true
log4.flush()    // 立即印出 'hello'
log4.pending()  // false

const log5 = debounce(console.log, 300)
log5('world')
log5.cancel()   // 取消
// 什麼都不會印出
```

## 建議實作順序

1. 先完成基本版（trailing only）
2. 加上 `leading` 支援
3. 處理 `leading + trailing` 同時為 true 的情況
4. 加上 `cancel()` / `flush()` / `pending()`