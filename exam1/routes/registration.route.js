const app = require('express').Router();
const validatin = require('../validation/register.validation')
const controls =require('../contoller/register.control')

app.get('/',controls.register);

app.post('/handelSignUp',validatin,controls.handelSignUp );

module.exports=app