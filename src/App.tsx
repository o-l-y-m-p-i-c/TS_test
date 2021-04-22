import React from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "./containers/auth/auth"
// import './App.css';
// import ClassComponent from "./classComponent"

function App() {
  return (
    <>
      <Switch>
        <Route path="/auth" component={Auth} />
      </Switch>
      {/* <CslassComponent data="Это я, пропс" age={42} comment="Какой-то комментарий"  /> */}
      {/* <ClassComponent data="Это я, второй пропс" age={22} comment="Какой-то второй комментарий"  /> */}
    </>
  );
}

export default App;
