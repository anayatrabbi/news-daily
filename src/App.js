import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/home"
import Login from "./components/Login/login";
import NotFound from "./components/NotFound/NotFound";
import DashBoard from "./components/DashBoard/DashBoard"
import { createContext, useState } from 'react';
import PrivateRoute from "./components/privateRoute/privateRoute"
import AddAdmin from "./components/AddAdmin/AddAdmin";
import FullNews from "./components/FullNews/FullNews";

export const UserContext = createContext();
function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
        <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
           <Home/>
          </Route>
          <Route path="/login">
           <Login/>
          </Route>
          <PrivateRoute path="/dashboard">
           <DashBoard/>
          </PrivateRoute>
          <PrivateRoute path="/fullnews/:id">
           <FullNews/>
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
           <AddAdmin/>
          </PrivateRoute>
          <Route path="*">
           <NotFound/>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
