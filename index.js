const express=require('express')
const app=express()
const PORT=8000

app.get('/',(req,res)=>{
    res.json({message:'Hello From CodeSphera!'})
})
app.get('/login',(req,res)=>{
    res.json({message:'Login Page'})
})
app.get('/register',(req,res)=>{
    res.json({message:'Register Page'})
})
app.get('/profile',(req,res)=>{
    res.json({message:'Profile Page'})
})
app.get('/profile/:name',(req,res)=>{
    res.send("Hello Mr. "+req.params.name)
})
app.get('/admin',(req,res)=>{
    res.json({message:'Admin Page'})
})
app.listen(PORT,()=>{
    console.log('Server is running on port '+PORT)
})