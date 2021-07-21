import React from 'react';
import './home.css';

const Home = () => {
    return (
        <div>
          <section class="position-relative">
            <img className="w-100" src="./images/bg-home.jpg" alt="" />
            <div className="full-width-position-box">
              <div className="d-flex h-100 align-items-end">
                <div className="col-12 col-md-5 m-4 p-5 text-white bg-color1">
                  <h3>Welcome to the Global Partner Success Team</h3>
                  <p className="fs-20 m-0">Raising the Performance, Quality and Compliance bar to derive greater value from our suppliers, delight our customers and enhance the Service Centre brand.</p>
                </div>
              </div>
            </div>
          </section>
          <section class="position-relative bg-color2 py-3">
            <div className="d-flex align-items-stretch">
              <div className="col-12 col-md-9 px-3">
                <div className="row mb-3 mx-0  ">
                  <div className="col-12 position-relative col-md-4  bg-service-box " >
                    <div className="full-width-position-box" style={{'background-image':'url(./images/ChildCooking_Empower_CES_CCE-1.jpg)'}}>
                      <div className="d-flex h-100 align-items-end">
                        <div className="col-12 ps-5 pb-3  text-white   ">
                          <h3 className="fs-22">Explore GPS</h3>
                        </div>
                      </div>
                    </div> 
                  </div><div className="col-12 position-relative col-md-4   bg-service-box  " >
                    <div className="full-width-position-box" style={{'background-image':'url(./images/delivery-partners.jpg)'}}>
                      <div className="d-flex h-100 align-items-end">
                        <div className="col-12 ps-5 pb-3  text-white   ">
                          <h3 className="fs-22">Our delivery partners</h3>
                        </div>
                      </div>
                    </div> 
                  </div><div className="col-12 position-relative col-md-4  bg-service-box " >
                    <div className="full-width-position-box" style={{'background-image':'url(./images/image001.jpg)'}}>
                      <div className="d-flex h-100 align-items-end">
                        <div className="col-12 ps-5 pb-3  text-white   ">
                          <h3 className="fs-22">Tools and Resources</h3>
                        </div>
                      </div>
                    </div> 
                  </div>
                </div>
                <div className="row   mx-0">
                  <div className="col-12 position-relative col-md-4   bg-service-box " >
                    <div className="full-width-position-box" 
                  style={{'background-image':'url(./images/links-content-sharing-ss-1920-800x563-1.jpeg)'}}>
                      <div className="d-flex h-100 align-items-end">
                        <div className="col-12 ps-5 pb-3  text-white   ">
                          <h3 className="fs-22">Useful Links</h3>
                        </div>
                      </div>
                    </div> 
                  </div><div className="col-12 position-relative col-md-4   bg-service-box " >
                    <div className="full-width-position-box" style={{'background-image':'url(./images/PresentersReviewingCharts_Guide_CES_CCE-1.jpg)'}}>
                      <div className="d-flex h-100 align-items-end">
                        <div className="col-12 ps-5 pb-3  text-white   ">
                          <h3 className="fs-22">Business insights</h3>
                        </div>
                      </div>
                    </div> 
                  </div><div className="col-12 position-relative col-md-4   bg-service-box " >
                    <div className="full-width-position-box" style={{'background-image':'url(./images/image002.jpg)'}}>
                      <div className="d-flex h-100 align-items-end">
                        <div className="col-12 ps-5 pb-3  text-white   ">
                          <h3 className="fs-22">Our Calendar</h3>
                        </div>
                      </div>
                    </div> 
                  </div>
                </div>
               
              </div>
              <div className="col-12 col-md-3 p-3 bg-white text-center">
                <img className="col-10" src="./images/gps-logo.png" alt="" />
                <h5 className="my-4">The GPS Team</h5>
                <div className="text-left">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <button className="btn bg-color1 text-white">Meet The Team</button>
              </div>
            </div>
          </section>
          <section class="position-relative py-5">
            <div className="d-flex align-items-stretch py-5">
              <div className="col-3">
                <img class="w-100" src="./images/CES_GEOMETRIC_wheels_3_Connected.gif" alt=" " />
              </div>
              <div className="col ">
                <h3 className="my-4">Our Success Stories</h3>
                <p>We’ve got a lot going on. Why take a look at what we are up to?</p>
                <div class="row mx-0">
                  <div class="col-6">
                    <h5 className="my-4">Title of news post</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <p class="m-0 pt-5"><b>Author name</b> A new seconds ago</p>
                  </div>
                  <div class="col-6">
                    <h5 className="my-4">The GPS Team</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <p class="m-0 pt-5"><b>Author name</b> A new seconds ago</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    );
}

export default Home;
