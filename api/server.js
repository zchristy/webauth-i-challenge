const express = require('express');
const helmet = require('helmet');
const cors = require('cors');


const authRouter = require('../router/auth-router.js')
const userRouter = require('../router/user-router.js')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api', authRouter)
server.use('/users', userRouter)

server.get('/', (req, res) => {
  res.send("It's alive!");
});

module.exports = server
