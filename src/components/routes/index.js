import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../../pages/home";
import About from "../../pages/about";

const Routes = () => {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
