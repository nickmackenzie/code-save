var hamburgerBtn = document.getElementById("ham-btn");
var sideMenu = document.getElementById("side-menu");

sideMenu.className = "menu-wrap slide-out-left";

hamburgerBtn.addEventListener("click", menuSlide);
