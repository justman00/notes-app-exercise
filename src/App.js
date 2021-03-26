import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import CreateBar from "./components/CreateBar";
import Notes from "./components/Notes";
import Login from "./pages/Login";
import Register from './pages/Register';
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

function App() {
  const [isAuthenticated, setAuthenticated] = useState(true);

  useEffect(() => {
    fetch("https://keeping-note.herokuapp.com/api/auth", {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).then((res) => {
      switch (res.status) {
        case 200:
          setAuthenticated(true);
          break;
        case 401:
          setAuthenticated(false);
          break;
        default:
          break;
      }
    });
  }, []);

  return (
    <div className = "App">
      {isAuthenticated ? (<CreateBar />) : null}
      <Switch>
        <PrivateRoute
          exact path = "/"
          component = {Notes}
          isAuthenticated = {isAuthenticated}
        />
        <Route exact path="/login"
              render={(props) => (
                <Login {...props} setAuthenticated={setAuthenticated} />
              )} />
        <Route exact path="/register"
              render={(props) => (
                <Register {...props}/>
              )} />
      </Switch>
    </div>
  );
}

export default App;
