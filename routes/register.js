const express = require('express');
const router = require('express').Router();

const path = require('path');
const bodyParser =  require('body-parser');
const bcrypt = require('bcryptjs');
const {check, validationResult}  =require('express-validator');
const { resolveMx } = require('dns');
const { render } = require('ejs');

router.use(express.static(path.join(__dirname,'./../views')));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));

router.get('/',(req,res)=>{
    res.render('register');
}); 

module.exports = router; 