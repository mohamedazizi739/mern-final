import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import{getAgents,deleteAgent,agentAdd} from "../actions"

const validator = require("email-validator")

const Agents = () => {
  const dispatch=useDispatch()
  const errors=useSelector((state) => state.userReducer.errors);
  const agents = useSelector((state) => state.userReducer.agents);
  if(errors && errors.msg==="agent already existe"){
  alert("agent already existe")
  dispatch({type:"clear errors"})
}
  const [agentName, setName] = useState("");
 const [agentEmail, setEmail] = useState("");
 const [agentPost, setPost] = useState("");
 
 const chec=(name,email,post)=>{
  if(!name || !post || !email){return("Complete all the fields")}
  if(!validator.validate(email)){return("email not valid")}
  return(true)
 }

  const add=()=>{
   const check=chec(agentName,agentEmail,agentPost);
  if(check===true){dispatch(agentAdd({fullname:agentName,email:agentEmail,post:agentPost}))}
  else {alert(check)}
 }
  useEffect(
  () => {
   dispatch(getAgents())
  },
  [],
);
 return (
  <div>
   
   <div className="input">
    <div>
   <label for="name">Name</label>
   <input
        type="text"
        name="name"
        id="name"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
    <div>
    <label for="email">Email</label>
      <input
        type="text"
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      </div>
      <div>
    <label for="post">Post</label>
      <input
        type="text"
        name=""
        id="post"
        onChange={(e) => setPost(e.target.value)}
      />
      </div>
      <button className="add-admin-button" onClick={add}>Add agent</button>
      </div>
   {
       agents.map((obj,i)=>{
        return(
        <div className="admin-data" key={i}>
         <span>Name : {obj.fullname}</span>
         <span>Email : {obj.email}</span>    
         <span>Post : {obj.post}</span>
         <button onClick={()=>{dispatch(deleteAgent({email:obj.email}))}}>delete</button>
         </div>
         )
       })
      }
  </div>
 )
}

export default Agents
