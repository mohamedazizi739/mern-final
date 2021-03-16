import React, {useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAdmins,adminAdd,deleteAdmin } from "../actions";
import "./css/profilesup.css"
const validator = require("email-validator")
const Profile = () => {
 const [adminName, setName] = useState("");
 const [adminEmail, setEmail] = useState("");
 const [adminPassword, setPassword] = useState("");
   const admins = useSelector((state) => state.userReducer.admins);
  const errors=useSelector((state) => state.userReducer.errors);
 const dispatch = useDispatch();
 const chec=(name,email,password)=>{
  if(!name || !password || !email){return("Complete all the fields")}
  if(password.length<4){return('Password length must be >4')}
  if(!validator.validate(email)){return("email not valid")}
  return(true)
 }

 const add=()=>{
   const check=chec(adminName,adminEmail,adminPassword);
  if(check===true){dispatch(adminAdd({fullname:adminName,email:adminEmail,password:adminPassword}))}
  else {alert(check)}
 }

 useEffect(
  () => {
   dispatch(getAdmins())
  },
  [],
);

if(errors && errors.msg=="admin already existe"){
  alert("admin already existe")
  dispatch({type:"clear errors"})
}
 return (
  <div>
   <h1 >Super admin page</h1>
   
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
    <label for="password">Password</label>
      <input
        type="text"
        name=""
        id="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      </div>
      <button className="add-admin-button" onClick={add}>Add admin</button>
      </div>
      {
       admins.map((obj,i)=>{
        return(
        <div className="admin-data" key={i}>
         <span>Name : {obj.fullname}</span>
         <span>Email : {obj.email}</span>    
         <span>Password : {obj.password}</span>
         <button onClick={()=>{dispatch(deleteAdmin({email:obj.email}))}}>delete</button>
         </div>
         )
       })
      }
        
  </div>
 )
}

export default Profile
