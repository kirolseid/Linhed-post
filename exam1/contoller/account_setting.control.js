const userModel = require('../models/user.model')
const bcrypt = require('bcrypt');
const {validationResult} = require("express-validator")


module.exports.account_setting = (req, res) => {
    res.render('acount_setting.ejs',{oldPass:req.flash('oldPass'),errors:req.flash('errors') ,done: req.flash('done'),Name:req.session.Name })
    
}

module.exports.handelpassword =async (req, res) => {
    // console.log(req.body);
  
    const {oldPassword,newPassword,repeatPassword} = req.body
    const userID =req.session.userID
    let user =await userModel.findOne({_id:userID})
  
    // console.log(user);

    const match = await bcrypt.compare(oldPassword, user.password);

    if(match) {
        // console.log('ok');
        const errors = validationResult(req)

        if(errors.isEmpty()){
            bcrypt.hash(newPassword, 7,async function(err, hash) {
                // Store hash in your password DB.
                await userModel.findOneAndUpdate({_id:userID} ,{password:hash}) 
            });
            req.flash('done' , true)
        }else{
            req.flash('errors',errors.array())
        }


         res.redirect('/account_setting')

            

        
    }else{
        req.flash('oldPass', true)
        res.redirect('/account_setting')

    }

}