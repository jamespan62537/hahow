# taxigo_app

## 如何執行
1. 環境需求
* Node.js >= 20
2. 執行
* npm install
* 在根目錄底下建立 `.env` 並設定以下環境變數
```
VITE_API_URI=http://your-api-url.com
```
* 依照所需執行方式執行以下指令
```
Dev mode
npm run dev

Production mode
npm run build
npm run start
```

## 專案架構

```
app/
├── components/ # UI 元件，依照頁面架構做管理
│ ├── common/ # 共用元件，可跨頁面使用
│ │ ├── Loading/
│ │ ├── Modal/
│ │ └── SkeletonBox/
│ └── heroes/ # heores 頁面相關元件
│ ├── HeroCard/
│ ├── HeroList/
│ ├── HeroListSkeleton/ # hero list loading 用的 skeleton
│ ├── HeroProfile/
│ └── HeroProfileSkeleton/ # hero profile loading 用的 skeleton
├── hooks/ # 業務邏輯封裝層，可依照頁面架構或是功能面封裝
│ └── heroes/ # heroes 相關 Hooks
│ ├── useHeroesListQuery.ts # 英雄列表 query
│ ├── useHeroProfileQuery.ts # 英雄詳情 query
│ ├── useHeroProfileMutation.ts # 英雄詳情 mutation
│ └── usePointCalculation.ts # 點數計算邏輯
├── lib/ # 基礎設施層
│ ├── api/ # API 相關
│ │ ├── api.ts # API handler (錯誤處理)
│ │ ├── createClient.ts
│ │ └── heroes/ # hero 相關 API
│ └── stores/ # 狀態管理 (Zustand)
│ ├── common/ # 管理共用狀態
│ │ └── modalStore.ts
│ └── heroes/ # 管理 heroes 相關狀態
│ └── heroesStore.ts
├── routes/
│ ├── index.tsx # 首頁（導頁至 /heroes）
│ ├── heroes.tsx
│ └── heroes.$heroId.tsx
├── routes.ts # 負責 route 與頁面的配對管理
└── root.tsx
```

### 設計原則
1. 關注點分離：將 UI、業務邏輯、資料層做分離
2. 可重用性：將共用元件獨立封裝
3. 可擴充性：現有架構有利於未來擴充其他服務或邏輯拆分，並可明確的依照路徑找到對應目標 file
4. 單一職責：將每個 folder, file 定義明確

### Data Flow
```
API Layer (lib/api)
↓
React query hooks (hooks/heroes/)
↓
Container Components (routes/)
↓
Presentation Components (components/)
```

## 使用的第三方 lib
1. TanStack Query (Reat Query)
* 理解：提供資料 cache、請求狀態、資料取得機制，另外也可減少狀態管理 (Redux) 的依賴減少許多程式碼
* 使用原因：
 * 自動處理 loading, error 狀態
 * 針對資料做 cache，可減少 api request
 * 對於 api 的使用或操作更有封裝性
2. Zustand
* 理解：較輕量化的狀態管理工具，且語法簡潔
* 使用原因：
 * 相較於 provider, Redux 都還要簡潔，易於上手、加速開發
3. Styled Component
* 理解：CSS-in-JS，支援 props、主題等操作
* 使用原因：
 * 動態樣式的設定相對方便
 * 樣式與元件耦合，易於維護

## 程式碼註解原則
1. JSDoc
* 複雜的業務邏輯、工具：/usePointCalculation.ts、api.ts
2. 行內註解
* 較不直觀的邏輯判斷
* 外部資源連結

## 遇到的困難、問題與解決方法
1. 問題：
* 編輯 hero 能力值時切換 hero 導致資料未儲存而遺失
2. 解決方法：
* 透過 zustand 記錄編輯狀態 (isEdited)
* 在 `HeroList` 的 `Link` 加入 `onClick` 處理
* 如 `isEdited` 為 `true` 則不進行導頁並顯示 Modal 提示

## 備註
1. Cursor 輔助開發
* 使用原則：主要詢問製作方向，但原理還是會透過文件釐清，並手動撰寫，避免過於依賴
 * 項目：skeleton 動畫
 * 過程：
  * 詢問製作 skeleton 所需要的 css 設定為何
  * 得知可透過 `animation` 達成
  * Browser 查詢 animation 相關設定
2. UX friendly 功能
* 點擊 `HeroList` 的 `HeroCard` 後再次點即可關閉 HeroProfile
* 編輯 `HeroProfile` 後未儲存並點擊其他 `HeroCard` 時會跳儲存提示
* 製作 `Skeleton`，資料載入前可以針對部分區塊顯示 loading
* 操作 `HeroProfile` 時依照情境條件將 button 加入 disable 樣式，以防止用者認為可以一直點擊
* 製作 api error handler (lib/api.ts)，可由外部定義在什麼條件下要顯示對應的錯誤提示或是資料收集
