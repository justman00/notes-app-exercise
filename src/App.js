import React, { useEffect, useState } from "react";
import { getAllNotes, deleteNote, editNote } from "./api";
import Home from "./pages/Home";
import AddNotice from "./pages/AddNotice";
import { Route, Switch, Link } from "react-router-dom";
import "./style.css";
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
      </Switch>
    </div>
  );
}

export default App;
