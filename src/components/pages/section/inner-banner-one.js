import React from 'react';
import {} from './inner-banner-one.css';
export default function InnerBanner(props) {
    const objInput = props.bannerData;
    return (
        <section class="position-relative inner-banner-one" style={{'background-image':'url('+objInput.image+')'}}>
            <div className="full-width-position-box">
              <div className="d-flex h-100 align-items-end">
                <div className="col-12 col-md-5 px-4 pt-4 mt-1 pb-4 bg-white">
                  <div class="mx-2 mt-2">
                  <h3 className="fs-20 fw-600">{objInput.title}</h3>
                  <p className="mb-3">{objInput.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
    )
}
