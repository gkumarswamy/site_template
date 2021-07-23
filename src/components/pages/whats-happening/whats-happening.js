import React from 'react';
import { SiteInnerBannerOne } from '../section'

const WhatsHappening = () => {
  const bannerData = {
    "image":"./images/ChildCooking_Empower_CES_CCE-1.jpg",
    "title":"Explore GPS",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  }
    return (
        <div>
          <SiteInnerBannerOne bannerData={bannerData} />
        </div>
    );
}

export default WhatsHappening;
