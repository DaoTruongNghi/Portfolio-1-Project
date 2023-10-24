"usestrict";
const menu = document.querySelector("#menu-icon");
const navList = document.querySelector(".nav-list");

const handlerMenuMobile = function () {
  menu.classList.toggle("bx-x");
  navList.classList.toggle("open");
};

menu.addEventListener("click", handlerMenuMobile);

const scrollReveal = ScrollReveal({
  distance: "65px",
  duration: 2600,
  delay: 450,
  reset: true,
});
scrollReveal.reveal(".logo", { delay: 100, origin: "left" });
scrollReveal.reveal(".hero-text", { delay: 200, origin: "top" });
scrollReveal.reveal(".hero-img", { delay: 450, origin: "top" });
scrollReveal.reveal(".nav-list", { delay: 350, origin: "right" });
scrollReveal.reveal(".icons", { delay: 650, origin: "left" });
