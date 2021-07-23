import React from 'react';
import './meet-team.css';
import { SiteBanner } from '../section'

const Home = () => {
  const bannerData = {
    "image":"./images/bg-meet-team.jpg",
    "title":"Welcome to Global Partner Success",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  }
    return (
        <div>
          <SiteBanner bannerData={bannerData} />
        </div>
    );
}

export default Home;
