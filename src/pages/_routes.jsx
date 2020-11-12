import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SettingsPage from "./settings";
import ProjectsPage from "./projects";
import MembersPage from "./Bookmakers";
import SportsPage from "./Sports";
import ZoomPage from "./Zoom";
import HomePage from "./Home";
import SignIn from "./SignIn";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <SignIn />
        </Route>

        <Route path="/members">
          <MembersPage />
        </Route>
        <Route path="/bookmakers">
          <ProjectsPage />
        </Route>
        <Route path="/sports">
          <SportsPage/>
        </Route>
        <Route path="/zoom">
          <ZoomPage />
        </Route>
        <Route path="/settings">
          <SettingsPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
