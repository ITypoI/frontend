import React from "react";
import "../LandingPage/LandingPage.css";
import "./TypingPage.css";
import { Fade } from "react-reveal";
import Navbar from "../Navbar/Navbar";
import Keyboard from "../Keyboard/Keyboard";

const TypingPage = () => {
  return (
    <div className="mainDiv">
      <Navbar></Navbar>
      <Fade right={100}>
        {/* <div className="keyboard-component"> */}
        <Keyboard />
        {/* </div> */}
      </Fade>
    </div>
  );
};

export default TypingPage;
