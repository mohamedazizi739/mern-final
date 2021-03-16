const mongoose=require('mongoose')
  const { Schema } = mongoose;

  const personShema=new Schema({
   companyName:{type:String},
   description:{type:String},
   imageUrl:{type:String},
  })
  const collaborator = mongoose.model('collaborator', personShema );

  module.exports=collaborator