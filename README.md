# 2026 上海·成都·九寨溝·峨眉山·烏鎮 9日遊

精美的互動式旅遊行程網頁，展示從高雄出發的 9 天深度探索之旅。

## ✨ 功能特色

- **🎨 現代化視覺設計**
  - 玻璃擬態 (Glassmorphism) 風格
  - 深藍漸層配色主題
  - 流暢的動畫效果

- **📍 時間軸導航**
  - 側邊固定導航列
  - 自動追蹤當前滾動位置
  - 點擊快速跳轉至指定日期

- **🎴 互動式卡片**
  - 每日行程可展開/收合
  - 航班、高鐵、景點分類顯示
  - 地點可連結至 Google Maps

- **📱 響應式設計**
  - 支援桌面、平板、手機瀏覽
  - 自適應佈局與字體大小

## 📅 行程概覽

| 日期 | 地點 | 亮點 |
|------|------|------|
| D1 3/28 | 高雄 → 上海 | 南京步行街、外灘夜景 |
| D2 3/29 | 上海 → 成都 | 太古裡、九眼橋 |
| D3 3/30 | 成都 → 九寨溝 | 黃龍景區鈣華彩池 |
| D4 3/31 | 九寨溝 | 長海、五彩池、諾日朗瀑布 |
| D5 4/1 | 九寨溝 → 成都 | 武侯祠、錦里、寬窄巷子 |
| D6 4/2 | 成都 | 熊貓基地、樂山大佛 |
| D7 4/3 | 峨眉山 → 上海 | 峨眉金頂、十方普賢金像 |
| D8 4/4 | 上海 → 烏鎮 | 烏鎮西柵水鄉 |
| D9 4/5 | 上海 → 高雄 | 田子坊、武康路、返程 |

## 🚀 部署到 GitHub Pages

### 自動部署（推薦）

專案已配置 GitHub Actions，推送到 `main` 分支後會自動部署：

1. **建立 GitHub 倉庫**
   ```bash
   git init
   git add .
   git commit -m "初始化旅遊行程網頁"
   git branch -M main
   git remote add origin https://github.com/你的帳號/Travel.git
   git push -u origin main
   ```

2. **啟用 GitHub Pages**
   - 前往倉庫的 `Settings` → `Pages`
   - 在 `Source` 選擇 `GitHub Actions`
   - 儲存設定

3. **自動部署**
   - 每次推送到 `main` 分支都會自動更新
   - 可在 `Actions` 頁籤查看部署狀態
   - 部署完成後網站位址：`https://你的帳號.github.io/Travel/`

### 手動部署

如不使用 GitHub Actions，可手動設定：

1. 在倉庫 `Settings` → `Pages`
2. `Source` 選擇 `Deploy from a branch`
3. 選擇 `main` 分支和 `/ (root)` 目錄

## 💻 本地開發

無需安裝任何套件，直接開啟 `index.html` 即可預覽：

```bash
# 使用 VS Code Live Server 擴充套件
# 或使用 Python 簡易伺服器
python -m http.server 8000
```

然後訪問 `http://localhost:8000`

## 📁 專案結構

```
Travel/
├── index.html          # 主頁面 HTML
├── index.css           # 樣式表
├── index.js            # 互動邏輯
├── README.md           # 專案說明
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Actions 部署設定
```

## 🛠️ 技術棧

- **HTML5** - 語意化標籤結構
- **CSS3** - 玻璃擬態、漸層、動畫
- **JavaScript (ES6+)** - Intersection Observer、平滑滾動
- **Google Fonts** - Noto Sans TC 字型

## 📄 授權

此專案僅供個人旅遊行程展示使用。
