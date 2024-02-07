function toggleList() {
  const list = document.getElementById("list");
  list.classList.toggle("shown");
  blurOut();
}
function blurOut() {
  const blurry = document.getElementById("blurry");
  blurry.classList.toggle("shown");
}
