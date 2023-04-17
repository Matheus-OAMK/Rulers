const openSignupModalButtons = document.querySelectorAll('[data-modal-target]');
const closeSignupModalButtons = document.querySelectorAll(
  '[data-signup-close-button]'
);
// const closeSignupModalButtons = document.getElementById('signup-modal-close')
const openLoginModalButtons = document.querySelectorAll('[data-modal-target]');
const closeLoginModalButtons = document.querySelectorAll(
  '[data-login-close-button]'
);

const overlayLogSignModal = document.getElementById('signup-modal-overlay');

// Functions to open the signup/login modals
openSignupModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModalLogSign(modal);
  });
});

openLoginModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    // console.log(modal);
    openModalLogSign(modal);
  });
});

// Functions to close signup/login modals from button ands overlay

closeSignupModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.signup-modal-content');
    closeModalLogSign(modal);
    clearSignUp();
  });
});

closeLoginModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.login-modal-content');
    closeModalLogSign(modal);
    clearLogin();
  });
});

overlayLogSignModal.addEventListener('click', () => {
  const modals = document.querySelectorAll('.signup-modal-content.active');
  modals.forEach(modal => {
    closeModalLogSign(modal);
    clearSignUp();
  });
});

overlayLogSignModal.addEventListener('click', () => {
  const modals = document.querySelectorAll('.login-modal-content.active');
  modals.forEach(modal => {
    closeModalLogSign(modal);
    clearLogin();
  });
});

function openModalLogSign(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlayLogSignModal.classList.add('active');
}

function closeModalLogSign(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlayLogSignModal.classList.remove('active');
}

function clearSignUp() {
  const usernameInput = document.getElementById('signup-modal-username');
  usernameInput.value = '';
  // const emailInput = document.getElementById('signup-modal-email');
  // emailInput.value = '';
  const passInput = document.getElementById('signup-modal-password');
  passInput.value = '';
}

function clearLogin() {
  const usernameInput = document.getElementById('login-modal-username');
  usernameInput.value = '';
  const passInput = document.getElementById('login-modal-password');
  passInput.value = '';
}

// Showpassword global function
function showPassword(password) {
  if (password.type === 'password') {
    password.type = 'text';
  } else {
    password.type = 'password';
  }
}

// SIGNUP SHOW PASSWORD
const showPasswordSignup = document.getElementById('signup-modal-showPassword');

showPasswordSignup.addEventListener('click', () => {
  const passStatus = document.getElementById('signup-modal-password');
  showPassword(passStatus);
});

// LOGIN SHOW PASSWORD

const showPasswordLogin = document.getElementById('login-modal-showPassword');

showPasswordLogin.addEventListener('click', () => {
  const passStatus = document.getElementById('login-modal-password');
  showPassword(passStatus);
});

//Open login from the signup modal
function closeModalLink(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
}

function openModalLink(modal) {
  if (modal == null) return;
  modal.classList.add('active');
}

const alreadyAcc = document.getElementById('modal-login-link');

alreadyAcc.addEventListener('click', () => {
  const openLogin = document.querySelector(alreadyAcc.dataset.modalTarget);
  const closeSignup = document.querySelector('.signup-modal-content');
  closeModalLink(closeSignup);
  openModalLink(openLogin);
});

// Open Signup from Login
const registerHere = document.getElementById('modal-register-link');

registerHere.addEventListener('click', () => {
  const openRegister = document.querySelector(registerHere.dataset.modalTarget);
  const closeLogin = document.querySelector('.login-modal-content');
  closeModalLink(closeLogin);
  openModalLink(openRegister);
});
