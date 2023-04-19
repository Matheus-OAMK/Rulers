'use strict';

const cards = document.querySelectorAll('.game--card');
const playBtn = document.querySelector('.game--btn');
const card1Img = document.querySelector('#game--card-img-1');
const card2Img = document.querySelector('#game--card-img-2');
const card3Img = document.querySelector('#game--card-img-3');
const cardsInner = document.querySelectorAll('.game--card-inner');
const gameTitle = document.querySelector('.game--title');
const gameCardsRoute = 'http://localhost:3001/api/catalog/game';
let randomCards = [];

//function to set images on the cards from the array of cards users will win
function setCardImages() {
  //change card images that the users will win
  card1Img.src = randomCards[0].img_front;
  card2Img.src = randomCards[1].img_front;
  card3Img.src = randomCards[2].img_front;
}

playBtn.addEventListener('click', () => {
  //disable button so they cant click it again until game is over
  playBtn.disabled = true;
  //reset the array on every click
  randomCards = [];

  //fetch the route to 3 random cards and push them into the array
  fetch(gameCardsRoute)
  .then(res => res.json())
  .then(data => {
    data.forEach(card => randomCards.push(card));
    //call the function to set the images
    setCardImages();
  })
  
  //change card images that the users will win
  // card1Img.src = '/Images/Epic-cards/FRONT/DIANA.webp';
  // card2Img.src = '/Images/Rare-cards/FRONT/GAREN.webp';
  // card3Img.src = '/Images/Legendary-cards/FRONT/AZIR.webp';

  //Hide the title
  gameTitle.style.opacity = '0';

  //Move cards above and to the side at different times
  setTimeout(() => {
    cards[2].style.transform = `translate(8rem,-15vh) rotate(0deg)`;
  }, 0);

  setTimeout(() => {
    cards[1].style.transform = `translate(0rem,-15vh) rotate(0deg)`;
  }, 700);

  setTimeout(() => {
    cards[0].style.transform = `translate(-8rem,-15vh) rotate(0deg)`;
  }, 1400);

  //flip cards to reveal the images
  setTimeout(() => {
    cardsInner.forEach(card => {
      card.classList.add('flipped');
    });
  }, 3000);

  //return cards back to start position
  setTimeout(() => {
    cards.forEach(card => {
      card.style.transform = '';
    });
  }, 6500);

  //reset the cards to question mark
  setTimeout(() => {
    cardsInner.forEach(card => {
      card.style.transform = '';
      card.classList.remove('flipped');
    });
  }, 6000);

  setTimeout(() => {
    gameTitle.style.opacity = '';
  }, 7000);

  //re enable button
  setTimeout(() => {
    gameTitle.style.opacity = '';
    playBtn.disabled = false;
  }, 7500);
});
