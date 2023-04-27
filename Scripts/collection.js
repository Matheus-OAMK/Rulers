"use strict";
import server_back from "./auth.js";

const server = new server_back();

const cardTemplate = document.querySelector(`[data-card-template]`);
const collectionContainer = document.querySelector(`.catalog-collection`);

let userCollection = [];
fetch(`${server.BACKEND_URL}/api/catalog/collection`, {
  credentials: "include",
})
  .then((res) => res.json())
  .then((data) => {
    // console.log(data.userCards[0]);
    userCollection = data.userCards.map((champ) => {
      const card = cardTemplate.content.cloneNode(true).children[0];
      const cardProduct = card.querySelector(`[data-card-product-box]`);
      const cardImgFront = card.querySelector(`[data-card-img-front]`);
      const cardImgBack = card.querySelector(`[data-card-img-back]`);
      const cardInfoLink = card.querySelector(`[data-card-champ-link]`);

      cardProduct.setAttribute("id", champ.card_id);
      cardProduct.setAttribute("data-card-rarity", champ.rarity);
      cardImgFront.src = champ.img_front;
      cardImgBack.src = champ.img_back;
      cardInfoLink.href = champ.info_link;
      collectionContainer.append(card);
    });
  });

const filterBtn = document.querySelector(`.filter-btn`);
const filterOptionsBox = document.querySelector(`.filOptions`);
const filterInnerSectionBox = document.querySelectorAll(
  ".filter-inner-section"
);
const filterArrowDown = document.querySelector(".filter-arrow-down");
const filterArrowUp = document.querySelector(".filter-arrow-up");

filterBtn.addEventListener("click", () => {
  if (filterOptionsBox.classList.contains("filter-options-hidden")) {
    filterOptionsBox.classList.remove("filter-options-hidden");
    filterArrowUp.style.opacity = "1";
    filterArrowDown.style.opacity = "0";
  } else {
    filterArrowUp.style.opacity = "0";
    filterArrowDown.style.opacity = "1";
    filterOptionsBox.style.animation = "filterReduce 0.6s ease-in";

    filterInnerSectionBox.forEach((innerBox) => {
      innerBox.style.animation = "filterInnerSectionOut 0.2s ease-in";
    });

    setTimeout(() => {
      filterOptionsBox.style.animation = "";
      filterInnerSectionBox.forEach((innerBox) => {
        innerBox.style.animation = "";
      });

      filterOptionsBox.classList.add("filter-options-hidden");
    }, 590);
  }
});

const searchInput = document.querySelector(`[data-search]`);
const searchIcon = document.querySelector(`.search-icon`);

//search bar function to filter cards
searchInput.addEventListener("input", (input) => {
  if (searchInput.value) {
    searchIcon.style.left = "calc(92% - 2.4rem)";
  } else {
    searchIcon.style.left = "";
  }
});
