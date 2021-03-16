
import { Switch, Route } from "react-router-dom";
import './App.css';
import Adminlogin from './components/Adminlogin'
import Loginsup from "./components/Loginsup"
import Profilesup from "./components/Profilesup"
import Profileadmin from "./components/Profileadmin"
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/admin">
            <Adminlogin />
          </Route>
          <Route exact path="/superadmin">
            <Loginsup />
          </Route>
          <Route exact path="/superadmin/profile">
            <Profilesup />
          </Route>
          <Route exact path="/admin/profile">
            <Profileadmin />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
