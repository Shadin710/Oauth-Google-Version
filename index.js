const path  = require('path');
const express = require('express');
const app = express();


const port = process.env.PORT||3000
app.use(express.static(path.join(__dirname,'views')));


app.set('view engine','ejs');
app.set ('views','./views');

app.get('/login',(req,res)=>{
    res.render('login');
});
app.get('/register',(req,res)=>{
    res.render('register');
})
app.get('/forget',(req,res)=>{
    res.render('forget')
})

app.listen(port,()=>{
    console.log(`server is running in ${port}......`);
});