// get elements by class name
import server_back from "./auth.js";

window.server_back = server_back;
const server = new server_back();

const purchaseOpenModalBtn = document.getElementsByClassName(
  "purchase-open-modal"
)[0];
const confirmationModalOverlay = document.getElementsByClassName(
  "confirmation-modal-overlay"
)[0];
const purchaseConfirmationModal = document.getElementsByClassName(
  "purchase-confirmation-modal"
)[0];
const purchaseConfirmationCloseModalBtn = document.getElementsByClassName(
  "purchase-confirmation-close-modal"
)[0];
const purchaseConfirmBtn = document.getElementsByClassName(
  "purchase-confirm-btn"
)[0];
const purchaseConfirmedModal = document.getElementsByClassName(
  "purchase-confirmed-modal"
)[0];
const purchaseCancelBtn = document.getElementsByClassName(
  "purchase-cancel-btn"
)[0];
const purchaseCanceledModal = document.getElementsByClassName(
  "purchase-canceled-modal"
)[0];

const buyBtns = document.querySelector(".buy-button");
buyBtns.forEach((btn) => {
  console.log(btn);
});

const resetCardID = () => {
  choosenCardID = null;
  console.log(choosenCardID);
};

let choosenCardID = null;
const getCardID = (button) => {
  //  GET CARD ID
  choosenCardID = button.parentElement.parentElement.id;
  console.log(choosenCardID);

  // SHOW THE CONFIRMATION MODAL
  confirmationModalOverlay.classList.remove(
    "confirmation-modal-overlay-hidden"
  );
  purchaseConfirmationModal.classList.remove(
    "purchase-confirmation-modal-hidden"
  );
};

// open purchase confirmation modal when purchase button is clicked
// purchaseOpenModalBtn.addEventListener('click', function () {
// confirmationModalOverlay.classList.remove(
//   'confirmation-modal-overlay-hidden'
// );
// purchaseConfirmationModal.classList.remove(
//   'purchase-confirmation-modal-hidden'
// );
// });

// close purchase confirmation modal when close button is clicked
purchaseConfirmationCloseModalBtn.addEventListener("click", function () {
  confirmationModalOverlay.classList.add("confirmation-modal-overlay-hidden");
  purchaseConfirmationModal.classList.add("purchase-confirmation-modal-hidden");
  resetCardID();
});

// close purchase confirmation modal when user clicks outside of the modal
window.addEventListener("click", function (event) {
  if (
    event.target == confirmationModalOverlay ||
    event.target == purchaseConfirmedModal ||
    event.target == purchaseCanceledModal
  ) {
    confirmationModalOverlay.classList.add("confirmation-modal-overlay-hidden");
    purchaseConfirmationModal.classList.add(
      "purchase-confirmation-modal-hidden"
    );
    purchaseConfirmedModal.classList.add("purchase-confirm-info-hidden");
    purchaseCanceledModal.classList.add("purchase-cancel-info-hidden");
    resetCardID();
  }
});

// display purchase confirmed modal when confirm button is clicked
purchaseConfirmBtn.addEventListener("click", function () {
  /* //////////////////////////////// */
  /* HERE IS GONNA BE THE CODE TO PURCHASE THE CARD */
  /* //////////////////////////////// */

  // RUN THIS CODE WHEN PURCHASE IS DONE
  purchaseConfirmationModal.classList.add("purchase-confirmation-modal-hidden");
  purchaseConfirmedModal.classList.remove("purchase-confirm-info-hidden");
});

// hide purchase confirmed modal when user clicks outside of the modal
purchaseConfirmedModal.addEventListener("click", function (event) {
  purchaseConfirmedModal.classList.add("purchase-confirm-info-hidden");
  confirmationModalOverlay.classList.add("confirmation-modal-overlay-hidden");
});

// display purchase canceled modal when cancel button is clicked
purchaseCancelBtn.addEventListener("click", function () {
  purchaseConfirmationModal.classList.add("purchase-confirmation-modal-hidden");
  purchaseCanceledModal.classList.remove("purchase-cancel-info-hidden");
});

// hide purchase confirmed modal when user clicks outside of the modal
purchaseCanceledModal.addEventListener("click", function (event) {
  purchaseCanceledModal.classList.add("purchase-cancel-info-hidden");
  confirmationModalOverlay.classList.add("confirmation-modal-overlay-hidden");
});
