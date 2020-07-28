import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import logo from "./logo.svg";
// import "./App.css";
import Event from "./Pages/Pages_event/event.jsx";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Event} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
