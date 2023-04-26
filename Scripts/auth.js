class server {
  // BACKEND_URL="https://rulers-sh.com"
  BACKEND_URL = 'http://127.0.0.1:3001';

  checkAuth = async () => {
    return new Promise((resolve, reject) => {
      fetch(`${this.BACKEND_URL}/api/user/checkauth`, {
        credentials: 'include',
      })
        .then(res => res.json())
        .then(res => {
          resolve(res);
          // console.log(res.isLoggedIn);
        })
        .catch(err => {
          reject(err);
        });
    });
  };

  renderUserGems = async userGemsDOMEl => {
    this.checkAuth().then(res => {
      if (res.isLoggedIn) {
        userGemsDOMEl.textContent = res.userGems;
      }
    });
  };
}

export default server;
