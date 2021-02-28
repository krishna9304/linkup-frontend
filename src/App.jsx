import React from "react";
import Homepage from "./pages/homepage";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
