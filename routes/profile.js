const express = require('express');
const router = require('express').Router();
const bodyParser =  require('body-parser');

const path = require('path');
const authCheck = (req,res,next)=>{
    if(!req.user)
    {
        //if the user isn't logged in
        res.redirect('/auth');
    }
    else
    {
        //if the user is logged im
        next();
    }
}

router.use(express.static(path.join(__dirname,'./../views')));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));

router.get('/',authCheck,(req,res)=>{
    res.send('you are logged in this is your profile '+ req.user.username);
});
module.exports =router; 