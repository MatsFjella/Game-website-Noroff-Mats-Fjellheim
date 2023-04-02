const menuList = document.querySelector('.menu-list');
const burgerMenu = document.querySelector('.burgermenu');

burgerMenu.addEventListener('click', () => {
  menuList.classList.toggle('show');
});