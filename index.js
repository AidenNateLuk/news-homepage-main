const hamburgerMenu = document.querySelector(".hamburger-icon");
const navbar = document.querySelector(".navbar");
const navbarList = document.querySelector(".navbar-list");
const overlay = document.querySelector("#page-overlay");

hamburgerMenu.addEventListener("click", () => {
  if (navbar.classList.contains("navbar-mobile-open") == true) {
    hamburgerMenu.setAttribute("src", "assets/images/icon-menu.svg");
    navbar.classList.remove("navbar-mobile-open");
    navbarList.classList.remove("list-open");
    overlay.classList.remove("overlay");
  } else {
    hamburgerMenu.setAttribute("src", "assets/images/icon-menu-close.svg");
    navbar.classList.add("navbar-mobile-open");
    navbarList.classList.add("list-open");
    overlay.classList.add("overlay");
  }
});
