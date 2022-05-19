import React from "react";
import "./LandingPage.css";
import TypeWriterEffect from "react-typewriter-effect";
import { useEffect } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const escFunction = useCallback((event) => {
    if (event.keyCode === 13) {
      navigate("/type");
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction);

    return () => {
      document.removeEventListener("keydown", escFunction);
    };
  }, [escFunction]);

  return (
    <div className="mainDiv">
      <div className="typoHeading">
        <TypeWriterEffect
          textStyle={{
            color: "#b9e04c",
            fontSize: "90px",
          }}
          startDelay={100}
          cursorColor="#3F3D56"
          multiText={["tupo", "typo*"]}
          multiTextDelay={500}
          typeSpeed={300}
        />
      </div>
      <div className="typostart">
        <h2>
          Press <span>Enter</span> to Start
        </h2>
      </div>
    </div>
  );
};

export default LandingPage;
