"use strict";

const filterBtn = document.querySelector(`.filter-btn`);
const filterModal = document.querySelector(`.navigation`);

filterBtn.addEventListener(`click`, () => {
  filterModal.classList.toggle(`filter-modal`);
});
