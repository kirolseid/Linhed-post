const app = require('express').Router();
const auth = require('../middleware/auth');
const validation = require('../validation/account_setting.validation')
const control =require('../contoller/account_setting.control')

app.get('/account_setting',auth , control.account_setting);

app.post('/handelpassword',validation,control.handelpassword);

module.exports=app