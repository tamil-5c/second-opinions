function openTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
  
    tabContents.forEach(content => {
      content.style.display = 'none';
    });
  
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });
  
    const selectedTab = document.getElementById(tabId);
    selectedTab.style.display = 'grid';
  
    const clickedTab = document.querySelector(`[onclick="openTab('${tabId}')"]`);
    clickedTab.classList.add('active');
  }
  
  openTab('tab1');
  