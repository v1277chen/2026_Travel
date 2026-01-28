---
name: Travel Itinerary Web Development
description: 開發和維護 2026 上海·成都·九寨溝·峨眉山·烏鎮 9日遊旅遊行程網頁
---

# 旅遊行程網頁開發技能

此技能用於開發和維護旅遊行程展示網頁，採用現代化設計風格與響應式佈局。

## 📁 專案結構

```
Travel/
├── index.html          # 主頁面 HTML（行程內容）
├── index.css           # 樣式表（設計系統）
├── index.js            # 互動邏輯（動畫與導航）
├── README.md           # 專案說明文檔
├── Photo/              # 景點圖片與影片資源
│   └── Landmark/       # 地標照片資源夾
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Actions 自動部署
```

## 🎨 設計系統

### CSS 變數（定義於 `index.css` 的 `:root`）

```css
/* 主題色彩 */
--primary-dark: #0f172a;     /* 深夜藍 - 主背景色 */
--primary-mid: #1e293b;      /* 中藍灰 - 卡片背景 */
--accent-cyan: #22d3ee;      /* 強調色 - 青色 */
--accent-orange: #fb923c;    /* 強調色 - 橙色 */
--accent-yellow: #fbbf24;    /* 強調色 - 黃色 */

/* 玻璃擬態效果 */
--glass-bg: rgba(30, 41, 59, 0.6);
--glass-border: rgba(255, 255, 255, 0.1);

/* 間距與圓角 */
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
--radius-md: 12px;
--radius-lg: 16px;
```

### 卡片類型

| 類別 | CSS Class | 用途 |
|------|-----------|------|
| 交通 | `.card-transport` | 集合出發、機場等 |
| 航班 | `.card-flight` | 飛機航班資訊 |
| 高鐵 | `.card-train` | 火車/高鐵資訊 |
| 住宿 | `.card-hotel` | 酒店資訊 |
| 景點 | `.card-attraction` | 推薦景點列表 |
| 美食 | `.card-food` | 美食推薦 |
| 夜間 | `.card-night` | 夜間活動 |
| 提示 | `.card-info` | 一般資訊提示 |
| 警告 | `.card-warning` | 注意事項 |

## 📝 新增行程內容

### 新增一天行程

```html
<!-- Day N 範例結構 -->
<section class="day-section" id="dayN">
    <div class="day-header">
        <div class="day-number">N</div>
        <div class="day-info">
            <span class="day-date">X月X日 (星期)</span>
            <h2 class="day-title">出發地 → 目的地</h2>
            <p class="day-highlight">景點1・景點2・景點3</p>
        </div>
    </div>
    <div class="day-content">
        <!-- 在此加入各種卡片 -->
    </div>
</section>
```

### 新增景點卡片

```html
<div class="card card-attraction fade-in">
    <div class="card-icon">🏛️</div>
    <div class="card-body">
        <h3 class="card-title">推薦景點</h3>
        <div class="attraction-list">
            <div class="attraction-item" style="flex-direction: column; align-items: flex-start; gap: 8px;">
                <div style="width: 100%;">
                    <div class="card-title" style="margin-bottom: 4px;">景點名稱(距離約Xm)</div>
                    <div class="card-desc" style="white-space: normal;">
                        📍 景點簡介描述
                    </div>
                </div>
                <!-- 圖片連結區塊 -->
                <a href="攻略連結" target="_blank" class="media-figure">
                    <img src="Photo/Landmark/圖片.webp" alt="圖片描述">
                    <figcaption class="media-caption">圖片說明文字</figcaption>
                </a>
                <!-- 文字連結 -->
                <a href="攻略連結" target="_blank" class="card-link">
                    📍 連結標題
                </a>
            </div>
        </div>
    </div>
</div>
```

### 新增航班卡片

```html
<div class="card card-flight fade-in">
    <div class="flight-header">
        <span class="airline">航空公司 航班號 (機型)</span>
    </div>
    <div class="flight-route">
        <div class="flight-city">
            <span class="flight-time">HH:MM</span>
            <span class="flight-name">出發地 代碼</span>
        </div>
        <div class="flight-line">
            <span class="flight-icon">✈</span>
        </div>
        <div class="flight-city">
            <span class="flight-time">HH:MM</span>
            <span class="flight-name">目的地 航廈</span>
        </div>
    </div>
    <!-- 行李限制（可選） -->
    <div class="flight-baggage">
        <div class="baggage-title">
            <span>🧳</span> 行李限制規定
        </div>
        <div class="baggage-list">
            <div class="baggage-item">
                <span class="baggage-icon">👜</span>
                <div class="baggage-text">
                    <strong>手提行李：</strong>X公斤/件
                </div>
            </div>
        </div>
    </div>
</div>
```

### 新增住宿卡片

```html
<div class="card card-hotel fade-in">
    <div class="card-icon">🏨</div>
    <div class="card-body">
        <span class="card-time">X月X日(星期)住宿</span>
        <h3 class="card-title">酒店名稱(含/不含早餐)</h3>
        <p class="card-desc">（分店名稱）</p>
        <a href="圖片連結" target="_blank" class="media-figure">
            <img src="Photo/Landmark/酒店圖片.webp" alt="酒店名稱">
            <figcaption class="media-caption">📍 酒店說明</figcaption>
        </a>
        <a href="trip.com連結" target="_blank" class="card-link">
            📍 酒店trip簡介
        </a>
    </div>
</div>
```

## 🖼️ 媒體資源

### 圖片格式建議

| 格式 | 用途 | 說明 |
|------|------|------|
| `.webp` | 主要格式 | 壓縮效率高，推薦使用 |
| `.jpg` | 照片 | 通用相容性好 |
| `.avif` | 高品質 | 更好壓縮，需注意相容性 |
| `.png` | 地圖/圖表 | 需要透明背景時使用 |

### 影片嵌入

```html
<!-- 本地影片 -->
<figure class="media-figure">
    <video width="100%" style="aspect-ratio: 16 / 9;" controls preload="metadata"
        poster="Photo/Landmark/封面圖.jpg">
        <source src="Photo/Landmark/影片.mp4" type="video/mp4">
        您的瀏覽器不支援影片播放。
    </video>
    <figcaption class="media-caption">🎬 影片說明</figcaption>
</figure>

<!-- YouTube 影片 -->
<figure class="media-figure">
    <iframe width="100%" style="aspect-ratio: 16 / 9;"
        src="https://www.youtube.com/embed/VIDEO_ID"
        frameborder="0" allowfullscreen></iframe>
    <figcaption class="media-caption">🎬 影片說明</figcaption>
</figure>
```

## 🔧 JavaScript 功能

專案使用以下主要功能（定義於 `index.js`）：

| 函數名稱 | 功能說明 |
|----------|----------|
| `initScrollAnimations()` | 滾動動畫 - 使用 Intersection Observer 監測元素進入視窗 |
| `initTimelineNav()` | 時間軸導航 - 監控滾動位置，更新當前活動日期 |
| `initExpandableCards()` | 可展開卡片 - 點擊卡片切換展開/收合 |
| `initSmoothScroll()` | 平滑滾動 - 點擊導航連結平滑滾動至目標 |

### 新增可展開卡片

```html
<div class="card card-info fade-in expandable" data-expanded="false">
    <div class="card-header-expandable">
        <div class="card-icon">🚇</div>
        <div class="card-body">
            <h3 class="card-title">標題</h3>
            <p class="card-desc">📍 點擊查看詳細內容</p>
        </div>
        <div class="expand-icon">▼</div>
    </div>
    <div class="card-expand-content">
        <!-- 展開後的詳細內容 -->
    </div>
</div>
```

## 🚀 部署流程

### 自動部署（GitHub Actions）

1. 推送程式碼到 `main` 分支
2. GitHub Actions 自動觸發 `.github/workflows/deploy.yml`
3. 網站自動更新至 `https://用戶名.github.io/Travel/`

### 手動測試

```bash
# 使用 Python 簡易伺服器
python -m http.server 8000

# 或使用 VS Code Live Server 擴充套件
# 訪問 http://localhost:8000
```

## ✅ 開發注意事項

1. **繁體中文註解**：所有程式碼都請加上詳細繁體中文註解
2. **fade-in 動畫**：每個卡片都需要加上 `fade-in` class 以啟用滾動動畫
3. **響應式設計**：測試時需確認桌面與手機版顯示正常
4. **圖片路徑**：圖片統一放在 `Photo/Landmark/` 目錄下
5. **GitHub 檔案限制**：單一檔案不可超過 100MB（大型影片需使用 Git LFS）
6. **導航更新**：新增日期時需同步更新 `timeline-nav` 導航列

## 📱 手機版底部導航

手機版有浮動底部導航列，切換日期時需檢查：

```html
<nav class="timeline-nav" id="timelineNav">
    <ul class="nav-list">
        <li><a href="#day1" class="nav-item" data-day="1">
            <span class="nav-dot"></span>
            <span class="nav-text">D1 城市名</span>
        </a></li>
        <!-- 新增日期時需同步加入 -->
    </ul>
</nav>
```
