let hamburgerMenu = document.querySelector(".hamburger-menu-container");
let modal = document.querySelector(".modal");
let mainHeader = document.querySelector(".main-header");
let MainNavItemLeft = document.querySelector(".main-nav-item-left-first");
let ChevronDown = document.querySelector(".chevron-down");
let ModalName = document.querySelector(".modal-name");
let ModalItem1 = document.querySelector(".modal-title-1");
let ModalItem2 = document.querySelector(".modal-title-2");
let Backdrop = document.querySelector(".backdrop");
let ModalUserAccont = document.querySelector(".modal-exit-userAccont");
let ModalCloseBtn = document.querySelector(".btn-close");
// let ContainerItemSideBar = document.querySelectorAll(".container-item-sidebar");
// let TitleSideBar = document.querySelectorAll(".container-title-sidebar");
// let IconSideBar = document.querySelectorAll(".container-icon-sidebar");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("open-hamburger-menu");
  modal.classList.toggle("open-modal");
  mainHeader.classList.toggle("background-change-color");
});
MainNavItemLeft.addEventListener("click", () => {
  ChevronDown.classList.toggle("open-chevron-down");
  ModalName.classList.toggle("open-modal-name");
  MainNavItemLeft.classList.toggle("open-main-nav-item-left-first");
});
ModalItem1.addEventListener("click", () => {
  ChevronDown.classList.toggle("open-chevron-down");
  ModalName.classList.toggle("open-modal-name");
  MainNavItemLeft.classList.toggle("open-main-nav-item-left-first");
});
ModalItem2.addEventListener("click", () => {
  Backdrop.style.display = "block";
  ModalUserAccont.classList.toggle("open-modal-exit-useraccont");
  ChevronDown.classList.toggle("open-chevron-down");
  ModalName.classList.toggle("open-modal-name");
  MainNavItemLeft.classList.toggle("open-main-nav-item-left-first");
});
ModalCloseBtn.addEventListener("click", () => {
  Backdrop.style.display = "none";
  ModalUserAccont.classList.toggle("open-modal-exit-useraccont");
});
// for (let i = 0; i < 1; i++) {
//   ContainerItemSideBar[(i = 1)].addEventListener("click", () => {
//     ContainerItemSideBar[(i = 0)].style.background = "none";
//     ContainerItemSideBar[(i = 1)].style.background = "#260d0a";
//     for (i = 0; i < 1; i++) {
//       TitleSideBar[(i = 0)].style.color = "white";
//       TitleSideBar[(i = 1)].style.color = "#fa6256";
//       for (i = 0; i < 1; i++) {
//         IconSideBar[(i = 0)].style.color = "white";
//         IconSideBar[(i = 1)].style.color = "#fa6256";
//       }
//     }
//   });
//   ContainerItemSideBar[(i = 0)].addEventListener("click", () => {
//     ContainerItemSideBar[(i = 1)].style.background = "none";
//     ContainerItemSideBar[(i = 0)].style.background = "#260d0a";
//     for (i = 0; i < 1; i++) {
//       TitleSideBar[(i = 1)].style.color = "white";
//       TitleSideBar[(i = 0)].style.color = "#fa6256";
//     }
//     for (i = 0; i < 1; i++) {
//       IconSideBar[(i = 1)].style.color = "white";
//       IconSideBar[(i = 0)].style.color = "#fa6256";
//     }
//   });
// }
