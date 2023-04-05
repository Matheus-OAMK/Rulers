"use strict";
const cards = document.querySelectorAll(".game--card");
const playBtn = document.querySelector(".game--btn");
const card1Img = document.querySelector("#game--card-img-1");
const card2Img = document.querySelector("#game--card-img-2");
const card3Img = document.querySelector("#game--card-img-3");
const card4Img = document.querySelector("#game--card-img-4");


playBtn.addEventListener("click", () => {
  playBtn.disabled = true;	
  cards.forEach(card => {
    card.style.left = '50%';
    card.style.transform = 'translateX(-25%)'
  }); 


  //return cards to position  
  setTimeout(() => {
    cards.forEach(card => {
      card.style.left = '';
      card.style.transform = ''
    });
    //change card images
    card1Img.src = '/Images/Epic cards/FRONT/AHRI.png';
    card2Img.src = '/Images/Epic cards/FRONT/AHRI.png';
    card3Img.src = '/Images/Epic cards/FRONT/AHRI.png';
    card4Img.src = '/Images/Epic cards/FRONT/AHRI.png';
    
  }, 1500);

  //reset the cards to question mark
  setTimeout(() => {
    const cardsImg = document.querySelectorAll('[id^="game--card"]');
    cardsImg.forEach(card => {
      card.src = '/Images/Game/RANDOM EPIC.png';});
      playBtn.disabled = false;	
  }, 6000);
 });



