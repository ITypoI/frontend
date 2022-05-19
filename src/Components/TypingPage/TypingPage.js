import React from "react";
import "../LandingPage/LandingPage.css";
import "./TypingPage.css";
import { Fade } from "react-reveal";

const TypingPage = () => {
  return (
    <div className="mainDiv">
      <Fade right={100}>
        <h1>Mein Keyboard hu {React.version}</h1>
      </Fade>
    </div>
  );
};

export default TypingPage;
