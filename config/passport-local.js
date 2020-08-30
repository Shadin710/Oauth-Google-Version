const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./key');
const User = require('./../models/user-models');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcryptjs')


// function initialize(passport,getUserByEmail) {
//     const authenticateUser = async(email, password, done) => {
//         const user = getUserByEmail(email);
//         if (user == null) {
//             return done(null, false, { message: 'no user with that email' })
//         }
//         try {
//             if (await bcrypt.compare(password, user.password)) {
//                 return done(null, user);
//             }
//             else {
//                 return done(null, false, { message: 'password incorrect' })
//             }
//         } catch (e) {
//             return done(e);
//         }
//     }
//     passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser))
//     passport.serializeUser((user,done)=>{ })
//     passport.deserializeUser((id,done)=>{ })
// }
// function initialize(){
// passport.use(new LocalStrategy(
//      function(email, password, done) {
//       User.findOne({ email:email }, function (err, user) {
//         if (err) { return done(err); }
//         if (!user) { return done(null, false); }
//         if (! ( bcrypt.compareSync(pass, user.password))) { return done(null, false); }
//         return done(null, user);
//       });
//     }
//   ));
//   passport.serializeUser((user, done) => {
//     done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//     User.findById(id).then((user) => {
//         done(null, user)
//     })
// })
// }
//module.exports = initialize;