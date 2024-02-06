const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const menu = document.getElementById("menu");
const body = document.body;

function menuToggle(event) {
  event.preventDefault();
  if (menu.classList.contains("show")) {
    closeMenu();
  } else {
    openMenu();
  }
}

menuOpen.addEventListener("click", menuToggle);
menuClose.addEventListener("click", menuToggle);

function openMenu() {
  menu.classList.add("show");
  body.classList.add("menu-open");
  animateMenuIn();
  blurBackground();
}

function closeMenu() {
  animateMenuOut();
  unblurBackground();
  setTimeout(() => {
    menu.classList.remove("show");
    body.classList.remove("menu-open");
  }, 500); // Adjust this time to match the menu animation duration
}

function animateMenuIn() {
  let position = -80; // initial position (off-screen)
  const interval = setInterval(() => {
    position += 1; // incrementally move the menu in
    menu.style.right = position + "vw";
    if (position >= 0) {
      clearInterval(interval);
    }
  }, 5); // Adjust this interval for smoother animation
}

function animateMenuOut() {
  let position = 0; // initial position (fully visible)
  const interval = setInterval(() => {
    position -= 1; // incrementally move the menu out
    menu.style.right = position + "vw";
    if (position <= -80) {
      clearInterval(interval);
    }
  }, 5); // Adjust this interval for smoother animation
}

function blurBackground() {
  // Apply blur effect to all elements in the .page element except for the #menu and its children
  const pageElements = document.querySelectorAll(
    ".page > *:not(#menu):not(#menu *)"
  );
  pageElements.forEach((element) => {
    element.style.filter = "blur(10px)";
  });
}

function unblurBackground() {
  // Remove blur effect from all elements in the .page element except for the #menu and its children
  const pageElements = document.querySelectorAll(
    ".page > *:not(#menu):not(#menu *)"
  );
  pageElements.forEach((element) => {
    element.style.filter = "none";
  });
}
