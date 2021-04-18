const app = require('express').Router();
const auth =require('../middleware/auth')
const control =require('../contoller/profile.control')

app.get('/profile',auth ,control.profile );

module.exports=app