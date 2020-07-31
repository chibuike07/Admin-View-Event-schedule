import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Event from "./Pages/Pages_event/event.jsx";
import LoadEvent from "./Pages/Pages_load_post/load_event_params.jsx";
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
