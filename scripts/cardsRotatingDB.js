const userCardTemplate = document.querySelector(`[data-card-template]`);
const cardsContainer = document.querySelector(`[cards-container]`);

fetch("../cards-data-TEST.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((card) => {
      const cardContent = userCardTemplate.content.cloneNode(true).children[0];
      const frontImage = cardContent.querySelector(`.hero-card-img-front`);
      const backImage = cardContent.querySelector(`.hero-card-img-back`);
      frontImage.src = card.cardFront;
      backImage.src = card.cardBack;
      cardsContainer.append(cardContent);
    });
  });

function cardRotate(el) {
  el.classList.toggle(`rotated`);
}
