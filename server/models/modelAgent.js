const mongoose=require('mongoose')
  const { Schema } = mongoose;

  const personShema=new Schema({
   fullname:{type:String},
   email:{type:String},
   post:{type:String},
  })
  const agent = mongoose.model('agent', personShema );

  module.exports=agent