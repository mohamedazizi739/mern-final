const mongoose=require("mongoose")
require("dotenv").config({ path: "./config/.env" });
const mongoURI = process.env.mongouri;
const connectdb=()=>{
   mongoose.connect(mongoURI, {useNewUrlParser: true},{useUnifiedTopology: true}).then(()=>console.log("mongoose is connected")).catch((err)=>console.log(err))
};


module.exports=connectdb;
