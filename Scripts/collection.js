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
      return {
        name: champ.name,
        rarity: champ.rarity,
        role: champ.role,
        price: champ.price,
        element: card,
      };
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

// ************************************* FILTER FUNCTIONS *************************************
const searchInput = document.querySelector(`[data-search]`);
const searchIcon = document.querySelector(`.search-icon`);

function hideFilterCards(card) {
  const matchesRarity =
    filters.rarity.length === 0 ||
    filters.rarity.includes(card.rarity.toLowerCase());
  const matchesRole =
    filters.role.length === 0 || filters.role.includes(card.role.toLowerCase());
  const matchesSearch = card.name
    .toLowerCase()
    .includes(searchInput.value.toLowerCase());
  //Hide cards that do not match the filters
  card.element.classList.toggle(
    "filter-options-hidden",
    !matchesRarity || !matchesRole || !matchesSearch
  );
}

//search bar function to filter cards
searchInput.addEventListener("input", (input) => {
  if (searchInput.value) {
    searchIcon.style.left = "calc(92% - 2.4rem)";
  } else {
    searchIcon.style.left = "";
  }

  const value = input.target.value.toLowerCase();
  userCollection.forEach((card) => {
    hideFilterCards(card);
  });
});

// /selecting all filter boxes
const filterBoxes = document.querySelectorAll(".filtering-option--input");
//creating an object to store the filters
const filters = {
  rarity: [],
  role: [],
};

filterBoxes.forEach((filterBox) => {
  filterBox.addEventListener("click", () => {
    //get the rarity or role value
    const value = filterBox.name.toLowerCase();
    //get the type of filter by looking at the title of the filter box
    const type = filterBox.parentNode.parentNode
      .querySelector(".filter-title")
      .textContent.toLowerCase();
    //check if the filter box is checked or not
    if (filterBox.checked) {
      //if it is checked, add the value to the filters object
      filters[type].push(value);
    } else {
      //if it is not checked, remove the value from the filters object
      const index = filters[type].indexOf(value);
      if (index >= 0) {
        filters[type].splice(index, 1);
      }
    }
    //loop through the cards and check if they match the filters
    userCollection.forEach((card) => {
      //check if the card matches the rarity and role filters ( or if there are no filters selected )
      hideFilterCards(card);
    });
  });
});

// ************************************* SORT FUNCTIONS *************************************
//sort cards
// giving a numeric order to the rarity
const rarityOrder = { rare: 1, epic: 2, legendary: 3 };

//Low to High  rarity sorting
function sortByRarityLtH() {
  userCollection.sort((card1, card2) => {
    const rarityA = rarityOrder[card1.rarity];
    const rarityB = rarityOrder[card2.rarity];
    if (rarityA < rarityB) {
      return -1;
    } else if (rarityA > rarityB) {
      return 1;
    } else {
      return 0;
    }
  });
}

//high to low  rarity sorting
function sortByRarityHtL() {
  userCollection.sort((card1, card2) => {
    const rarityA = rarityOrder[card1.rarity];
    const rarityB = rarityOrder[card2.rarity];
    if (rarityA < rarityB) {
      return 1;
    } else if (rarityA > rarityB) {
      return -1;
    } else {
      return 0;
    }
  });
}

//selecting the sort by box
const sortBySelect = document.querySelector(".sort-by");

//adding event listen for each option
sortBySelect.addEventListener("change", () => {
  const selectedOption = sortBySelect.value;
  if (selectedOption === "rarity-high-to-low") {
    // sort by rarity high to low
    sortByRarityHtL();
    userCollection.forEach((card) => {
      collectionContainer.append(card.element);
    });
  } else if (selectedOption === "rarity-low-to-high") {
    // sort by rarity low to high
    sortByRarityLtH();
    userCollection.forEach((card) => {
      collectionContainer.append(card.element);
    });
  }
});
