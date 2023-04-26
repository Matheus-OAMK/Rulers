'use strict';

import { requestOptions } from './helper.js';
import server_back from './auth.js';

const server = new server_back();

//Get info modal
const freeGemsBtn = document.querySelector('#free-gems');
const infoGemsModal = document.querySelector('.gems-modal');
const infoGemsOverlay = document.querySelector('.gems-overlay');
const infoGemsCloseModalbtn = document.querySelector('.gems-info-close-modal');
const userGems = document.querySelector(`.user-gems-amount`);
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

// Add event listener to free gem

const freeGemsRoute = `${server.BACKEND_URL}/api/user/freegems`;

freeGemsBtn.addEventListener('click', async () => {
  try {
    const response = await fetch(freeGemsRoute, requestOptions);
    const data = await response.json();
    console.log(data);
    alert(data.message);

    server.renderUserGems(userGems);
  } catch (error) {
    alert('An error occurred: ' + error.message);
  }
});
