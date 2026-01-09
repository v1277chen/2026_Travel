/**
 * ============================================
 * 旅遊行程網頁互動邏輯
 * ============================================
 * 
 * 功能說明：
 * 1. 滾動動畫觸發 - 當元素進入視窗時淡入顯示
 * 2. 時間軸導航 - 追蹤並高亮當前滾動位置的日期
 * 3. 可展開卡片 - 點擊展開/收合卡片內容
 * 4. 平滑滾動 - 點擊導航時平滑滾動至目標位置
 */

// ============================================
// DOM 載入完成後初始化
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initTimelineNav();
    initExpandableCards();
    initSmoothScroll();
});

// ============================================
// 滾動動畫功能
// - 使用 Intersection Observer API 監測元素是否進入視窗
// - 當元素進入視窗時添加 'visible' class 觸發動畫
// ============================================
function initScrollAnimations() {
    // 取得所有需要動畫的元素
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // 建立 Intersection Observer 實例
    // threshold: 0.1 表示當元素 10% 進入視窗時觸發
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 元素進入視窗，添加 visible class
                entry.target.classList.add('visible');
                // 動畫完成後停止觀察該元素
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,      // 10% 可見時觸發
        rootMargin: '0px'    // 無額外邊距
    });
    
    // 對每個元素進行觀察
    fadeElements.forEach(el => observer.observe(el));
}

// ============================================
// 時間軸導航功能
// - 監控滾動位置，更新當前活動的日期
// - 控制導航列的顯示/隱藏
// ============================================
function initTimelineNav() {
    const nav = document.getElementById('timelineNav');
    const navItems = document.querySelectorAll('.nav-item');
    const daySections = document.querySelectorAll('.day-section');
    const hero = document.getElementById('hero');
    
    // 如果必要元素不存在則返回
    if (!nav || !daySections.length) return;
    
    // 節流函數 - 限制函數執行頻率以提升效能
    // @param {Function} func - 需要節流的函數
    // @param {number} limit - 最小執行間隔（毫秒）
    function throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    // 更新導航狀態的函數
    function updateNav() {
        const scrollPos = window.scrollY;
        const windowHeight = window.innerHeight;
        const heroHeight = hero ? hero.offsetHeight : 0;
        
        // 控制導航列顯示/隱藏
        // 當滾動超過 Hero 區塊的 80% 時顯示導航
        if (scrollPos > heroHeight * 0.8) {
            nav.classList.add('visible');
        } else {
            nav.classList.remove('visible');
        }
        
        // 找出當前可見的日期區塊
        let currentSection = null;
        
        daySections.forEach(section => {
            const rect = section.getBoundingClientRect();
            // 當區塊頂部進入視窗上半部時，設為當前區塊
            if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
                currentSection = section.id;
            }
        });
        
        // 更新導航項目的 active 狀態
        if (currentSection) {
            navItems.forEach(item => {
                if (item.getAttribute('href') === `#${currentSection}`) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }
    }
    
    // 綁定節流後的滾動事件
    window.addEventListener('scroll', throttle(updateNav, 100));
    
    // 初始執行一次
    updateNav();
}

// ============================================
// 可展開卡片功能
// - 點擊卡片切換展開/收合狀態
// ============================================
function initExpandableCards() {
    const expandableCards = document.querySelectorAll('.expandable');
    
    expandableCards.forEach(card => {
        // 取得卡片標題區域（點擊區域）
        const header = card.querySelector('.card-header-expandable');
        
        if (header) {
            header.addEventListener('click', (e) => {
                // 防止連結等元素的預設行為
                e.preventDefault();
                
                // 切換展開狀態
                const isExpanded = card.getAttribute('data-expanded') === 'true';
                card.setAttribute('data-expanded', !isExpanded);
                
                // 添加展開/收合動畫效果
                const content = card.querySelector('.card-expand-content');
                if (content) {
                    if (!isExpanded) {
                        // 展開動畫
                        content.style.display = 'block';
                        content.style.opacity = '0';
                        content.style.maxHeight = '0';
                        
                        // 使用 requestAnimationFrame 確保動畫順暢
                        requestAnimationFrame(() => {
                            content.style.transition = 'opacity 0.3s ease, max-height 0.3s ease';
                            content.style.opacity = '1';
                            content.style.maxHeight = content.scrollHeight + 'px';
                        });
                    } else {
                        // 收合動畫
                        content.style.transition = 'opacity 0.3s ease, max-height 0.3s ease';
                        content.style.opacity = '0';
                        content.style.maxHeight = '0';
                        
                        // 動畫結束後隱藏元素
                        setTimeout(() => {
                            content.style.display = 'none';
                        }, 300);
                    }
                }
            });
        }
    });
}

// ============================================
// 平滑滾動功能
// - 點擊導航連結時平滑滾動至目標區塊
// ============================================
function initSmoothScroll() {
    // 取得所有 hash 連結
    const hashLinks = document.querySelectorAll('a[href^="#"]');
    
    hashLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // 確保是有效的 hash 連結
            if (href && href.length > 1) {
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    
                    // 計算目標位置（考慮固定頁首的高度）
                    const offsetTop = targetElement.offsetTop - 20;
                    
                    // 執行平滑滾動
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // 更新 URL hash（不觸發跳轉）
                    history.pushState(null, null, href);
                }
            }
        });
    });
}

// ============================================
// 額外功能：頁面載入動畫
// ============================================
window.addEventListener('load', () => {
    // 頁面完全載入後，移除載入狀態
    document.body.classList.add('loaded');
    
    // 預先觸發 Hero 區塊的動畫
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('visible');
    }
});
