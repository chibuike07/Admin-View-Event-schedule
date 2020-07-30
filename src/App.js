import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import logo from "./logo.svg";
// import "./App.css";
import Event from "./Pages/Pages_event/event.jsx";
import LoadEvent from "./Pages/Pages_load_post/load_event_params";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Event} exact />
          <Route path="/load_event/:id" component={LoadEvent} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
