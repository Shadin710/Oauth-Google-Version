const express = require('express');
const router = require('express').Router();

const path = require('path');
const bodyParser =  require('body-parser');
const bcrypt = require('bcryptjs');
const {check, validationResult}  =require('express-validator');
const { resolveMx } = require('dns');
const passport = require('passport');

router.use(express.static(path.join(__dirname,'./../views')));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true})); 


router.get('/',(req,res)=>{
    res.render('login');
});
router.get('/logout',(req,res)=>{
    res.send("logged out");
});
router.get('/google',passport.authenticate('google',{
    scope:['profile']
}));
router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    res.redirect('/profile/');
}); 

module.exports = router; 