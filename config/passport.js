const passport = require('passport')
const LocalStrategy = require('passport-local')
const FacebookStrategy = require('passport-facebook').Strategy    // 載入 passport-facebook
const bcrypt = require('bcrypt-nodejs')
const db = require('../models')
const User = db.User

// setup passport strategy
passport.use(new LocalStrategy(
  // customize user field
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  // authenticate user
  (req, username, password, cb) => {
    User.findOne({ where: { email: username } }).then(user => {
      if (!user) return cb(null, false, req.flash('error_messages', '帳號或密碼輸入錯誤'))
      if (!bcrypt.compareSync(password, user.password)) return cb(null, false, req.flash('error_messages', '帳號或密碼輸入錯誤！'))
      return cb(null, user)
    })
  }
))

console.log(process.env);
passport.use(
  new FacebookStrategy({
    clientID: process.env.FACEBOOK_ID,
    clientSecret: process.env.FACEBOOK_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK,
    profileFields: ['email', 'displayName']
  }, (accessToken, refreshToken, profile, done) => {
    // find and create user
    User.findOne({
      email: profile._json.email
    }).then(user => {
      // 如果 email 不存在就建立新的使用者
      if (!user) {
        // 因為密碼是必填欄位，所以我們可以幫使用者隨機產生一組密碼，然後用 bcrypt 處理，再儲存起來
        var randomPassword = Math.random().toString(36).slice(-8)
        bcrypt.genSalt(10, (err, salt) =>
          bcrypt.hash(randomPassword, salt, (err, hash) => {
            var newUser = User({
              name: profile._json.name,
              email: profile._json.email,
              password: hash
            })
            newUser.save().then(user => {
              return done(null, user)
            }).catch(err => {
              console.log(err)
            })
          })
        )
      } else {
        return done(null, user)
      }
    })
  })
)



// serialize and deserialize user
passport.serializeUser((user, cb) => {
  cb(null, user.id)
})
passport.deserializeUser((id, cb) => {
  User.findByPk(id).then(user => {
    return cb(null, user)
  })
})

module.exports = passport