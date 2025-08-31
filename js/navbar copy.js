/**
 * Navbar JavaScript - 導航欄功能初始化
 * 標準的點擊展開下拉選單功能
 */

document.addEventListener('DOMContentLoaded', function() {
    // 確保 Bootstrap 的 dropdown 功能正常工作
    if (typeof bootstrap !== 'undefined') {
      // 初始化所有下拉選單
      var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
      var dropdownList = dropdownElementList.map(function(dropdownToggleEl) {
        return new bootstrap.Dropdown(dropdownToggleEl);
      });
      
      console.log('Bootstrap dropdowns initialized:', dropdownList.length);
      
    } else {
      console.warn('Bootstrap is not loaded. Dropdown functionality may not work properly.');
    }
    
    // 為主連結添加點擊事件處理
    document.querySelectorAll('.btn-group .nav-link:not(.dropdown-toggle)').forEach(function(link) {
      link.addEventListener('click', function(e) {
        // 確保主連結正常導航
        // 這裡可以添加額外的邏輯，如果需要的話
      });
    });
    
    // 添加鍵盤導航支援
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        // 按 ESC 鍵關閉所有打開的下拉選單
        document.querySelectorAll('.dropdown-menu.show').forEach(function(menu) {
          var dropdownToggle = menu.previousElementSibling;
          if (dropdownToggle && dropdownToggle.classList.contains('dropdown-toggle')) {
            var dropdown = bootstrap.Dropdown.getInstance(dropdownToggle);
            if (dropdown) {
              dropdown.hide();
            }
          }
        });
      }
    });
    
    // 點擊外部區域關閉下拉選單
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-menu.show').forEach(function(menu) {
          var dropdownToggle = menu.previousElementSibling;
          if (dropdownToggle && dropdownToggle.classList.contains('dropdown-toggle')) {
            var dropdown = bootstrap.Dropdown.getInstance(dropdownToggle);
            if (dropdown) {
              dropdown.hide();
            }
          }
        });
      }
    });
    });

    // 手機版下拉選單修正
document.addEventListener('DOMContentLoaded', function() {
    // 檢查是否為手機版
    function isMobile() {
      return window.innerWidth < 992;
    }
    
    // 修正下拉選單定位
    function fixMobileDropdowns() {
      if (isMobile()) {
        const dropdownMenus = document.querySelectorAll('.navbar .dropdown-menu');
        
        dropdownMenus.forEach(menu => {
          // 移除 Popper.js 的內聯樣式
          menu.removeAttribute('data-popper-placement');
          menu.removeAttribute('data-popper-reference-hidden');
          menu.removeAttribute('data-popper-escaped');
          menu.removeAttribute('style');
          
          // 強制設定樣式
          menu.style.position = 'static';
          menu.style.transform = 'none';
          menu.style.left = 'auto';
          menu.style.right = 'auto';
          menu.style.top = 'auto';
          menu.style.width = '100%';
          menu.style.margin = '0';
        });
      }
    }
    
    // 監聽下拉選單事件
    const dropdownToggles = document.querySelectorAll('.navbar .dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('shown.bs.dropdown', function() {
        fixMobileDropdowns();
      });
      
      toggle.addEventListener('show.bs.dropdown', function() {
        fixMobileDropdowns();
      });
    });
    
    // 視窗大小改變時重新檢查
    window.addEventListener('resize', function() {
      setTimeout(fixMobileDropdowns, 100);
    });
    
    // 初始執行
    fixMobileDropdowns();
  });
  