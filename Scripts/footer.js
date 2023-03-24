'use strict';

// ********** MODALS ********** //
const link = document.querySelector('[data-modal-target]');
const overlay = document.querySelector('#overlay');

//function to close modal
const closeModal = modal => {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
};

//function to open modal
const openModal = modal => {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
};

//open modal when clicking on link
link.addEventListener('click', link => {
  link.preventDefault();
  const target = document.querySelector(link.target.dataset.modalTarget);
  openModal(target);
});

//close modal when clicking outside of modal (in overlay)
overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach(modal => {
    closeModal(modal);
  });
});

// ********** COPY EMAIL TO CLIPBOARD ********** //

//select the icons
const copyIcons = document.querySelectorAll('.main--copy-icon');

//loop through them and add event listener to copy email to clipboard
copyIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    const copyContent = icon.closest('.main--email').textContent;

    navigator.clipboard.writeText(copyContent);
  });
});
//function to copy email to clipboard

//add function to copy on click

// ********** FILL ICON ON HOVER ********** //

copyIcons.forEach(icon => {
  //add event listener to change icon on to filled on hover
  icon.addEventListener('mouseover', () => {
    icon.setAttribute('name', 'clipboard');
  });

  //add event listener to change icon back to outline on mouseout
  icon.addEventListener('mouseout', () => {
    icon.setAttribute('name', 'clipboard-outline');
  });
});
