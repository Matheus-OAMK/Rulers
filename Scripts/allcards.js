'use strict';

// const new1 = document.querySelectorAll(`.filtering-option--input`);

// new1.forEach(element => {
//   element.addEventListener('input', () => {
//     console.log(element.name);
//   });
// });

const slider = document.querySelector(`.filter-slider`);
const sytleTag = document.querySelector(`.style-for-slider`);
const filterBtn = document.querySelector(`.filter-btn`);
const filterOptionsBox = document.querySelector(`.filOptions`);
const filterInnerSectionBox = document.querySelectorAll(
  '.filter-inner-section'
);
const filterArrowDown = document.querySelector('.filter-arrow-down');
const filterArrowUp = document.querySelector('.filter-arrow-up');

filterBtn.addEventListener('click', () => {
  if (filterOptionsBox.classList.contains('filter-options-hidden')) {
    filterOptionsBox.classList.remove('filter-options-hidden');
    filterArrowUp.style.opacity = '1';
    filterArrowDown.style.opacity = '0';
  } else {
    filterArrowUp.style.opacity = '0';
    filterArrowDown.style.opacity = '1';
    filterOptionsBox.style.animation = 'filterReduce 0.6s ease-in';

    filterInnerSectionBox.forEach(innerBox => {
      innerBox.style.animation = 'filterInnerSectionOut 0.2s ease-in';
    });

    setTimeout(() => {
      filterOptionsBox.style.animation = '';
      filterInnerSectionBox.forEach(innerBox => {
        innerBox.style.animation = '';
      });

      filterOptionsBox.classList.add('filter-options-hidden');
    }, 590);
  }
});

//GET SLIDER INPUT DATA
slider.addEventListener('input', () => {
  // console.log(slider.value);
  sytleTag.innerHTML = `.filter-slider::after {content: '${slider.value}';z-index: 3;height: 6px;}`;
});

// FUNCTION TO ROTATE CARDS
function cardRotate(el) {
  el.classList.toggle(`rotated`);
}

// const cardProductBox = document.querySelector('[data-card-product-box]');
// cardProductBox.setAttribute('rarity', 'legendary');
