class server {
  BACKEND_URL = "https://rulers-sh.com";
  // BACKEND_URL = 'http://127.0.0.1:3001';

  checkAuth = async () => {
    return new Promise((resolve, reject) => {
      fetch(`${this.BACKEND_URL}/api/user/checkauth`, {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((res) => {
          resolve(res);
          // console.log(res.isLoggedIn);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  renderUserGems = async (userGemsDOMEl) => {
    this.checkAuth().then((res) => {
      if (res.isLoggedIn) {
        userGemsDOMEl.textContent = res.userGems;
      }
    });
  };

  renderUserState = (logSignHeaderBtns, accItems, accGemsAmountEl) => {
    this.checkAuth().then((res) => {
      if (res.isLoggedIn) {
        // server.renderUserGems(userGemsDOMEl);
        logSignHeaderBtns.forEach((btn) => {
          btn.style.display = "none";
        });
        accItems.forEach((item) => {
          item.style.display = "block";
        });
        accGemsAmountEl.style.display = "block";
      }
    });
  };
}

export default server;
