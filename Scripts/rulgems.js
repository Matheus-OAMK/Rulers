//Get info modal

const infoGemsModal = document.querySelector('.gems-modal');
const infoGemsOverlay = document.querySelector('.gems-overlay');
const infoGemsCloseModalbtn = document.querySelector('.gems-info-close-modal');
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
