const alertOverlay = document.querySelector(`.alert-overlay`);
const alertModalCloseBtn = document.querySelector(`.alert-modal-close-btn`);
const alertModal = document.querySelector(`.alert-modal`);
const alertText = alertModal.querySelector('p');

//function to change text in info modal
export const blueAlert = text => {
  alertText.textContent = text;
  alertModal.style.color = '#66FCF1';
  alertModal.style.boxShadow = '0 0 1rem #66FCF1';
  alertModalCloseBtn.style.color = '#66FCF1';
};

export const redAlert = text => {
  alertText.textContent = text;
  alertModal.style.color = 'red';
  alertModal.style.boxShadow = '0 0 1rem red';
  alertModalCloseBtn.style.color = 'red';
};

//function to close info modal
const closeInfoModal = () => {
  alertOverlay.classList.add('alert-hidden');
  alertModal.classList.add('alert-hidden');
};

//function to open info modal
export const openInfoModal = () => {
  alertOverlay.classList.remove('alert-hidden');
  alertModal.classList.remove('alert-hidden');
};

//close info modal when clicking on close button or overlay
alertModalCloseBtn.addEventListener('click', () => {
  closeInfoModal();
});
alertOverlay.addEventListener('click', () => {
  closeInfoModal();
});
