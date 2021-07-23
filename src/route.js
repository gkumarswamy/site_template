import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import {Home, MeetTeam} from "./components/pages";
  import { SiteLayout } from "./components/shared";

const Routes = () => {
    return (
      <Switch>
        <SiteLayout path="/home" component={Home} pagename={'home'} />
        <SiteLayout path="/meet-the-team" component={MeetTeam} pagename={'meetteam'} />

        <SiteLayout path=""component={Home} pagename={'home'} />

      </Switch>
    );
}

export default Routes;
