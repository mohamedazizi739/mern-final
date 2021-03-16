import React,{ useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { adminLogin } from "../actions";

const Adminlogin = () => {
const dispatch = useDispatch();
const adminAuth = useSelector((state) => state.userReducer.adminAuth);
const wrongadmin = useSelector((state) => state.userReducer.wrongadmin);
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
if(wrongadmin){
 alert("wrong email or password");
 dispatch({type:"delete wrong admin"})
}
const login = () => {
    dispatch(
      adminLogin({
        email,
        password,
      })
    );
  };
 return adminAuth ? (
    <Redirect to="/admin/profile" />): (
  <div>
      
      <input
        type="text"
        name="email"
        id="email"
        onChange={(e) => {setEmail(e.target.value)}}
      />
      <input
        type="password"
        name=""
        id=""
        onChange={(e) => {setPassword(e.target.value)}}
      />
      <button onClick={login} >Login</button>  
    
  </div>
 )
}

export default Adminlogin

