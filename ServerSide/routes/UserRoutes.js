const UserRouter=require('express').Router();

UserRouter.get('/',(req,res)=>{
    res.json({message:'User Home'})
})
UserRouter.get('/profile',(req,res)=>{
    res.json({message:'User Profile'})
})
UserRouter.get('/settings',(req,res)=>{
    res.json({message:'User Settings'})
})
UserRouter.get('/logout',(req,res)=>{
    res.json({message:'User Logout'})
})
UserRouter.get('/login',(req,res)=>{
    res.json({message:'User Login'})
})
UserRouter.get('/:name',(req,res)=>{
    res.send('Hello '+req.params.name)
})
module.exports=UserRouter