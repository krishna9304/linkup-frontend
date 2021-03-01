import React from "react";
import Homepage from "./pages/homepage";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Feed from "./pages/feed";
import AuthPage from "./pages/authPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/login" exact>
            <AuthPage auth />
          </Route>
          <Route path="/signup" exact>
            <AuthPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
