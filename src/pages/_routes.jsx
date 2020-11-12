import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SettingsPage from "./settings";
import ProjectsPage from "./projects";
import BookmakersPage from "./Bookmakers";
import SportsPage from "./Sports";
import ZoomPage from "./Zoom";
<<<<<<< HEAD
import HomePage from "./Home";
import SignIn from "./SignIn";
=======
import OpportunitiesPage from "./Opportunities";
import PercentPage from "./Percent";

>>>>>>> 920956127ee5fc3d5862f8ebf62b61b06a2384c5

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
<<<<<<< HEAD
        <Route path="/login">
          <SignIn />
        </Route>

        <Route path="/members">
          <MembersPage />
=======
        <Route path="/Bookmakers">
          <BookmakersPage />
>>>>>>> 920956127ee5fc3d5862f8ebf62b61b06a2384c5
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
