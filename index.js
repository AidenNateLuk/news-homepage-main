const menuButton = document.querySelector(".menu");
const containerNav = document.querySelector(".container_nav");
const closeNav = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

window.addEventListener("resize", () => {
  if (window.innerWidth > 700) {
    containerNav.style.display = "block";
  } else {
    containerNav.style.display = "none";
    overlay.style.display = "none";
  }
});

menuButton.addEventListener("click", () => {
  containerNav.style.display = "block";
  overlay.style.display = "block";
});

closeNav.addEventListener("click", () => {
  containerNav.style.display = "none";
  overlay.style.display = "none";
});
