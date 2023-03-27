// Get all .inputBox
const inputBoxes = document.querySelectorAll('.form-input-box');

// For each box
inputBoxes.forEach( box => {
  // Get input as first child element
  const input = box.firstElementChild;

  // add event listener for any change on the input
  input.addEventListener('input', () => {
    console.log(input.value)

    // if input is not empty add class filled
    // else remove class filled if is empty
    input.value ? input.classList.add('filled') : input.classList.remove('filled')
  })
});


//Get info modal

const infoModal = document.querySelector('.modal');
const infoOverlay = document.querySelector('.settings-overlay');
const infoCloseModalbtn = document.querySelector('.settings-info-close-modal');

//Get info open btn
const infoOpenModalbtn = document.querySelectorAll('.settings-info-icon');

console.log(infoOpenModalbtn);

for (let i = 0; i < infoOpenModalbtn.length; i++) {
  infoOpenModalbtn[i].addEventListener('click', function () {
    console.log('clicked');
    infoModal.classList.remove('hidden'); // <-- fixed typo here
    infoOverlay.classList.remove('hidden');
  });
}

// Add event listener to close modal button
infoCloseModalbtn.addEventListener('click', () => {
  console.log('clicked close');
  infoModal.classList.add('hidden');
  infoOverlay.classList.add('hidden');
});