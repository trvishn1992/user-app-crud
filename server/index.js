const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 5000;

const Register = require('./routes/register.js');
const Login = require('./routes/login.js');
const Users = require('./routes/users.js');
app.use('/api/register', Register);
app.use('/api/login', Login);
app.use('/api/users', Users);


app.listen(port, () => console.log(`Node server running on port ${port}`));