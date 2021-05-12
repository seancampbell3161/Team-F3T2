const Imgs = require("../models/imgs")
const cloudinary = require("../middleware/cloudinary")

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
        const result = await cloudinary.uploader.upload(req.file.path);

        await Imgs.create({
          microsoftId: req.user.microsoftId,
          filename: result.secure_url,
          cloudinaryId: result.public_id,
          like: 0,
          userLikes: [],
          caption: req.body.caption
        });

        if(req.file) {
          res.redirect("/profile")
        }
      } catch (err) {
        console.log(err)
      }
    },
    updateLike: async (req, res)=>{
        let currentLike = Number(req.body.like)
        if(await Imgs.findOne({_id:req.body.postIdFromJSFile}).find({ userLikes: { $in: [req.user.microsoftId] } }) == false){
          try{
              await Imgs.findOneAndUpdate({_id:req.body.postIdFromJSFile}, {
                like: currentLike + 1,
                $push: {userLikes: req.user.microsoftId},
              })
              res.json('Added Like')  // This line is needed to update page - Indirectly Fixes a Type Error?
          }catch(err){
              console.log(err)
          }
        } else {
          let currentLike = Number(req.body.like)
          try{
              await Imgs.findOneAndUpdate({_id:req.body.postIdFromJSFile}, {
                like: currentLike - 1,
                $pull: {userLikes: req.user.microsoftId},
              })
              res.json('Removed Like')  // This line is needed to update page - Indirectly Fixes a Type Error?
          }catch(err){
              console.log(err)
          }
        }
    },
    deletePost: async (req, res)=>{
        try{
            let post = await Imgs.findById({ _id: req.body.postIdFromJSFile})
            await cloudinary.uploader.destroy(post.cloudinaryId)
            await Imgs.findOneAndDelete({_id:req.body.postIdFromJSFile})
            res.redirect("/profile")
        }catch(err){
            console.log(err)
        }
    }
}
