import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import {Home, MeetTeam, Calendar, BusinessContinuity, WhatsHappening, OurDeliveryPartners} from "./components/pages";
  import { SiteLayout } from "./components/shared";

const Routes = () => {
    return (
      <Switch>
        <SiteLayout path="/home" component={Home} pagename={'home'} />
        <SiteLayout path="/meet-the-team" component={MeetTeam} pagename={'meet-the-team'} />
        <SiteLayout path="/calendar" component={Calendar} pagename={'calendar'} />
        <SiteLayout path="/business-continuity-planning" component={BusinessContinuity} pagename={'business-continuity'} />
        <SiteLayout path="/whats-happening" component={WhatsHappening} pagename={'whats-happening'} />
        <SiteLayout path="/our-delivery-partners" component={OurDeliveryPartners} pagename={'our-delivery-partners'} />


        <SiteLayout path=""component={Home} pagename={'home'} />

      </Switch>
    );
}

export default Routes;
