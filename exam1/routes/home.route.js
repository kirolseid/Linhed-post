const app = require('express').Router();
const auth =require('../middleware/auth')
const control =require('../contoller/home.control')


app.get('/home',auth ,control.home );

app.post('/addPost',control.addPost);

app.get('/logOut',control.logOut);

module.exports=app