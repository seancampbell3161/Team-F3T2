const Imgs = require("../models/imgs")

module.exports = {
    getProfile: async (req,res)=>{
        try{
            const imgFile = await Imgs.find({microsoftId: req.user.microsoftId})
            res.render('profile.ejs', {user:req.user, imgs: imgFile})
        }catch(err){
            console.log(err)
        }
    },
    createPost: async (req, res) => {
      try {
        await Imgs.create({microsoftId: req.user.microsoftId, filename: req.file.filename, like: 0})
        if(req.file) {
          console.log(req.file.filename)
          res.redirect("/profile")
        }
      } catch (err) {
        console.log(err)
      }
    },
    addLike: async (req, res)=>{
        let currentLike = Number(req.body.like)
        try{
            await Imgs.findOneAndUpdate({_id:req.body.postIdFromJSFile}, {
              like: currentLike + 1
            })
            res.json('Added Like')  // This line is needed to update page - Indirectly Fixes a Type Error?
        }catch(err){
            console.log(err)
        }
    },
    deletePost: async (req, res)=>{
        try{
            await Imgs.findOneAndDelete({_id:req.body.postIdFromJSFile})
            res.redirect("/profile")
        }catch(err){
            console.log(err)
        }
    }
}
