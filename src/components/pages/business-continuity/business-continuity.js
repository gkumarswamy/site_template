import React from 'react';
import { SiteInnerBannerOne } from '../section'

const BusinessContinuity = () => {
  const bannerData = {
    "image":"./images/business-continuity.jpg",
    "title":"Welcome to Microsoft Service Centre Business Continuity Planning portal",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  }
    return (
        <div>
          <SiteInnerBannerOne bannerData={bannerData} />
        </div>
    );
}

export default BusinessContinuity;
