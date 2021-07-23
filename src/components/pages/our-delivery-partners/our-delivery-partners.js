import React from 'react';
import { SiteInnerBannerOne } from '../section'

const OurDeliveryPartners = () => {
  const bannerData = {
    "image":"./images/Our-Delivery-Partners.jpg",
    "title":"Our Delivery Partners",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  }
    return (
        <div>
          <SiteInnerBannerOne bannerData={bannerData} />
        </div>
    );
}

export default OurDeliveryPartners;
