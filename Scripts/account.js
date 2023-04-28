import server_back from "./auth.js";
import { requestOptions } from "./helper.js";
const server = new server_back();
import { blueAlert, redAlert } from "./alert.js";
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
      ? input.classList.add("filled")
      : input.classList.remove("filled");
  });
});

// **********  PROFILE FUNCTION TO CHANGE PASSWORD**********

function clearInputs() {
  const passwordInput = document.querySelector("#currentpassword");
  const newPasswordInput = document.querySelector("#newpassword1");
  const confirmPasswordInput = document.querySelector("#newpassword2");
  passwordInput.value = "";
  newPasswordInput.value = "";
  confirmPasswordInput.value = "";

  inputBoxes.forEach((box) => {
    const input = box.firstElementChild;
    input.classList.remove("filled");
  });
}

const profileForm = document.querySelector(".settings-form1");

const profileRoute = `${server.BACKEND_URL}/api/user/profile`;

profileForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const currentPassword = formData.get("password");
  const newPassword = formData.get("newpassword1");
  const confirmPassword = formData.get("newpassword2");
  const data = { currentPassword, newPassword, confirmPassword };

  try {
    const response = await fetch(profileRoute, {
      ...requestOptions,
      body: JSON.stringify(data),
    });
    const responseData = await response.json();

    if (response.ok) {
      blueAlert(responseData.message); // Password updated successfully
      clearInputs();
    } else if (response.status === 400) {
      redAlert(responseData.message); // Current password incorrect or passwords do not match or new password is too short
    } else if (response.status === 401) {
      alert(responseData.error); // Error message from server
    }
  } catch (error) {
    console.error(error);
  }
});

server.checkAuth().then((res) => {
  if (res.userData.username) {
    userName.textContent = res.userData.username;
  }
});
