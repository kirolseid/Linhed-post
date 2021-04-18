const { check } = require("express-validator")


module.exports =[
    
    check('newPassword').matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/),
    check('repeatPassword').custom((value,{req})=>{
       if(value!==req.body.newPassword){
           return false
       }else{
           return true
       }
    })
]