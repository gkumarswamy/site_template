import React from 'react';
import { SiteInnerBannerOne } from '../section'

const Calendar = () => {
  const bannerData = {
    "image":"./images/image002.jpg",
    "title":"Calendar",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  }
    return (
        <div>
          <SiteInnerBannerOne bannerData={bannerData} />
        </div>
    );
}

export default Calendar;
