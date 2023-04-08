// 'use strict';
// const menuBtn = document.querySelector(`.menu-icon`);
// const menuPopup = document.querySelector(`.header__menu-popup`);
// const menuItemBtns = document.querySelectorAll(`.header__menu--item`);

// const accountIconButton = document.querySelector(`.account-icon`);
// const accountMenuPopup = document.querySelector(`.account--menu-default`);
// const accountMenuItems = document.querySelectorAll(`.account--menu-box`);

// class Header {
//   menuIconButton;
//   menuPopupWindow;
//   menuPageLinks;

//   accountIconButton;
//   accountMenuPopup;
//   accountMenuItems;

//   constructor(
//     menuIconButton,
//     menuPopupWindow,
//     menuPageLinks,
//     accountIconButton,
//     accountMenuPopup,
//     accountMenuItems
//   ) {
//     this.menuIconButton = menuIconButton;
//     this.menuPopupWindow = menuPopupWindow;
//     this.menuPageLinks = menuPageLinks;

//     this.accountIconButton = accountIconButton;
//     this.accountMenuPopup = accountMenuPopup;
//     this.accountMenuItems = accountMenuItems;
//   }

//   openMenu() {
//     this.menuPopupWindow.classList.remove(`no-display`);
//     this.menuPopupWindow.classList.add(`menuExpand`);
//     this.menuPageLinks.forEach(menuItem => {
//       menuItem.classList.add(`menuItemToRight`);
//     });
//   }

//   hideMenu() {
//     this.menuPopupWindow.style.animation = `menuReduce 0.6s ease-in`;
//     this.menuPopupWindow.classList.remove(`menuExpand`);
//     this.menuPageLinks.forEach(menuItem => {
//       menuItem.classList.remove(`menuItemToRight`);
//     });
//     this.menuPageLinks.forEach(menuItem => {
//       menuItem.style.animation = 'menuItemToLeft 0.6s ease-in';
//     });
//     setTimeout(() => {
//       this.menuPageLinks.forEach(menuItem => {
//         menuItem.style.animation = ``;
//       });
//       this.menuPopupWindow.style.animation = ``;
//       this.menuPopupWindow.classList.add(`no-display`);
//     }, 590);
//   }

//   openAccountMenu() {
//     this.accountMenuPopup.classList.remove(`no-display`);
//     this.accountMenuPopup.classList.add(`accMenuExpand`);
//     this.accountMenuItems.forEach(accMenuItem => {
//       accMenuItem.classList.add(`accMenuItemToLeft`);
//     });
//   }

//   hideAccountMenu() {
//     this.accountMenuPopup.style.animation = `accMenuReduce 0.6s ease-in`;
//     this.accountMenuPopup.classList.remove(`accMenuExpand`);

//     this.accountMenuItems.forEach(accMenuItem => {
//       accMenuItem.classList.remove(`accMenuItemToLeft`);
//     });
//     this.accountMenuItems.forEach(accMenuItem => {
//       accMenuItem.style.animation = 'accMenuItemToRight 0.6s ease-in';
//     });

//     setTimeout(() => {
//       this.accountMenuItems.forEach(accMenuItem => {
//         accMenuItem.style.animation = '';
//       });

//       this.accountMenuPopup.style.animation = ``;
//       this.accountMenuPopup.classList.add(`no-display`);
//     }, 590);
//   }
// }

// const header = new Header(
//   menuBtn,
//   menuPopup,
//   menuItemBtns,
//   accountIconButton,
//   accountMenuPopup,
//   accountMenuItems
// );

// window.onclick = function (event) {
//   if (event.target.matches(`.menu-icon`)) {
//     if (header.menuPopupWindow.classList.contains(`no-display`)) {
//       header.openMenu();
//     } else {
//       header.hideMenu();
//     }
//     header.hideAccountMenu();
//   } else if (event.target.matches(`.account-icon`)) {
//     if (header.accountMenuPopup.classList.contains(`no-display`)) {
//       header.openAccountMenu();
//     } else {
//       header.hideAccountMenu();
//     }
//     header.hideMenu();
//   } else {
//     header.hideMenu();
//     header.hideAccountMenu();
//   }
// };

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//   let currentScrollPos = window.pageYOffset;
//   if (
//     prevScrollpos !== currentScrollPos &&
//     !header.menuPopupWindow.classList.contains(`no-display`)
//   ) {
//     header.hideMenu();
//   } else if (
//     prevScrollpos !== currentScrollPos &&
//     !header.accountMenuPopup.classList.contains(`no-display`)
//   ) {
//     header.hideAccountMenu();
//   }
//   prevScrollpos = currentScrollPos;
// };
