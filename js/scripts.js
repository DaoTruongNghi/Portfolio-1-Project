"usestrict";
const menu = document.querySelector("#menu-icon");
const navList = document.querySelector(".nav-list");

const handlerMenuMobile = function () {
  menu.classList.toggle("bx-x");
  navList.classList.toggle("open");
};

menu.addEventListener("click", handlerMenuMobile);
