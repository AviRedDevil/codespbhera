const express=require('express')
const UserRouter=require('./routes/UserRoutes')
const AdminRouter=require('./routes/AdminRoutes')
const {mongoConn}=require('./connection')
const cookieParser=require('cookie-parser')
const cors=require('cors')
const path=require('path')
const app=express()
const PORT=8000

mongoConn('mongodb://127.0.0.1:27017/CodeSphera').then(()=>{ console.log('MongoDB Connected')})
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
  }))
app.get('/',(req,res)=>{
    res.json({message:'Home Page'})
})
app.use("/api/User",UserRouter)
app.use("/api/Admin",AdminRouter)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../User_Site/dist')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../User_Site/dist/index.html'))
  })
} else {
  app.get('/', (req, res) => {
    res.json({message: 'API Server Running'})
  })
}
app.listen(PORT,()=>{
    console.log('Server is running on port '+PORT)
})