import React from 'react'
import {Link,Switch,useRouteMatch,Route,BrowserRouter as Router} from "react-router-dom"
import Agents from "./Agents"
import Collaborators from "./Collaborators"
const Profileadmin = () => {
 let { path, url } = useRouteMatch();

 return (
  <Router>
   <h1>Admin profile</h1>
   
   <Link to={`${url}/agents`}><button className="adminbuttons">Agents</button></Link>
   <Link to={`${url}/collaborators`}><button className="adminbuttons">Collaborators</button></Link>
   <Switch>
    <Route exact path={`${path}/agents`}>
            <Agents />
     </Route>
    <Route exact path={`${path}/collaborators`}>
            <Collaborators />
     </Route>
   </Switch>
   </Router>
  
 )
}

export default Profileadmin
