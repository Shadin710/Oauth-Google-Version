//initialization 
const path  = require('path');
const express = require('express');
const app = express();
const log = require('./routes/login');
const reg = require('./routes/register');
//const forget = require('./routes/forget');
const morgan = require('morgan');
const cors = require('cors');
const passportSetup = require('./config/passport-setup');
//setting the port
const port = process.env.PORT||3000;
const mongoose = require('mongoose');
const database = require('./database');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/key');
const profileRoute = require('./routes/profile');
const { initialize } = require('passport');
const User = require('./models/user-models');

app.use(express.static(path.join(__dirname,'views')));
// setting up the view engine
app.set('view engine','ejs');
app.set ('views','./views');
app.use(morgan('dev'));
app.use(cors());



app.use(cookieSession({
    maxAge:24*60*60*1000,
    keys: [keys.session.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());


//setting up the routes 
app.use('/auth',log);
app.use('/register',reg);
//app.use('/forget',forget);
app.use('/profile',profileRoute);

app.listen(port,()=>{
    console.log(`server is running in ${port}......`);
});