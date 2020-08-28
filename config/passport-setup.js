const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./key');

passport.use(
    new GoogleStrategy({
        //OPTIONS
        callbackURL:'http://localhost:3000/auth/google/redirect',
        clientID:keys.google.clientID,
        clientSecret:keys.google.clientSecret      
    },(accessToken,refreshToken,profile,done)=>{
        //callback functions
        console.log(`passport callback function fired`);
        console.log(profile);
        })
)