import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Event from "./Pages/Pages_event/event.jsx";
import LoadEvent from "./Pages/Pages_load_post/load_event_params.jsx";
import LandingPage from "./Pages/pages_landing_page/landing_page.jsx";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Event} exact />
          <Route path="/load_event/:id" component={LoadEvent} exact />
          <Route path="/landing_page/" component={LandingPage} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
