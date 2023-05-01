'use strict';

import { requestOptions } from './helper.js';
import { blueAlert, redAlert } from './alert.js';
import server_back from './auth.js';

const server = new server_back();

const cards = document.querySelectorAll('.game--card');
const playBtn = document.querySelector('.game--btn');
const card1Img = document.querySelector('#game--card-img-1');
const card2Img = document.querySelector('#game--card-img-2');
const card3Img = document.querySelector('#game--card-img-3');
const cardsInner = document.querySelectorAll('.game--card-inner');
const gameTitle = document.querySelector('.game--title');
const userGems = document.querySelector(`.user-gems-amount`);
const playBtnText = document.querySelector('.play-price');
const redGemIcon = document.querySelector('.game--gems');
const gameText = document.querySelector('.game--text');

const gameCardsRoute = `${server.BACKEND_URL}/api/catalog/game`;
let randomCards = [];
let clickCount = 0;

//function to set images on the cards from the array of cards users will win
function setCardImages() {
  //change card images that the users will win
  card1Img.src = randomCards[0].img_front;
  card2Img.src = randomCards[1].img_front;
  card3Img.src = randomCards[2].img_front;
}

function sendCardsToDatabase(card) {
  fetch(gameCardsRoute, {
    ...requestOptions,
    body: JSON.stringify(card),
  })
    .then(response => response.json())
    .catch(error => console.error(error));
}

playBtn.addEventListener('click', async () => {
  //increment click count
  clickCount++;
  //disable button so they cant click it again until game is over
  playBtn.disabled = true;

  if (clickCount === 1) {
    const enoughGems = await server.checkIfEnoughGems(200);
    const res = await server.checkAuth();

    if (res.isLoggedIn === false) {
      redAlert('Please log in to play the game!');
      playBtn.disabled = false;
      return;
    } else if (!enoughGems) {
      redAlert('Please purchase more gems to play the game!');
      playBtn.disabled = false;
      return;
    } else {
      //reset the array on every click
      randomCards = [];

      //fetch the route to 3 random cards and push them into the array
      fetch(gameCardsRoute, { credentials: 'include' })
        .then(res => res.json())
        .then(data => {
          data.forEach(card => {
            randomCards.push(card);
          });
          //call the function to set the images
          setCardImages();
          randomCards.forEach(card => {
            sendCardsToDatabase(card);
          });
          server.renderUserGems(userGems);
        });

      //Hide the title
      gameTitle.style.opacity = '0';

      //Move cards above and to the side at different times
      setTimeout(() => {
        cards[2].classList.add('card-3-move');
      }, 0);

      setTimeout(() => {
        cards[1].classList.add('card-2-move');
      }, 700);

      setTimeout(() => {
        cards[0].classList.add('card-1-move');
      }, 1400);

      //flip cards to reveal the images
      setTimeout(() => {
        cardsInner.forEach(card => {
          card.classList.add('flipped');
          playBtn.classList.toggle('claimed');
          gameText.textContent = 'You won the following cards!';
          redGemIcon.style.display = 'none';
          playBtnText.textContent = 'Claim cards';
          playBtn.disabled = false;
        });
      }, 3000);
    }
  } else if (clickCount === 2) {
    //disable button so they cant click it again until game is over
    playBtn.disabled = true;
    //return cards back to start position
    setTimeout(() => {
      cards[2].classList.remove('card-3-move');
      cards[1].classList.remove('card-2-move');
      cards[0].classList.remove('card-1-move');
    }, 1000);

    //reset the cards to question mark
    setTimeout(() => {
      cardsInner.forEach(card => {
        card.style.transform = '';
        card.classList.remove('flipped');
      });
    }, 500);

    setTimeout(() => {
      gameTitle.style.opacity = '';
    }, 1500);

    //re enable button
    setTimeout(() => {
      gameTitle.style.opacity = '';
      playBtnText.textContent = 'Play 200';
      redGemIcon.style.display = 'block';
      playBtn.classList.toggle('claimed');
      gameText.textContent =
        'Try your luck for a chance to obtain the rarest of cards';
      playBtn.disabled = false;
      clickCount = 0;
    }, 2000);
  }
});
