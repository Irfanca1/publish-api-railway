const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const { verifyToken } = require('./middleware/VerifyToken');
const { Register, Login, getUsers, Logout, ForgotPassword, ResetPassword } = require('./controller/UserController');
const prefix = '/v1/api/';

const db = require('./config/db.config.js');

db.authenticate()
  .then(() => console.log('Database connected'))
  .catch((err) => console.log('error'));

// User API
app.get(prefix + 'users', getUsers);
app.post(prefix + 'register', Register);
app.post(prefix + 'login', Login);
app.delete(prefix + 'logout', Logout);
app.post(prefix + 'forgotPassword', ForgotPassword);
app.post(prefix + 'reset-password', ResetPassword);

app.get('/', (req, res) => {
  res.send('Ok');
});

app.listen(5000 || process.env.PORT, () => {
  console.log('Server Started');
});
