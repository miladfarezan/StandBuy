let rulesBtn = document.querySelector(".rules-btn");
let backdrop = document.querySelector(".backdrop");
let rulesBox = document.querySelector(".rules");
let closeBtn = document.querySelector(".close-btn");
let hamburgerMenu = document.querySelector(".hamburger-menu-container");
let modal = document.querySelector(".modal");
rulesBtn.addEventListener("click", () => {
  backdrop.classList.add("open-backdrop");
  rulesBox.classList.add("open-rules");
});

closeBtn.addEventListener("click", () => {
  backdrop.classList.remove("open-backdrop");
  rulesBox.classList.remove("open-rules");
});

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("open-hamburger-menu");
  modal.classList.toggle("open-modal");
});
backdrop.addEventListener("click", () => {
  backdrop.classList.remove("open-backdrop");
  rulesBox.classList.remove("open-rules");
});
