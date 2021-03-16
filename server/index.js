const express=require('express')
const connectdb=require('./connectdb')
const app=express()
app.use(express.json())
connectdb()

app.use("/",require('./routes.js'))


const PORT=process.env.PORT ||5000;
app.listen(PORT,()=>console.log(`Server started on port ${PORT}`))

