import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import{getCollaborators,deleteCollaborators,collaboratorAdd} from "../actions"

const Collaborators = () => {
   const dispatch=useDispatch()
   const collaborators = useSelector((state) => state.userReducer.collaborators);
   const [name, setName] = useState("");
   const [description, setDescription] = useState("");
   const [logo, setLogo] = useState("");


   const chec=(name,description,logo)=>{
  if(!name || !description || !logo){return("Complete all the fields")}
  return(true)
 }
 const add=()=>{
   const check=chec(name,description,logo);
  if(check===true){dispatch(collaboratorAdd({companyName:name,description:description,imageUrl:logo}))}
  else {alert(check)}
 }

     useEffect(
  () => {
   dispatch(getCollaborators())
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
    <label for="email">Description</label>
      <input
        type="text"
        name="email"
        id="email"
        onChange={(e) => setDescription(e.target.value)}
      />
      </div>
      <div>
    <label for="post">URL logo</label>
      <input
        type="text"
        name=""
        id="post"
        onChange={(e) => setLogo(e.target.value)}
      />
      </div>
      <button className="add-admin-button" onClick={add}>Add Collaborator</button>
      </div>
      {
       collaborators.map((obj,i)=>{
        return(
        <div className="admin-data" key={i}>
         <span>Name : {obj.companyName}</span>
         <span>Description : {obj.description}</span> 
         <img style={{width:"100px",height:"50px"}} src={obj.imageUrl} alt=""/>   
         <button onClick={()=>{dispatch(deleteCollaborators({companyName:obj.companyName}))}}>delete</button>
         </div>
         )
       })
      }
  </div>
 )
}
export default Collaborators
