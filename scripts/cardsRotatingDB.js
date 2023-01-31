const userCardTemplate = document.querySelector(`[data-card-template]`);
const cardsContainer = document.querySelector(`[cards-container]`);

fetch("../cards-data-TEST.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((card) => {
      const cardContent = userCardTemplate.content.cloneNode(true).children[0];
      const heroCardSides = [
        cardContent.querySelector(`.hero-card-img-front`),
        cardContent.querySelector(`.hero-card-img-back`),
      ];
      const [frontImage, backImage] = heroCardSides;

      frontImage.src = card.cardFront;
      backImage.src = card.cardBack;
      cardsContainer.append(cardContent);
    });
  });

// Function to rotate the card element
function cardRotate(el) {
  el.classList.toggle(`rotated`);
}
