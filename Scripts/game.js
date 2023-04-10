'use strict';
const cards = document.querySelectorAll('.game--card');
const playBtn = document.querySelector('.game--btn');
const card1Img = document.querySelector('#game--card-img-1');
const card2Img = document.querySelector('#game--card-img-2');
const card3Img = document.querySelector('#game--card-img-3');

const cardsImg = document.querySelectorAll('.game--card-inner');

playBtn.addEventListener('click', () => {
  //disable button so they cant click it again until game is over
  playBtn.disabled = true;

  //change card images that the users will win
  card1Img.src = '/Images/Epic cards/FRONT/AHRI.png';
  card2Img.src = '/Images/Rare cards/FRONT/GAREN.png';
  card3Img.src = '/Images/Legendary cards/FRONT/AZIR.png';


  setTimeout(() => {
    cards[2].style.transform = `translate(8rem,-15vh) rotate(0deg)`;
  }, 0);

  setTimeout(() => {
    cards[1].style.transform = `translate(0rem,-15vh) rotate(0deg)`;
  }, 700);


  setTimeout(() => {
    cards[0].style.transform = `translate(-8rem,-15vh) rotate(0deg)`;
  }, 1400);


  // //move cards above
  // cards[0].style.transform = `translate(-8rem,-35rem) rotate(0deg)`;
  // cards[1].style.transform = `translate(0rem,-35rem) rotate(0deg)`;
  // cards[2].style.transform = `translate(8rem,-35rem) rotate(0deg)`;

//flip cards to reveal the images
  setTimeout(() => {
    cardsImg.forEach(card => {
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
    cardsImg.forEach(card => {
      card.style.transform = '';
      card.classList.remove('flipped');
    });
  }, 6000);

//re enable button
  setTimeout(() => {
    playBtn.disabled = false;
  }, 7500);

});
