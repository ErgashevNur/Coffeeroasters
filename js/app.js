const burgerButtonBtn = document.querySelector(".burger-button");
const hiddenNavEl = document.querySelector(".hidden-nav");
const burgerMenuEl = document.querySelector(".burger-menu");

burgerButtonBtn.addEventListener("click", () => {
  hiddenNavEl.classList.toggle("show-nav");
  document.body.classList.toggle("overflow-toggle");
  if (document.body.classList.contains("overflow-toggle")) {
    burgerMenuEl.src = "../img/shared/mobile/icon-close.svg";
  } else {
    burgerMenuEl.src = "../img/shared/mobile/icon-hamburger.svg";
  }
});

function toggleActive(element) {
  element.classList.toggle("active");
}
