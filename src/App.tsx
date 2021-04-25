import React from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "./pages/auth/auth"
import Main from "./pages/main/main"
import Reg from "./pages/registartion/registartion"
import './App.css';
// import ClassComponent from "./classComponent"

function App() {
  return (
    <>
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/main" component={Main} />
        <Route path="/reg" component={Reg} />
      </Switch>
    </>
  );
}

export default App;
