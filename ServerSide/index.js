const express=require('express')
const UserRouter=require('./routes/UserRoutes')
const AdminRouter=require('./routes/AdminRoutes')
const {mongoConn}=require('./connection')
const cookieParser=require('cookie-parser')
const app=express()
const PORT=8000

mongoConn('mongodb://127.0.0.1:27017/CodeSphera').then(()=>{ console.log('MongoDB Connected')})
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.get('/',(req,res)=>{
    res.json({message:'Home Page'})
})
app.use("/User",UserRouter)
app.use("/Admin",AdminRouter)
app.listen(PORT,()=>{
    console.log('Server is running on port '+PORT)
})