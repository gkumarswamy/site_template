import React, {useEffect, useState} from "react";
import { useHistory,NavLink } from 'react-router-dom';

import "./header.css";

const Header = (props) => {
  console.log(props.pagename, 'pagename')
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
        <img class="w-100"  onClick={()=>{ onNavigation(''); }} src="./images/gps-logo-300x200.png" alt=" " />
      </div>
      <div class="col ">
      <div class="row mx-0">
        <div class="col-12">
          <h3 class="m-0">GPS – Global Partner Success Portal</h3>
        </div>
        <div class="col-12 nav-menu">
          <a href="javascript:void(0)" className={props.pagename=="home"?'active':''} onClick={()=>{ onNavigation(''); }}>Home</a>
          <a href="javascript:void(0)" className={props.pagename=="meet-the-team"?'active':''} onClick={()=>{ onNavigation('meet-the-team'); }}>Meet The Team</a>
          <a href="javascript:void(0)" className={props.pagename=="whats-happening"?'active':''} onClick={()=>{ onNavigation('whats-happening'); }}>Explore GPS</a>
          <a href="javascript:void(0)" className={props.pagename=="our-delivery-partners"?'active':''} onClick={()=>{ onNavigation('our-delivery-partners'); }}>Our Delivery Partners</a>
          <a  href="javascript:void(0)" className={props.pagename=="business-continuity"?'active':''} onClick={()=>{ onNavigation('business-continuity-planning'); }}>Tools and Resources</a>
          <a href="">Reporting</a>
          <a href="javascript:void(0)" className={props.pagename=="calendar"?'active':''} onClick={()=>{ onNavigation('calendar'); }}>Calendar</a>
        </div>
      </div>
      </div>
    </div>
  </div>
  );
};

export default Header;
