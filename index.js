const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const { verifyToken } = require('./middleware/VerifyToken');
const { Register, Login, getUsers, Logout, ForgotPassword, ResetPassword } = require('./controller/UserController');
const prefix = '/v1/api/';

// User API
app.get(prefix + 'users', getUsers);
app.post(prefix + 'register', Register);
app.post(prefix + 'login', Login);
app.delete(prefix + 'logout', Logout);
app.post(prefix + 'forgotPassword', ForgotPassword);
app.post(prefix + 'reset-password', ResetPassword);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
