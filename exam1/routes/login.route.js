const app = require('express').Router();
const control =require('../contoller/login.control')



app.get('/login',control.login );

app.post('/handelSignIn',control.handelSignIn);

module.exports=app