"use strict";

import { requestOptions } from "./helper.js";
import server_back from "./auth.js";
const server = new server_back();

const menuBtn = document.querySelector(`.menu-icon`);
const menuPopup = document.querySelector(`.header__menu-popup`);
const menuItemBtns = document.querySelectorAll(`.header__menu--item`);

const accountIconButton = document.querySelector(`.account-icon`);
const accountMenuPopup = document.querySelector(`.account--menu-default`);
const accountMenuItems = document.querySelectorAll(`.account--menu-box`);

class Header {
  menuIconButton;
  menuPopupWindow;
  menuPageLinks;

  accountIconButton;
  accountMenuPopup;
  accountMenuItems;

  constructor(
    menuIconButton,
    menuPopupWindow,
    menuPageLinks,
    accountIconButton,
    accountMenuPopup,
    accountMenuItems
  ) {
    this.menuIconButton = menuIconButton;
    this.menuPopupWindow = menuPopupWindow;
    this.menuPageLinks = menuPageLinks;

    this.accountIconButton = accountIconButton;
    this.accountMenuPopup = accountMenuPopup;
    this.accountMenuItems = accountMenuItems;
  }

  openMenu() {
    this.menuPopupWindow.classList.remove(`no-display`);
    this.menuPopupWindow.classList.add(`menuExpand`);
    this.menuPageLinks.forEach((menuItem) => {
      menuItem.classList.add(`menuItemToRight`);
    });
  }

  hideMenu() {
    this.menuPopupWindow.style.animation = `menuReduce 0.6s ease-in`;
    this.menuPopupWindow.classList.remove(`menuExpand`);
    this.menuPageLinks.forEach((menuItem) => {
      menuItem.classList.remove(`menuItemToRight`);
    });
    this.menuPageLinks.forEach((menuItem) => {
      menuItem.style.animation = "menuItemToLeft 0.6s ease-in";
    });
    setTimeout(() => {
      this.menuPageLinks.forEach((menuItem) => {
        menuItem.style.animation = ``;
      });
      this.menuPopupWindow.style.animation = ``;
      this.menuPopupWindow.classList.add(`no-display`);
    }, 590);
  }

  openAccountMenu() {
    this.accountMenuPopup.classList.remove(`no-display`);
    this.accountMenuPopup.classList.add(`accMenuExpand`);
    this.accountMenuItems.forEach((accMenuItem) => {
      accMenuItem.classList.add(`accMenuItemToLeft`);
    });
  }

  hideAccountMenu() {
    this.accountMenuPopup.style.animation = `accMenuReduce 0.6s ease-in`;
    this.accountMenuPopup.classList.remove(`accMenuExpand`);

    this.accountMenuItems.forEach((accMenuItem) => {
      accMenuItem.classList.remove(`accMenuItemToLeft`);
    });
    this.accountMenuItems.forEach((accMenuItem) => {
      accMenuItem.style.animation = "accMenuItemToRight 0.6s ease-in";
    });

    setTimeout(() => {
      this.accountMenuItems.forEach((accMenuItem) => {
        accMenuItem.style.animation = "";
      });

      this.accountMenuPopup.style.animation = ``;
      this.accountMenuPopup.classList.add(`no-display`);
    }, 590);
  }
}

const header = new Header(
  menuBtn,
  menuPopup,
  menuItemBtns,
  accountIconButton,
  accountMenuPopup,
  accountMenuItems
);

let menuAnimOpenDone = false;
let accMenuOpenDone = false;
window.onclick = function (event) {
  if (event.target.matches(`.menu-icon`)) {
    if (
      header.menuPopupWindow.classList.contains(`no-display`) &&
      !menuAnimOpenDone
    ) {
      header.openMenu();
      setTimeout(() => {
        menuAnimOpenDone = true;
        accMenuOpenDone = false;
      }, 590);
    } else if (
      !header.menuPopupWindow.classList.contains(`no-display`) &&
      menuAnimOpenDone
    ) {
      header.hideMenu();
      setTimeout(() => {
        menuAnimOpenDone = false;
      }, 590);
    }
    header.hideAccountMenu();
    setTimeout(() => {
      accMenuOpenDone = false;
    }, 590);
  } else if (event.target.matches(`.account-icon`)) {
    if (
      header.accountMenuPopup.classList.contains(`no-display`) &&
      !accMenuOpenDone
    ) {
      header.openAccountMenu();
      setTimeout(() => {
        menuAnimOpenDone = false;
        accMenuOpenDone = true;
      }, 590);
    } else if (
      !header.accountMenuPopup.classList.contains(`no-display`) &&
      accMenuOpenDone
    ) {
      header.hideAccountMenu();
      setTimeout(() => {
        accMenuOpenDone = false;
      }, 590);
    }
    header.hideMenu();
    setTimeout(() => {
      menuAnimOpenDone = false;
    }, 590);
  } else if (menuAnimOpenDone || accMenuOpenDone) {
    if (!header.menuPopupWindow.classList.contains(`no-display`)) {
      header.hideMenu();
      setTimeout(() => {
        menuAnimOpenDone = false;
      }, 590);
    }
    if (!header.accountMenuPopup.classList.contains(`no-display`)) {
      header.hideAccountMenu();
      setTimeout(() => {
        accMenuOpenDone = false;
      }, 590);
    }
  }
};

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (
    prevScrollpos !== currentScrollPos &&
    !header.menuPopupWindow.classList.contains(`no-display`) &&
    menuAnimOpenDone
  ) {
    header.hideMenu();
    setTimeout(() => {
      menuAnimOpenDone = false;
    }, 590);
  } else if (
    prevScrollpos !== currentScrollPos &&
    !header.accountMenuPopup.classList.contains(`no-display`) &&
    accMenuOpenDone
  ) {
    header.hideAccountMenu();
    setTimeout(() => {
      accMenuOpenDone = false;
    }, 590);
  }
  prevScrollpos = currentScrollPos;
};

// Function to LOGOUT
const logoutBtn = document.querySelector(`#logout-btn`);
const logoutRoute = `${server.BACKEND_URL}/api/user/logout`;

logoutBtn.addEventListener(`click`, async () => {
  try {
    const response = await fetch(logoutRoute, requestOptions);
    if (response.ok) {
      // Logout was successful, do something here
      window.location.href = "../index.html"; // redirect to another page
    } else {
      // Handle the error response here
      alert(`Something went wrong`);
    }
  } catch (error) {
    console.error("Error:", error);
  }
});
