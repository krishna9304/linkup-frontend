import React from "react";
import Homepage from "./pages/homepage";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Feed from "./pages/feed";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/login" exact>
            <Feed />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
