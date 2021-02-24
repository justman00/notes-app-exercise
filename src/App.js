import React from "react";
import { Route, Switch } from "react-router-dom";

import CreateBar from "./components/CreateBar";
import Notes from "./components/Notes";

import "./App.css";

function App() {
  return (
    <div className="App">
      <CreateBar />
      <Switch>
        <Route path="/" component={Notes} />
      </Switch>
    </div>
  );
}

export default App;
