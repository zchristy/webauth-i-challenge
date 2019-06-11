const express = require('express');
const helmet = require('helmet');
const cors = require('cors');


const userRouter = require('./router/user-router.js')

const server = express();
const port = process.env.PORT || 5000;

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api', userRouter)

server.get('/', (req, res) => {
  res.send("It's alive!");
});

server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
