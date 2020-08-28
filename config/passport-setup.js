const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./key');

passport.use(
    new GoogleStrategy({
        //OPTIONS
        clientID:keys.google.clientID,
        clientSecret:keys.google.clientSecret      
    }),()=>{
        //callback functions
        })