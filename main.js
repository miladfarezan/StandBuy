let hamburgerMenu = document.querySelector(".hamburger-menu-container");
let mainHeader = document.querySelector(".main-header");
let modal = document.querySelector(".modal");
let modalitem1 = document.querySelector(".modal-item1");
let modalitem2 = document.querySelector(".modal-item2");
let modalitem3 = document.querySelector(".modal-item3");
let modalitem4 = document.querySelector(".modal-item4");
let modalitem5 = document.querySelector(".modal-item5");
let modalitem6 = document.querySelector(".modal-item6");
let priceBtn = document.querySelectorAll(".price-items-btn");
let ModalPricePlus = document.querySelector(".modal-price-plus");
let ModalPricePro = document.querySelector(".modal-price-pro");
let closeBtnPrice = document.querySelectorAll(".close-btn");
let backdrop = document.querySelector(".backdrop");
let descriptionTile1 = document.querySelector(".description-title-1");
let descriptionItem1 = document.querySelector(".description-item-1");
let descriptionTitlr2 = document.querySelector(".description-title-2");
let descriptionItem2 = document.querySelector(".description-item-2");
let descriptionTile3 = document.querySelector(".description-title-3");
let descriptionItem3 = document.querySelector(".description-item-3");
let descriptionTile4 = document.querySelector(".description-title-4");
let descriptionItem4 = document.querySelector(".description-item-4");
let descriptionTile5 = document.querySelector(".description-title-5");
let descriptionItem5 = document.querySelector(".description-item-5");
let image1 = document.querySelector(".item-items-image-1");
let image2 = document.querySelector(".item-items-image-2");
let image3 = document.querySelector(".item-items-image-3");
let image4 = document.querySelector(".item-items-image-4");
let image5 = document.querySelector(".item-items-image-5");
let questionItem = document.querySelectorAll(".container-question-item");
let answerTitle1 = document.querySelector(".answer-title-1");
let positiveItem1 = document.querySelectorAll(".positive-item-1");
let answerTitle2 = document.querySelector(".answer-title-2");
let answerTitle3 = document.querySelector(".answer-title-3");
let answerTitle4 = document.querySelector(".answer-title-4");
let answerTitle5 = document.querySelector(".answer-title-5");
let answerTitle6 = document.querySelector(".answer-title-6");
let answerTitle7 = document.querySelector(".answer-title-7");
hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("open-hamburger-menu");
  modal.classList.toggle("open-modal");
  mainHeader.classList.toggle("background-change-color");
});
modalitem1.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("open-hamburger-menu");
  modal.classList.toggle("open-modal");
  mainHeader.classList.toggle("background-change-color");
});
modalitem2.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("open-hamburger-menu");
  modal.classList.toggle("open-modal");
  mainHeader.classList.toggle("background-change-color");
});
modalitem3.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("open-hamburger-menu");
  modal.classList.toggle("open-modal");
  mainHeader.classList.toggle("background-change-color");
});
modalitem4.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("open-hamburger-menu");
  modal.classList.toggle("open-modal");
  mainHeader.classList.toggle("background-change-color");
});
modalitem5.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("open-hamburger-menu");
  modal.classList.toggle("open-modal");
  mainHeader.classList.toggle("background-change-color");
});
for (let i = 0; i < 1; i++) {
  priceBtn[(i = 0)].addEventListener("click", () => {
    backdrop.style.display = "block";
    ModalPricePlus.classList.add("open-modal");
  });
}
for (i = 0; i < 1; i++) {
  priceBtn[(i = 1)].addEventListener("click", () => {
    backdrop.style.display = "block";
    ModalPricePro.classList.add("open-modal");
  });
}
for (let i = 0; i < closeBtnPrice.length; i++) {
  closeBtnPrice[i].addEventListener("click", () => {
    backdrop.style.display = "none";
    ModalPricePro.classList.remove("open-modal");
    ModalPricePlus.classList.remove("open-modal");
  });
  descriptionTile1.addEventListener("click", () => {
    descriptionTile1.style.color = "#fff";
    descriptionItem1.classList.remove("remove-item-1");
    descriptionTitlr2.style.color = "gray";
    descriptionItem2.classList.remove("open-item-2");
    descriptionTile3.style.color = "gray";
    descriptionItem3.classList.remove("open-item-3");
    descriptionTile4.style.color = "gray";
    descriptionItem4.classList.remove("open-item-4");
    descriptionTile5.style.color = "gray";
    descriptionItem5.classList.remove("open-item-5");
    image1.style.display = "block";
    image2.style.display = "none";
    image3.style.display = "none";
    image4.style.display = "none";
    image5.style.display = "none";
  });
}
descriptionTitlr2.addEventListener("click", () => {
  descriptionTitlr2.style.color = "#fff";
  descriptionItem2.classList.add("open-item-2");
  descriptionItem1.classList.add("remove-item-1");
  descriptionTile1.style.color = "gray";
  descriptionTile3.style.color = "gray";
  descriptionItem3.classList.remove("open-item-3");
  descriptionTile4.style.color = "gray";
  descriptionItem4.classList.remove("open-item-4");
  descriptionTile5.style.color = "gray";
  descriptionItem5.classList.remove("open-item-5");
  image1.style.display = "none";
  image2.style.display = "block";
  image3.style.display = "none";
  image4.style.display = "none";
  image5.style.display = "none";
});
descriptionTile3.addEventListener("click", () => {
  descriptionTile3.style.color = "#fff";
  descriptionItem3.classList.add("open-item-3");
  descriptionTile1.style.color = "gray";
  descriptionItem1.classList.add("remove-item-1");
  descriptionTitlr2.style.color = "gray";
  descriptionItem2.classList.remove("open-item-2");
  descriptionTile4.style.color = "gray";
  descriptionItem4.classList.remove("open-item-4");
  descriptionTile5.style.color = "gray";
  descriptionItem5.classList.remove("open-item-5");
  image1.style.display = "none";
  image2.style.display = "none";
  image3.style.display = "block";
  image4.style.display = "none";
  image5.style.display = "none";
});
descriptionTile4.addEventListener("click", () => {
  descriptionTile4.style.color = "#fff";
  descriptionItem4.classList.add("open-item-4");
  descriptionTile1.style.color = "gray";
  descriptionItem1.classList.add("remove-item-1");
  descriptionTitlr2.style.color = "gray";
  descriptionItem2.classList.remove("open-item-2");
  descriptionTile3.style.color = "gray";
  descriptionItem3.classList.remove("open-item-3");
  descriptionTile5.style.color = "gray";
  descriptionItem5.classList.remove("open-item-5");
  image1.style.display = "none";
  image2.style.display = "none";
  image3.style.display = "none";
  image4.style.display = "block";
  image5.style.display = "none";
});
descriptionTile5.addEventListener("click", () => {
  descriptionTile5.style.color = "#fff";
  descriptionItem5.classList.add("open-item-5");
  descriptionTile1.style.color = "gray";
  descriptionItem1.classList.add("remove-item-1");
  descriptionTitlr2.style.color = "gray";
  descriptionItem2.classList.remove("open-item-2");
  descriptionTile3.style.color = "gray";
  descriptionItem3.classList.remove("open-item-3");
  descriptionTile4.style.color = "gray";
  descriptionItem4.classList.remove("open-item-4");
  image1.style.display = "none";
  image2.style.display = "none";
  image3.style.display = "none";
  image4.style.display = "none";
  image5.style.display = "block";
});

for (let i = 0; i < 1; i++) {
  questionItem[(i = 0)].addEventListener("click", () => {
    answerTitle1.classList.toggle("open-answer-title");
    for (let i = 0; i < 1; i++) {
      positiveItem1[(i = 0)].classList.toggle("open-positive-item-1");
    }
  });
}
for (let i = 0; i < 1; i++) {
  questionItem[(i = 1)].addEventListener("click", () => {
    answerTitle2.classList.toggle("open-answer-title");
    for (let i = 0; i < 1; i++) {
      positiveItem1[(i = 1)].classList.toggle("open-positive-item-1");
    }
  });
}
for (let i = 0; i < 2; i++) {
  questionItem[(i = 2)].addEventListener("click", () => {
    answerTitle3.classList.toggle("open-answer-title");
    for (let i = 0; i < 2; i++) {
      positiveItem1[(i = 2)].classList.toggle("open-positive-item-1");
    }
  });
}
for (let i = 0; i < 3; i++) {
  questionItem[(i = 3)].addEventListener("click", () => {
    answerTitle4.classList.toggle("open-answer-title");
    for (let i = 0; i < 3; i++) {
      positiveItem1[(i = 3)].classList.toggle("open-positive-item-1");
    }
  });
}
for (let i = 0; i < 4; i++) {
  questionItem[(i = 4)].addEventListener("click", () => {
    answerTitle5.classList.toggle("open-answer-title");
    for (let i = 0; i < 4; i++) {
      positiveItem1[(i = 4)].classList.toggle("open-positive-item-1");
    }
  });
}
for (let i = 0; i < 5; i++) {
  questionItem[(i = 5)].addEventListener("click", () => {
    answerTitle6.classList.toggle("open-answer-title");
    for (let i = 0; i < 5; i++) {
      positiveItem1[(i = 5)].classList.toggle("open-positive-item-1");
    }
  });
}
for (let i = 0; i < 6; i++) {
  questionItem[(i = 6)].addEventListener("click", () => {
    answerTitle7.classList.toggle("open-answer-title");
    for (let i = 0; i < 6; i++) {
      positiveItem1[(i = 6)].classList.toggle("open-positive-item-1");
    }
  });
}
