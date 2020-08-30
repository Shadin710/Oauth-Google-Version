const express = require('express');
const router = require('express').Router();

const path = require('path');
const bodyParser =  require('body-parser');
const bcrypt = require('bcryptjs');
const {check, validationResult}  =require('express-validator');
const { resolveMx } = require('dns');
const passport = require('passport');
//const initializePassport = require('./../config/passport-local');
const User = require('./../models/user-models');
const flash =  require('express-flash');
const session = require('express-session');
const keys = require('./../config/key')

router.use(express.static(path.join(__dirname,'./../views')));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true})); 

//initializePassport(passport,email=>User.find(user=>user.email === eamil));
router.get('/',(req,res)=>{
    res.render('login');
});
router.post('/', (req, res, next) => {
    passport.authenticate('local', {
      successRedirect: '/dashboard',
      failureRedirect: '/auth/',
      failureFlash: true
    })(req, res, next);
  });
router.get('/logout',(req,res)=>{
    req.logout();
    res.redirect('/auth/');
});
router.get('/google',passport.authenticate('google',{
    scope:['profile']
}));
router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    res.redirect('/profile/');
}); 

module.exports = router; 