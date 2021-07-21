import React, {useEffect, useState} from "react";
import { useHistory,NavLink } from 'react-router-dom';

import "./header.css";

const Header = () => {
  const history = useHistory();

  const [scrollBarName, setScrollBarName] = useState("noscroll")

  const onNavigation = (url) =>{
    window.scrollTo(0, 0);
    history.push(`/${url}`);
  }
  function handleScroll() {
    const scrollTop = (document.documentElement
      && document.documentElement.scrollTop)
      || document.body.scrollTop;
      // console.log(scrollTop);
      if(scrollTop>200){
        // console.log(scrollTop,'in', scrollBarName);
         setScrollBarName('scroll');
      } else {
        // console.log(scrollTop,'out', scrollBarName);
        setScrollBarName('noscroll');
      }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);
 
console.log(scrollBarName,'scrollBarName');
  return (
  <div >
    <div class="row mx-0 py-3">
      <div class="col-1 ">
        <img class="w-100" src="./images/gps-logo-300x200.png" alt=" " />
      </div>
      <div class="col ">
      <div class="row mx-0">
        <div class="col-12">
          <h3 class="m-0">GPS – Global Partner Success Portal</h3>
        </div>
        <div class="col-12 nav-menu">
          <a href="">Home</a>
          <a href="">Meet The Team</a>
          <a href="">Explore GPS</a>
          <a href="">Our Delivery Partners</a>
          <a href="">Tools and Resources</a>
          <a href="">Reporting</a>
          <a href="">Calendar</a>
        </div>
      </div>
      </div>
    </div>
  </div>
  );
};

export default Header;
