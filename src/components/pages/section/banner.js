import React from 'react';

export default function Banner(props) {
    const objInput = props.bannerData;
    return (
        <section class="position-relative">
            <img className="w-100" src={`${objInput.image}`} alt="" />
            <div className="full-width-position-box">
              <div className="d-flex h-100 align-items-end">
                <div className="col-12 col-md-5 m-4 p-5 text-white bg-color1">
                  <h3>{objInput.title}</h3>
                  <p className="fs-20 m-0">{objInput.description}</p>
                </div>
              </div>
            </div>
          </section>
    )
}
