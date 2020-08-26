
//initialization 
const path  = require('path');
const express = require('express');
const app = express();
const log = require('./routes/login');
const reg = require('./routes/register');
const forget = require('./routes/forget');
const morgan = require('morgan');
const cors = require('cors');

//setting the port
const port = process.env.PORT||3000
app.use(express.static(path.join(__dirname,'views')));

// setting up the view engine
app.set('view engine','ejs');
app.set ('views','./views');

app.use(morgan('dev'));
app.use(cors());

//setting up the routes
app.use('/',log);
app.use('/register',reg);
app.use('/forget',forget);

app.listen(port,()=>{
    console.log(`server is running in ${port}......`);
});