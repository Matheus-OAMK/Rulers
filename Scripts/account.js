// Get all .inputBox
const inputBoxes = document.querySelectorAll('.form-input-box');

// For each box
inputBoxes.forEach(box => {
  // Get input as first child element
  const input = box.firstElementChild;

  // add event listener for any change on the input
  input.addEventListener('input', () => {
    console.log(input.value);

    // if input is not empty add class filled
    // else remove class filled if is empty
    input.value
      ? input.classList.add('filled')
      : input.classList.remove('filled');
  });
});

const settingsOverlay = document.querySelector(`.settings-overlay`);
const settingsModalCloseBtn = document.querySelector(
  `.settings-info-close-modal`
);
const settingsModal = document.querySelector(`.settings-info`);
const settingsModalOpenBtn = document.querySelector(`.settings-info-icon`);

const closeInfoModal = () => {
  settingsOverlay.classList.add('settings-hidden');
  settingsModal.classList.add('settings-hidden');
};

settingsModalOpenBtn.addEventListener('click', () => {
  settingsOverlay.classList.remove('settings-hidden');
  settingsModal.classList.remove('settings-hidden');
});

settingsModalCloseBtn.addEventListener('click', () => {
  closeInfoModal();
});

settingsOverlay.addEventListener('click', () => {
  closeInfoModal();
});
