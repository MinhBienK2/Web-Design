const tabs = document.querySelectorAll('.menu__repon-item');

tabs.forEach((tab) => {
  tab.onclick = function() {
    const tabActive = document.querySelector('.menu__repon-item.menu-active');
    tabActive.classList.remove('menu-active');

    this.classList.add('menu-active');
  }
});