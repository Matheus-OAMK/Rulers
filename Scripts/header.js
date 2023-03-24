'use strict';

const signUpBtn = document.querySelector(`.signup`);
const logInBtn = document.querySelector(`.login`);
const accountBtn = document.querySelector(`.account`);

const menuBtn = document.querySelector(`.menu-icon`);
const menuPopup = document.querySelector(`.header__menu-popup`);
const menuItemBtns = document.querySelectorAll(`.header__menu--item`);

//Function on account button click
const accClick = () => {
  accountBtn.addEventListener('click', () => {
    // if signup and login contain hidden class > remove it and start animation to left
    if (
      logInBtn.classList.contains(`header-btn-hidden`) &&
      signUpBtn.classList.contains(`header-btn-hidden`)
    ) {
      logInBtn.classList.remove(`header-btn-hidden`);
      signUpBtn.classList.remove(`header-btn-hidden`);
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
        logInBtn.classList.add(`header-btn-hidden`);
        signUpBtn.classList.add(`header-btn-hidden`);
      }, 790);
    }
  });
};
accClick(); //Call this function if user is NOT logged in

menuBtn.addEventListener('click', () => {
  if (menuPopup.classList.contains(`no-display`)) {
    menuPopup.classList.remove(`no-display`);
    // menuPopup.classList.add(`menu-open`);

    // menuItemBtns.classList.add(`menuItemToRight`);
    menuItemBtns.forEach(menuItem => {
      menuItem.classList.add(`menuItemToRight`);
    });
  } else {
    // menuItemBtns.style.animation = 'menuItemToLeft 0.8s ease-in';
    menuItemBtns.forEach(menuItem => {
      menuItem.classList.remove(`menuItemToRight`);
    });
    // for (let i = 0; i < menuItemBtns.length; i++) {
    //   menuItemBtns[i].style.animationDelay = `0.${i}s`;
    //   // console.log(menuItemBtns[i]);
    // }

    menuItemBtns.forEach(menuItem => {
      menuItem.style.animation = 'menuItemToLeft 0.8s ease-in';
    });

    setTimeout(() => {
      // menuItemBtns.style.animation = ``;
      menuItemBtns.forEach(menuItem => {
        menuItem.style.animation = ``;
      });
      menuPopup.classList.add(`no-display`);
      // menuPopup.classList.remove(`menu-open`);
    }, 790);
  }
});
