'use strict';

import { API_URL, requestOptions } from './helper.js';

//Get info modal
const freeGemsBtn = document.querySelector('#free-gems');
const infoGemsModal = document.querySelector('.gems-modal');
const infoGemsOverlay = document.querySelector('.gems-overlay');
const infoGemsCloseModalbtn = document.querySelector('.gems-info-close-modal');
//Get info open
const infoGemsOpenModalbtn = document.querySelectorAll('.gems-show-modal');

for (let i = 0; i < infoGemsOpenModalbtn.length; i++) {
  infoGemsOpenModalbtn[i].addEventListener('click', function () {
    infoGemsModal.classList.remove('gems-hidden'); // <-- fixed typo here
    infoGemsOverlay.classList.remove('gems-hidden');
  });
}

// Add event listener to close modal button
infoGemsCloseModalbtn.addEventListener('click', () => {
  infoGemsModal.classList.add('gems-hidden');
  infoGemsOverlay.classList.add('gems-hidden');
});
infoGemsOverlay.addEventListener('click', () => {
  infoGemsModal.classList.add('gems-hidden');
  infoGemsOverlay.classList.add('gems-hidden');
});

//Get free info modal

const infoFreeGemsModal = document.querySelector('.gems-free-modal');
const infoFreeGemsOverlay = document.querySelector('.gems-free-overlay');
const infoFreeGemsCloseModalbtn = document.querySelector(
  '.gems-free-info-close-modal'
);
//Get info open
const infoFreeGemsOpenModalbtn = document.querySelectorAll(
  '.gems-free-show-modal'
);

for (let i = 0; i < infoFreeGemsOpenModalbtn.length; i++) {
  infoFreeGemsOpenModalbtn[i].addEventListener('click', function () {
    infoFreeGemsModal.classList.remove('gems-free-hidden'); // <-- fixed typo here
    infoFreeGemsOverlay.classList.remove('gems-free-hidden');
  });
}

// Add event listener to close modal button
infoFreeGemsCloseModalbtn.addEventListener('click', () => {
  infoFreeGemsModal.classList.add('gems-free-hidden');
  infoFreeGemsOverlay.classList.add('gems-free-hidden');
});
infoFreeGemsOverlay.addEventListener('click', () => {
  infoFreeGemsModal.classList.add('gems-free-hidden');
  infoFreeGemsOverlay.classList.add('gems-free-hidden');
});

// Add event listener to free gem

const freeGemsRoute = `${API_URL}/api/user/freegems`;

freeGemsBtn.addEventListener('click', async () => {
  try {
    const response = await fetch(freeGemsRoute, requestOptions);
    const data = await response.json();
    console.log(data);
    alert(data.message);
  } catch (error) {
    alert('An error occurred: ' + error.message);
  }
});
