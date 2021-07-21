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
  <div >header </div>
  );
};

export default Header;
