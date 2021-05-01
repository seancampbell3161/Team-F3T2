const Imgs = require("../models/imgs")

module.exports = {
    getProfile: async (req,res)=>{
        try{
            const imgFile = await Imgs.findOne({microsoftId: req.user.microsoftId})
            res.render('profile.ejs', {user:req.user, imgs: imgFile})
        }catch(err){
            console.log(err)
        }
    },
    createPost: async (req, res) => {
      try {
        await Imgs.create({microsoftId: req.user.microsoftId, filename: req.file.filename})
        if(req.file) {
          console.log(req.file.filename)
          // res.json(req.file)
          res.redirect("/profile")
        }
      } catch (err) {
        console.log(err)
      }
    }
  }

// , imgs: imgs
