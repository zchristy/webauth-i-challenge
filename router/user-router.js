const express = require('express');
const bcrypt = require('bcryptjs')

const Users = require('../models/user-model.js');

const mw = require('../middleware/middleware.js')

const router = express.Router();



router.get('/', mw.restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router
