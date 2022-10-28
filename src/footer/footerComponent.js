import React from "react";
import "./footer.css";
import hng from "../assets/Zuri.Internship_Logo.svg";
import I4G from "../assets/I4G.svg";

const footerComponent = () => {
  return (
    <div className="footer-container">
      <img alt="hng" src={hng} />
      <h5> HNG Internship 9 Frontend Task </h5>
      <img alt="I4G" src={I4G} />
    </div>
  );
};

export default footerComponent;
