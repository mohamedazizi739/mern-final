import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { supadminLogin } from "../actions";

const Login = () => {
  const [supAdminName, setName] = useState("");
  const [supAdminPassword, setPassword] = useState("");

  const supisAuth = useSelector((state) => state.userReducer.supisAuth);
  const supErrorMessage = useSelector((state) => state.userReducer.supErrorMessage);
   
  const supErrorMessageServer = useSelector((state) => state.userReducer.supErrorMessageServer);
  const dispatch = useDispatch();

  const login = () => {
    dispatch(
      supadminLogin({
        supAdminName,
        supAdminPassword,
      })
    );
  };
  return supisAuth ? (
    <Redirect to="/superadmin/profile" />
  ) : (
    <div>
      
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        name=""
        id=""
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}>Login</button>
      {supErrorMessage?<p style={{color:"red"}}>"Wrong email ro password"</p>:<p></p>}
      {supErrorMessageServer?<p>we have a server problem</p>:<p></p>}
        
      
    </div>
  );
};

export default Login;
