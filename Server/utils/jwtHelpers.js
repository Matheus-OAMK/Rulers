const jwt = require('jsonwebtoken');

// Create tokens for user function
function createToken({id,username}) {
  const user = {id,username};
  const access_token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15d'}); 
 
  return({access_token});
}

module.exports = {createToken};