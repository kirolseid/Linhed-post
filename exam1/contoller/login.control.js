const userModel = require('../models/user.model')
const bcrypt = require('bcrypt');

module.exports.login =(req, res) => {
    if(req.session.isLoggin){
        res.redirect('/home')
    }else{
    res.render('login.ejs',{exists:req.flash('emailIncorrect'),incorrect:req.flash('incorrect')})

    }
    
}

module.exports.handelSignIn = async (req, res) => {
    const{email,password} =  req.body
  let user =  await userModel.findOne({email})
  if(user){
        const match = await bcrypt.compare(password, user.password);

        if(match) {
            //login
            req.session.isLoggin=true
            req.session.userID = user._id
            req.session.Name = user.fname
            

            res.redirect('/home')   
        }else{
            req.flash('incorrect',true)
            res.redirect('/login')
        }


  }else{
    req.flash('emailIncorrect',true)
    res.redirect('/login')

  }

}