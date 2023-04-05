//Get info modal

const infoGemsModal = document.querySelector('.gems-modal');
const infoGemsOverlay = document.querySelector('.gems-overlay');
const infoGemsCloseModalbtn = document.querySelector('.gems-info-close-modal');

//Get info open 
const infoGemsOpenModalbtn = document.querySelectorAll('.gems-show-modal');

console.log(infoGemsOpenModalbtn);

for (let i = 0; i < infoGemsOpenModalbtn.length; i++) {
  infoGemsOpenModalbtn[i].addEventListener('click', function () {
    console.log('clicked');
    infoGemsModal.classList.remove('gems-hidden'); // <-- fixed typo here
    infoGemsOverlay.classList.remove('gems-hidden');
  });
}

console.log(infoGemsCloseModalbtn);

// Add event listener to close modal button
infoGemsCloseModalbtn.addEventListener('click', () => {
  console.log('clicked close');
  infoGemsModal.classList.add('gems-hidden');
  infoGemsOverlay.classList.add('gems-hidden');
});
