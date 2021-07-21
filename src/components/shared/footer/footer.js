import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./footer.css";

function Footer(props) {
  const history = useHistory();
  const onNavigation = (url) => {
    window.scrollTo(0, 0);
    history.push(`/${url}`);
  };

  return (
    <div>footer </div>
  );
}

export default Footer;
