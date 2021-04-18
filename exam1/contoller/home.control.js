const postModel =require('../models/post.model')

module.exports.home =async (req, res) => {
    const userID = req.session.userID
    // console.log(userID);
  
   const posts = await postModel.find({}).populate('userID', 'userName')     
   var date1 = new Date(Date.now());
    // console.log(posts);
      res.render('home.ejs',{posts,date1 , Name:req.session.Name})
      
  }


  module.exports.addPost =async (req, res) => {
    // console.log(req.body);
  const { title, text } = req.body
  const currentData = new Date(Date.now());
  const userID = req.session.userID

 await postModel.insertMany({title, text , currentData ,  userID })
    res.redirect('/home')
    
}


module.exports.logOut = (req, res) => {
    req.session.destroy()
    res.redirect('/login')
    
}