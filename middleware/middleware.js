const bcrypt = require('bcryptjs')

const Users = require('../models/user-model.js')

module.exports = {
  restricted
}

function restricted(req, res, next) {
  if(req.session && req.session.username) {
    next()
  } else {
    res.status(401).json({message: "you shall not pass"})
  }
}
