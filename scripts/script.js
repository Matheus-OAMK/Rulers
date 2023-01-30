const userCardTemplate = document.querySelector(`[data-user-template]`);
const cardsContainer = document.querySelector(`[cards-container]`);

fetch("cards.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((card) => {
      const cardContent = userCardTemplate.content.cloneNode(true).children[0];
      const image = cardContent.querySelector(`[data-image]`);
      const name = cardContent.querySelector(`[data-name]`);
      image.src = card.image;
      name.textContent = card.name;
      cardsContainer.append(cardContent);
    });
  });

console.log(visualViewport.height);
