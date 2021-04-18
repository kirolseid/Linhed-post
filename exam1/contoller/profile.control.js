const postModel =require('../models/post.model')


module.exports.profile = async(req, res) => {
    var date1 = new Date(Date.now());
   
   
       const userID = req.session.userID
   let posts =await postModel.find({userID}).populate('userID','userName')
   
       // console.log(posts);
       console.log(req.session.Name);
       res.render('profile.ejs',{posts,date1 ,Name:req.session.Name})
   
       
   }