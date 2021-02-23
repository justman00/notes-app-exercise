import React from "react";
import Home from "./pages/Home";
import AddNotice from "./pages/AddNotice";
import { Route, Switch, Link } from "react-router-dom";
import "./style.css";
import Notice from "./pages/Notice";
function App() {
  return (
    <div className="App">
      <header>
        <nav className="navigation">
          <li>
            <Link className="link" to="/home">
              HOME
            </Link>
          </li>
          <li>
            <Link className="link" to="/add">
              ADD NOTICE
            </Link>
          </li>
        </nav>
      </header>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/add">
          <AddNotice />
        </Route>
        <Route path="/edit-notice:id">
          <Notice />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
