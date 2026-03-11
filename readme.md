# 🚀 LeetCode 刷題專案

這是一個使用 **TypeScript** 實作的演算法與資料結構學習專案，涵蓋了 LeetCode 題目解答、各種資料結構實作，以及各大科技公司的面試題目實作。專案設計適合程式設計面試準備和演算法學習。

## 📁 專案結構

```
leetcode/
├── data-structure/        # 資料結構實作
│   ├── LinkedList.ts     # 鏈結串列
│   ├── BinaryTree.ts     # 二元樹
│   ├── AVL.ts           # AVL 平衡樹
│   ├── Heap.ts          # 堆積
│   ├── MaxBinaryHeap.ts # 最大二元堆積
│   └── AgencyList.ts    # 代理列表
├── interviews/           # 面試題目實作
│   ├── asus/            # 華碩面試題
│   ├── binance/         # 幣安面試題
│   ├── coupang/         # Coupang 面試題
│   ├── edabit/          # Edabit 練習題
│   ├── mercari/         # Mercari 面試題
│   ├── phase/           # Phase 面試題
│   ├── piccollage/      # PicCollage 面試題
│   ├── pixart/          # 創意資訊面試題
│   ├── tiktok/          # TikTok 面試題
│   ├── tsmc/            # 台積電面試題
│   └── woo/             # Woo 面試題
├── problems/            # LeetCode 題目解答 (400+ 題)
├── scripts/             # 工具腳本
│   ├── template.ts      # 題目模板生成器
│   └── start.ts         # 啟動腳本
├── calculateAndResetStack.ts
├── package.json
├── tsconfig.json
└── readme.md
```

## 🛠️ 技術棧

- **語言**: TypeScript
- **執行環境**: Node.js
- **包管理器**: npm
- **程式碼檢查**: ESLint
- **編譯工具**: tsx, ts-node

## 📚 內容概覽

### 資料結構實作 (`data-structure/`)
- **鏈結串列 (LinkedList)**: 基本的鏈結串列實作
- **二元樹 (BinaryTree)**: 二元樹結構與相關操作
- **AVL 樹**: 自平衡二元搜尋樹
- **堆積 (Heap)**: 最小/最大堆積實作
- **代理列表 (AgencyList)**: 自定義代理列表結構

### LeetCode 題目 (`problems/`)
包含 **400+ 道** LeetCode 題目的 TypeScript 解答，涵蓋：
- 陣列與字串
- 鏈結串列
- 樹與圖
- 動態規劃
- 回溯法
- 雙指標
- 滑動視窗
- 分治法
- 貪心演算法

### 面試題目 (`interviews/`)
收錄來自各大科技公司的真實面試題目：
- **台灣**: ASUS、TSMC、創意資訊
- **國際**: TikTok、Binance、Mercari、Coupang
- **其他**: PicCollage、Woo、Phase、Edabit

## 🚀 快速開始

### 環境需求
- Node.js (v14+)
- npm 或 yarn

### 安裝依賴
```bash
npm install
```

### 開發模式
```bash
# 啟動開發模式（檔案監聽）
npm run dev

# 執行特定檔案
npm start
```

### 建立新題目
```bash
# 使用模板建立新題目檔案
npm run template <題目編號> [題目標題]

# 範例：建立第 100 題
npm run template 100 Same Tree
```

### 程式碼檢查
```bash
# 檢查程式碼風格
npm run lint

# 自動修復程式碼風格問題
npm run lint:fix
```

### 執行特定題目
```bash
# 使用 tsx 執行
npx tsx problems/0001.ts

# 或使用 ts-node
npx ts-node problems/0001.ts
```

## 📖 學習指南

### 1. 資料結構學習路徑
```
鏈結串列 → 堆疊/佇列 → 樹 → 圖 → 高級資料結構
```

### 2. 演算法學習路徑
```
排序/搜尋 → 雙指標 → 滑動視窗 → 遞迴/回溯 → 動態規劃 → 圖論
```

### 3. 題目難度分布
- **簡單 (Easy)**: 基礎語法和簡單邏輯
- **中等 (Medium)**: 需要一定演算法知識
- **困難 (Hard)**: 複雜演算法和資料結構

## 🎯 專案特色

- ✅ **完整的 TypeScript 實作**：型別安全，程式碼品質高
- ✅ **豐富的註解說明**：每個解法都有詳細的思路解析
- ✅ **實戰面試題庫**：來自真實科技公司的面試經驗
- ✅ **模組化設計**：每個題目獨立，便於學習和參考
- ✅ **自動化工具**：內建模板生成器，提升開發效率

## 📝 題目編號規則

- `0001.ts` - `9999.ts`: LeetCode 官方題目
- 各公司資料夾: 按公司分類的面試題目

## 🤝 貢獻指南

歡迎提交 Issue 和 Pull Request！

1. Fork 本專案
2. 建立功能分支
3. 提交變更
4. 推送到分支
5. 建立 Pull Request

## 📄 授權

本專案採用 ISC 授權條款。

## 📊 專案統計

- **LeetCode 題目**: 400+ 道
- **資料結構**: 6 種
- **面試公司**: 11 家
- **程式語言**: TypeScript
- **最後更新**: 2025年6月

## 開發環境
- Node.js
- TypeScript
- ESLint