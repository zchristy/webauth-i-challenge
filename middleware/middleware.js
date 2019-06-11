const Users = require('../models/user-model.js');
const bcrypt = require('bcryptjs')


module.exports = {
  restricted
}

function restricted(req, res, next) {
  // read username and password from the headers and verify them
  const{ username, password } = req.headers

  if(username && password) {
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          next()
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  } else {
    res.status(401).json({message: "Invalid Credentials"})
  }
}
