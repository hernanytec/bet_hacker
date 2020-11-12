import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SettingsPage from "./settings";
import ProjectsPage from "./projects";
import BookmakersPage from "./Bookmakers";
import SportsPage from "./Sports";
import ZoomPage from "./Zoom";
import OpportunitiesPage from "./Opportunities";
import PercentPage from "./Percent";


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Bookmakers">
          <BookmakersPage />
        </Route>
        
        <Route path="/projects">
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
        
        <Route path="/percent">
          <PercentPage />
        </Route>
        
        <Route path="/">
          <OpportunitiesPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
