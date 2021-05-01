// Where Crud goes

module.exports = {
    getHomepage: async (req,res)=>{
        try{
            res.render('home.ejs', {user:req.user})
        }catch(err){
            console.log(err)
        }
    }
  }
