const express=require('express')
const UserRouter=require('./routes/UserRoutes')
const AdminRouter=require('./routes/AdminRoutes')
const app=express()
const PORT=8000

app.get('/',(req,res)=>{
    res.json({message:'Home Page'})
})
app.use("/User",UserRouter)
app.use("/Admin",AdminRouter)
app.listen(PORT,()=>{
    console.log('Server is running on port '+PORT)
})