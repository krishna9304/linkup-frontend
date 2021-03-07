import React, { createContext, useContext, useState } from "react";
import Homepage from "./pages/homepage";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Feed from "./pages/feed";
import AuthPage from "./pages/authPage";

export let AuthContext = createContext(false);

function App() {
  let [verified, setVerified] = useState(false);
  return (
    <div className="App">
      <AuthContext.Provider value={{ verified }}>
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
      </AuthContext.Provider>
    </div>
  );
}

export default App;
