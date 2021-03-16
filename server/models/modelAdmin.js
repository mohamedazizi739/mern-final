  const mongoose=require('mongoose')
  const { Schema } = mongoose;

  const personShema=new Schema({
   fullname:{type:String},
   email:{type:String},
   password:{type:String},
  })
  const admin = mongoose.model('admin', personShema );

  module.exports=admin