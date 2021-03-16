const express=require('express')
const router = express.Router();
const admin=require('./models/modelAdmin.js')
const agent=require('./models/modelAgent.js')
const collaborator=require('./models/modelCollaborator.js')
var CryptoJS = require("crypto-js")
const { response } = require('express');
require("dotenv").config({ path: "./config/.env" });

// Super admin routes

// supadmin name, password
const supAdminName=process.env.superadmin
const supAdminPassword=process.env.adminpassword
// hash key for password
const hashkey = process.env.hashkey;
// get all admins
router.get('/supadmin',async(req,res)=>{
 const all=await admin.find({},(err,docs)=>{
   if(err){res.send("get admins list failed")}else{
       docs.map((val)=>{
       const bytes  = CryptoJS.AES.decrypt(val.password, hashkey);
       const password = bytes.toString(CryptoJS.enc.Utf8);
       val.password=password
       return({val})
       })
       res.json(docs)
   }

 })
 
})
//Create and Save admin:
router.post("/supadmin", async(req, res) => {
  const { email, fullname, password } = req.body;
   const searchResult = await admin.findOne({ email });
   if (searchResult) return res.status(401).json({ msg: "admin already existe" });
   try{
    const newadmin=new admin({
     fullname,
     email,
     password
    });
    
    const hash = await CryptoJS.AES.encrypt(password, hashkey).toString()
    newadmin.password = hash;
    await newadmin.save()
    res.status(201).send('admin added successfully')
   }catch(error){
    res.status(501).json({ msg: "admin add fail" });

   }

});
// delete admin
router.delete("/supadmin",(req,res)=>{
  const {email}=req.body
  admin.findOneAndRemove({email:email}, (err)=>{err?res.send("admin remove failed"):res.send("admin is removed")})
})
// login super admin
router.post("/supadmin/login",(req,res)=>{
  
  if(req.body.supAdminName!=supAdminName || req.body.supAdminPassword!=supAdminPassword ){
    res.send("super wrong name or password")
  } else{
    res.send("super admin authorized")
  }

})
//  Admin routes
// login admin
router.post("/admin/login",async(req,res)=>{
  try {
  const {password,email}=req.body
  const searchAdmin = await admin.findOne({ email })
  
  if (!searchAdmin){res.send("wrong admin")}
  else{
    const bytes  = CryptoJS.AES.decrypt(searchAdmin.password, hashkey);
    const hashpassword = bytes.toString(CryptoJS.enc.Utf8);
    console.log(hashpassword)
    if(password!=hashpassword){res.send("wrong password")}
    else{res.send(String("right"))}
  }
    
  } catch (error) {
    res.status(504).json('login failed')
  }
  
})
// create and save agent
router.post("/admin/agent", async(req, res) => {
  const { email, fullname, post } = req.body;
   const searchResult = await agent.findOne({ email });
   if (searchResult) return res.status(401).json({ msg: "agent already existe" });
try{
    const newagent=new agent({
     fullname,
     email,
     post
    });
   
    await newagent.save()
    res.status(201).send('agent added successfully')
   }catch(error){
    res.status(501).send("agent add fail" );

   }

});
// get agents
router.get('/admin/agents',async(req,res)=>{
 const all=await agent.find({},(err,docs)=>{
   if(err){res.send("get admins list failed")}else{
       
       res.json(docs)
   }

 })
 
})
// delete agent
router.delete("/admin/agent",(req,res)=>{
  const {email}=req.body
  agent.findOneAndRemove({email:email}, (err)=>{err?res.send("agent remove failed"):res.send("egent is removed")})
})

//  add collaborator
router.post("/admin/collaborators", async(req, res) => {
  const { companyName, description, imageUrl } = req.body;
   const searchResult = await collaborator.findOne({ companyName });
   if (searchResult) return res.status(401).json({ msg: "collaborator already existe" });
try{
    const newcollaborator=new collaborator({
     companyName,
     description,
     imageUrl
    });
   
    await newcollaborator.save()
    res.status(201).send('collaborator added successfully')
   }catch(error){
    res.status(501).send("collaborator add fail" );

   }

});
//get collaborators
router.get('/admin/collaborators',async(req,res)=>{
 const all=await collaborator.find({},(err,docs)=>{
   if(err){res.send("get collaborator list failed")}else{
       
       res.json(docs)
   }

 })
 
})
// delete collaborators
router.delete("/admin/collaborators",(req,res)=>{
  const {companyName}=req.body
  collaborator.findOneAndRemove({companyName:companyName}, (err)=>{err?res.send("collaborators remove failed"):res.send("collaborators is removed")})
})


module.exports=router
