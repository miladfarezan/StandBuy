let hamburgerMenu = document.querySelector(".hamburger-menu-container");
let mainHeader = document.querySelector(".main-header");
let modal = document.querySelector(".modal");
let modalitem1 = document.querySelector(".modal-item1");
let modalitem2 = document.querySelector(".modal-item2");
let modalitem3 = document.querySelector(".modal-item3");
let modalitem4 = document.querySelector(".modal-item4");
let modalitem5 = document.querySelector(".modal-item5");
let modalitem6 = document.querySelector(".modal-item6");
hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("open-hamburger-menu");
  modal.classList.toggle("open-modal");
  mainHeader.classList.toggle("background-change-color");
});
