const session = require('express-session')
const KnexSessionStore = require('connect-session-knex')(session)


const sessionConfig = {
  name: process.env.SESSION_NAME, //by default it would be sid change for security
  secret: process.env.SESSION_SECRET,
  resave: false, // if there are no changes to the session dont save it
  saveUninitialized: true, // for GDPR compliance
  cookie: {
    maxAge: 1000 * 60 * 10,
    secure: false, // send cookie over https, set to true in production
    httpOnly: true, // always set to true, it means client JS cant access the cookie
  },
  store: new KnexSessionStore({
    knex: require('./dbConfig.js'),
    tablename: 'sessions',
    sidfieldname: 'sid',
    createtable: true,
    clearInterval: 1000 * 60 * 30,
  })
}

module.exports = sessionConfig
