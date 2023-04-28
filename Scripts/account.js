import server_back from "./auth.js";

const server = new server_back();

// Get all .inputBox
const inputBoxes = document.querySelectorAll(".form-input-box");
const userName = document.querySelector("#data-user-name");

// For each box
inputBoxes.forEach((box) => {
  // Get input as first child element
  const input = box.firstElementChild;

  // add event listener for any change on the input
  input.addEventListener("input", () => {
    // if input is not empty add class filled
    // else remove class filled if is empty
    input.value
      ? input.classList.toggle("filled")
      : input.classList.toggle("filled");
  });
});

// const settingsOverlay = document.querySelector(`.settings-overlay`);
// const settingsModalCloseBtn = document.querySelector(
//   `.settings-info-close-modal`
// );
// const settingsModal = document.querySelector(`.settings-info`);
// const settingsModalOpenBtn = document.querySelector(`.settings-info-icon`);

// const closeInfoModal = () => {
//   settingsOverlay.classList.add("settings-hidden");
//   settingsModal.classList.add("settings-hidden");
// };

// settingsModalOpenBtn.addEventListener("click", () => {
//   settingsOverlay.classList.remove("settings-hidden");
//   settingsModal.classList.remove("settings-hidden");
// });

// settingsModalCloseBtn.addEventListener("click", () => {
//   closeInfoModal();
// });

// settingsOverlay.addEventListener("click", () => {
//   closeInfoModal();
// });

server.checkAuth().then((res) => {
  if (res.userData.username) {
    userName.textContent = res.userData.username;
  }
});
