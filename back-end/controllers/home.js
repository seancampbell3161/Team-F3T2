const Imgs = require("../models/imgs")
// Where Crud goes

module.exports = {
    getHomepage: async (req,res)=>{
        try{
            const imgFile = await Imgs.find()
            res.render('home.ejs', {user:req.user, imgs: imgFile})
        }catch(err){
            console.log(err)
        }
    },
    getProfile: async (req,res)=>{
        try{
            const imgFile = await Imgs.find({microsoftId: req.user.microsoftId})
            res.render('profile.ejs', {user:req.user, imgs: imgFile})
        }catch(err){
            console.log(err)
        }
    },
  }
