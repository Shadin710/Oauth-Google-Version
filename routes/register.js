const express = require('express');
const router = require('express').Router();

const path = require('path');
const bodyParser =  require('body-parser');
const bcrypt = require('bcryptjs');
const {check, validationResult}  =require('express-validator');
const { resolveMx } = require('dns');
const { render } = require('ejs');
const User = require('./../models/user-models');
const { userInfo } = require('os');
router.use(express.static(path.join(__dirname,'./../views')));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));

router.get('/',(req,res)=>{
    res.render('register');
}); 
router.post('/',
    [
        check('name').not().isEmpty().trim().escape(),
        check('email').isEmail().normalizeEmail(),
        check('pass').not().isEmpty().trim().escape(),
        check('pass2').not().isEmpty().trim().escape(),

    ]
,async(req,res)=>{
    const error =  validationResult(req);

    if(!error.isEmpty())
    {
        console.log('hello')
        res.redirect('/register/');
    }
    try {
        let hashedPassword = await bcrypt.hash(req.body.pass,10)
        User.create({
            username: req.body.name, 
            email: req.body.email,
            password: hashedPassword,
        })
        res.redirect('/auth/');
    } catch{
        res.redirect('/register/');
    }

});
module.exports = router; 