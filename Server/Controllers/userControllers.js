const server = require('../db');
const bcrypt = require('bcrypt');
const { createToken } = require('../utils/jwtHelpers');
const {promisify} = require('util')
const jwt = require('jsonwebtoken')

//This creates a new user
exports.signUp = async (req, res) => {
  const pool = server.openDb();

  try {
    //encrypt password before storing
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await pool.query(
      'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
      [req.body.username, hashedPassword]
    );
    res.json({ users: newUser.rows[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//this is for user to login
exports.login = async (req, res) => {
  const pool = server.openDb();
  try {
    const { username, password } = req.body;
    // Check if user exists
    const users = await pool.query('SELECT * FROM users WHERE username = $1', [
      username,
    ]);
    if (users.rows.length === 0)
      return res.status(400).json({ error: 'User does not exist' });

    // password check
    const validPassword = await bcrypt.compare(
      password,
      users.rows[0].password
    );
    if (!validPassword)
      return res.status(400).json({ error: 'Invalid password' });
    //Jwt

    let token = createToken(users.rows[0]);

    res.cookie('access_token', token.access_token, {
      httpOnly: true,
      // comment out this line below to test on postman
       sameSite: 'None', secure: true
    });
    res.json(token);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

exports.logout = (req, res) => {
  try {
    res.clearCookie('access_token');
    return res.status(200).json({ message: 'access token deleted' });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

exports.checkAuth = async (req, res) =>{
  try{

    if(!req.cookies.access_token){
      return res.status(200).json({isLoggedIn: false})
    }

    const decodedToken = promisify(jwt.verify)(req.cookies.access_token, process.env.ACCESS_TOKEN_SECRET)
    
    if(!decodedToken){
      return res.status(200).json({isLoggedIn: false})
    }

    const pool = server.openDb()
    const user = await pool.query('SELECT * FROM users WHERE id = $1', [decodedToken.id])

    console.log(user);
    if(!user){
      return res.status(404).json({message: 'user does not exist'})
    }

    res.status(200).json({isLoggedIn: true})
  } catch (err){
    res.status(404).json({message: 'Something went wrong'})
  }




}