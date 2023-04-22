const jwt = require('jsonwebtoken');

// Create tokens for user function
function createTokens({id,username}) {
  const user = {id,username};
  const access_token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15m'}); // shorter expiration time minutes
  const refresh_token = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '5m'}); // longer expiration time days
  return({access_token, refresh_token});
}

module.exports = {createTokens};