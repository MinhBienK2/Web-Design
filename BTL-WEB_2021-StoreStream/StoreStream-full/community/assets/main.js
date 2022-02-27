
// Xử lý menu

const tabs = document.querySelectorAll('.item-tab');

tabs.forEach((tab) => {
  tab.onclick = function() {
    const tabActive = document.querySelector('.item-tab.tab-active');
    tabActive.classList.remove('tab-active');

    this.classList.add('tab-active');
  }
});

// xử lý ẩn hiện back on top
const btnTop = document.querySelector('.btn-on-top');
window.addEventListener("scroll", function() {
  let x = this.scrollY;
  console.log(x);
  if (x >= 500) {
    btnTop.style.display = 'block';
  } else {
    btnTop.style.display = 'none';
  }
});

// xử lý thanh trượt menu
const btnOpenMenu = document.querySelector('.repon__btn-more');
const menuRepon = document.querySelector('.repon__menu-more');
const overlay = document.querySelector('.overlay');

btnOpenMenu.addEventListener("click", function() {
  menuRepon.style.display = 'block';
  overlay.style.display = 'block';
  document.querySelector('content').style.position = 'fixed';
});

overlay.addEventListener("click", function () {
  menuRepon.style.display = 'none';
  overlay.style.display = 'none';
});