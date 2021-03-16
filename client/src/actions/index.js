import axios from "axios";
export const supadminLogin = (supdata) => async (dispatch) => {
  try {
    const superadminLogin = await axios.post("/supadmin/login",supdata);
    if (superadminLogin.data==="super admin authorized"){dispatch({ type: "super admin authorized" });}
    else if(superadminLogin.data==="super wrong name or password"){
      dispatch({ type: "super wrong name or password"});
    }
  } catch (error) {
    dispatch({ type: "super login fail", payload: error.response.data });
  }
};
// add admin
export const adminAdd=(adminData)=>async(dispatch)=>{
  try {
   const addadmin= await axios.post("/supadmin",adminData)
   if(addadmin.data==="admin added successfully")dispatch(getAdmins())
  } catch (error) {

  dispatch({type:"add admin failed",payload:error.response.data})
  }
}
// get adminns
export const getAdmins=()=>async(dispatch)=>{
   try {
     const admins=await axios.get("/supadmin")
     dispatch({type:"get admins list success",payload:admins.data})
   } catch (error) {
     dispatch({type:"get admins list failed",payload:error.response.data})

   }
}
// delete admin
export const deleteAdmin=(email)=>async(dispatch)=>{
  try {
    await axios.delete('/supadmin',{data:email});
    dispatch(getAdmins())
    
  } catch (error) {
    
  }

}

//  admin login
export const adminLogin = (supdata) => async (dispatch) => {
  try {
    const adminLogin = await axios.post("/admin/login",supdata);
    console.log(adminLogin)
    if (adminLogin.data==="right"){dispatch({ type: "admin authorized" });}
    else if(adminLogin.data==="wrong admin"){
      dispatch({ type: "wrong admin"});
    }
  } catch (error) {
    dispatch({ type: "super login fail", payload: error.response.data });
  }
};
// get agents
export const getAgents=()=>async(dispatch)=>{
   try {
     const agents=await axios.get("/admin/agents")
     dispatch({type:"get agents list success",payload:agents.data})
   } catch (error) {
     dispatch({type:"get agents list failed",payload:error.response.data})

   }
}
// delete agents
export const deleteAgent=(email)=>async(dispatch)=>{
  try {
    await axios.delete('/admin/agent',{data:email});
    dispatch(getAgents())
    
  } catch (error) {
    
  }

}
// add agent
export const agentAdd=(agentData)=>async(dispatch)=>{
  try {
   const addAgent= await axios.post("/admin/agent",agentData)
   if(addAgent.data==="agent added successfully")dispatch(getAgents())
  } catch (error) {

  dispatch({type:"add agent failed",payload:error.response.data})
  }
}
//  get collaborators
export const getCollaborators=()=>async(dispatch)=>{
   try {
     const collaborators=await axios.get("/admin/collaborators")
     dispatch({type:"get collaborators list success",payload:collaborators.data})
   } catch (error) {
     dispatch({type:"get collaborators list failed",payload:error.response.data})

   }
}
// delete collaboratos
export const deleteCollaborators=(companyName)=>async(dispatch)=>{
  try {
    await axios.delete('/admin/collaborators',{data:companyName});
    dispatch(getCollaborators())
    
  } catch (error) {
    
  }

}
// add collaborator
export const collaboratorAdd=(collaboratorData)=>async(dispatch)=>{
  try {
   const addCollaborator= await axios.post("/admin/collaborators",collaboratorData)
   console.log(addCollaborator)
   if(addCollaborator.data==="collaborator added successfully")dispatch(getCollaborators())
  } catch (error) {
  dispatch({type:"add collaborator failed",payload:error.response.data})
  }
}