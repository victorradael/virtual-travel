import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingPage from "./pages/Landing";
import OrphanagesMap from "./pages/OrphanagesMap";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/app" component={OrphanagesMap} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
