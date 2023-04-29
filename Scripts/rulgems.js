'use strict';

import { requestOptions } from './helper.js';
import server_back from './auth.js';
import { redAlert } from './alert.js';

const server = new server_back();

//Get info modal
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

//Get free info modal

const infoFreeGemsModal = document.querySelector('.gems-free-modal');
const infoFreeGemsOverlay = document.querySelector('.gems-free-overlay');
const infoFreeGemsCloseModalbtn = document.querySelector(
  '.gems-free-info-close-modal'
);
//Get info open
const infoFreeGemsOpenModalbtn = document.querySelector(
  '.gems-free-show-modal'
);

const freeGemsRoute = `${server.BACKEND_URL}/api/user/freegems`;

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
infoFreeGemsOpenModalbtn.addEventListener('click', async () => {
  server.checkAuth().then(async res => {
    if (!res.isLoggedIn) {
      return redAlert('Log in to claim free gems!');
    } else if (res.userData.gems > 31767) {
      return redAlert("Sorry but you can't have more gems than 32767");
    }

    const response = await fetch(freeGemsRoute, requestOptions);
    const data = await response.json();
    if (data.error) {
      return alert('Something went wrong!');
    }
    server.renderUserGems(userGems);

    infoFreeGemsModal.classList.remove('gems-free-hidden'); // <-- fixed typo here
    infoFreeGemsOverlay.classList.remove('gems-free-hidden');
  });
});
