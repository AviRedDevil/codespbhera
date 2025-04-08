const User=require('../models/user')
async function register(req,res){
    const {Name,Email,Phone,Gender,Bio,Type,Password}=req.body
    await User.create({
        Name,
        Email,
        Phone,
        Gender,
        Bio,
        Type,
        Password,
    })
    return res.status(200).json({msg:'User Created'})
}
async function login(req,res){
    const {Email,Password}=req.body
    const user= await User.findOne({Email,Password})
    if(!user){
        return res.status(400).json({msg:'Invalid Credentials'})
    }
    return res.redirect(`/User/${encodeURIComponent(user.Name)}`)
}
module.exports={
    register,
    login,
}