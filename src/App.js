import React, { useEffect, useState } from "react";
import { getAllNotes, deleteNote, editNote } from "./api";
import Home from "./pages/Home";
import { Route, Switch, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <nav>
        <li>
          <Link to="/home">HomePage</Link>
        </li>
      </nav>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
