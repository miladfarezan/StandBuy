let hamburgerMenu = document.querySelector(".hamburger-menu-container");
let modal = document.querySelector(".modal");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("open-hamburger-menu");
  modal.classList.toggle("open-modal");
});
