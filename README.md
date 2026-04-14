# 黃昏之刃 DUSKBLADE 招募頁

Star Citizen 虛擬戰隊 **Vesper Squad — Duskblade (黃昏之刃)** 的招募 landing page。HUD / 戰術儀錶板風格的單頁式介紹，包含隊伍定位、訓練科目、作戰演練、福利考核、FAQ 與 Discord QR 入口。

🔗 [線上版本](https://leadingtw273.github.io/duskblade-recruitment/)

## 技術棧

- **Vite 8** + **React 19**
- **Tailwind CSS 4**（透過 `@tailwindcss/vite` plugin）
- **lucide-react**（icon）
- **GitHub Actions** 自動部署到 GitHub Pages

## 本地開發

```bash
npm install
npm run dev      # 啟動 dev server (預設 http://localhost:5173)
npm run build    # 產生 production 建置於 dist/
npm run preview  # 本地預覽 build 結果
npm run lint     # ESLint
```

## 版面特色

- **單頁海報式排版**：桌面 4 欄 grid、手機/平板自動堆疊
- **自適應縮放**：≥1600/1920/2400/2880px 四段 CSS zoom 斷點（1.08 / 1.12 / 1.20 / 1.30）
- **HUD 美學**：琥珀 × 深藍配色、mono 裝飾字、四角切角、對角警示條紋、瞄準環、戰場威脅分級
- **三欄底部對齊**：角色圖以 `flex-grow + object-cover` 自動拉伸
- **角色圖卡輪播**：6 張 character 圖每 3.5s 自動切換，支援滑鼠懸停暫停、點擊圖片換下一張、底部指示點手動跳轉
- **RWD Discord 入口**：桌面顯示 QR code，小螢幕改為 `Deploy // 加入 Discord` 按鈕（開新分頁）

## 部署

Push 到 `master` 分支即觸發 `.github/workflows/deploy.yml`：
1. `npm ci && npm run build`
2. 將 `dist/` 上傳為 Pages artifact
3. 由 `actions/deploy-pages` 發布

在 Repo Settings → Pages 需將 Source 設為 **GitHub Actions**。

## 專案結構

```
src/
├── App.jsx              # 主要海報版面
├── main.jsx             # React 入口
├── index.css            # Tailwind 全域樣式
└── assets/
    ├── vesper_squad_logo.png
    └── character_01.png ~ character_06.png
```

## License

僅供 Vesper Squad 戰隊內部招募使用。
