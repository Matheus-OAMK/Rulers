'use strict';

const signUpBtn = document.querySelector(`.signup`);
const logInBtn = document.querySelector(`.login`);
const accountBtn = document.querySelector(`.account`);

//Function on account button click
const accClick = () => {
  accountBtn.addEventListener('click', () => {
    // if signup and login contain hidden class > remove it and start animation to left
    if (
      logInBtn.classList.contains(`hidden`) &&
      signUpBtn.classList.contains(`hidden`)
    ) {
      logInBtn.classList.remove(`hidden`);
      signUpBtn.classList.remove(`hidden`);
      signUpBtn.classList.add(`toLeftL`);
      logInBtn.classList.add(`toLeftS`);
    } else {
      // if signup and login do not contain hidden class > add it, remove left animation class and
      // start animation to right
      signUpBtn.classList.remove(`toLeftL`);
      logInBtn.classList.remove(`toLeftS`);
      logInBtn.style.animation = `toRightS 0.8s ease-out`;
      signUpBtn.style.animation = `toRightL 0.8s ease-out`;
      // After animation run (a little bit earlier), remove any animation style and add hidden class
      setTimeout(() => {
        logInBtn.style.animation = ``;
        signUpBtn.style.animation = ``;
        logInBtn.classList.add(`hidden`);
        signUpBtn.classList.add(`hidden`);
      }, 790);
    }
  });
};
accClick(); //Call this function if user is NOT logged in
