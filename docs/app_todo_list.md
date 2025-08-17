# 📋 圍棋墨韻 App To-Do List

## 一、專案基礎建設

- [ ] **主題/樣式 & 圖標**

  - 設計 Token（色票、字級、間距）
  - Light / Dark Theme 切換
  - Icon：`react-native-vector-icons` / `lucide-react-native`

- [ ] **後端與資料庫**
  - 雲端：Firebase / Supabase
  - 本地：SQLite / WatermelonDB
  - `.env` 管理 + CRUD API 測通
  - Firebase Authentication 是一項由 Google 提供的身份驗證服務，屬於 Firebase 後端服務平台 (BaaS) 的一部分。它讓應用程式的開發者能夠輕鬆地為用戶提供安全、多樣的身份驗證方式，而無需自行建立和維護複雜的後端身份驗證系統。簡單來說，它就像一個幫你處理所有用戶登入、註冊、管理等繁瑣事務的管家。

---

## 二、核心學習功能

- [ ] **圍棋術語詞典**

  - 模型：`Term { id, term, aliases[], definition, examples[], lang }`
  - SQLite 或 `mini-search` 搜尋
  - UI：列表 + 詳細頁 + 收藏

- [ ] **死活題庫**

  - 模型：`Problem { id, sgf, level, tags[], solutionPath[] }`
  - SGF Parser（`sgf` / `@sabaki/sgf`）
  - 棋盤渲染：`react-native-svg`
  - 功能：互動落子 / 解答檢查 / 錯題本

- [ ] **定式學習**

  - 模型：`Joseki { id, name, sgfTree, commentaries[] }`
  - 功能：分支切換 / 錯誤提示 / 好惡手標註

- [ ] **名局賞析**
  - 模型：`ProGame { id, title, black, white, event, sgf, commentary[] }`
  - 功能：棋譜回放 / 講解同步 / 書籤 / 分享

---

## 三、個人助理與管理

- [ ] **棋譜管理**

  - 匯入 / 匯出 SGF
  - 搜尋（對手 / 日期 / 標籤）
  - 雲端同步

- [ ] **計時功能**
  - 模式：基本 / Byo-yomi / Fischer
  - 背景計時（AppState）
  - 鬧鈴提醒（聲音/震動）

---

## 四、其他通用功能

- [ ] **多語言支援**

  - `react-i18next`
  - 支援 繁中 / 簡中 / 英 / 日 / 韓

- [ ] **強制更新**

  - Expo OTA / CodePush
  - 遠端最小版本檢查

- [ ] **會員系統**

  - Google / Apple 登入
  - 訪客模式 → 帳號升級
  - 使用者資料模型

- [ ] **訂閱制進階功能**

  - `react-native-iap` 或 RevenueCat
  - 月/年方案 + 試用
  - 收據驗證 + 恢復購買

- [ ] **離線與同步**

  - React Query persist + SQLite
  - 衝突解決策略

- [ ] **分析與錯誤追蹤**
  - Firebase Analytics / Amplitude
  - Sentry

---

## 五、測試、品質與釋出

- [ ] **測試與品質**

  - 單元測試（棋盤邏輯、SGF 解析）
  - E2E 測試：Detox
  - 無障礙支援

- [ ] **隱私與資安**

  - 隱私權/服務條款頁
  - Crash 日誌不含個資

- [ ] **商店上架流水線**
  - 自動化打包（EAS / Fastlane）
  - TestFlight / Google Play 測試軌道

---

## 🚀 里程碑

- **MVP（4-6 週）**

  - 基礎建設（導航、主題）
  - 棋譜管理（本地 + 匯入匯出）
  - 死活題庫（入門題）
  - 計時器（基本模式）
  - 會員（訪客 + 1 種登入）

- **Milestone 2**

  - 術語詞典
  - 定式學習
  - 訂閱（RevenueCat）
  - 強制更新

- **Milestone 3**
  - 名局賞析
  - 完整雲端同步
  - 高級推薦 & 間隔重複
