import React from "react";
import Navbar from "../Navbar/Navbar";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="aboutPage_MainDiv">
      <Navbar></Navbar>
      <div className="aboutContentDiv">
        <div className="aboutPara">
          <h1>About</h1>
          <p>
            <span style={{ color: "#B9E04C" }}>Typo*</span> is a an online touch
            typing tutor where you can practice and improve your typing skills
            with a streak game of making no errors to build your score.
            <br></br>
            <br></br>
            You can start with our{" "}
            <span style={{ color: "#B9E04C" }}>characters</span> typing option
            where a random letter will be prompted on your on-screen keyboard
            which has to be pressed without looking at your keyboard and if you
            are not a beginner, you can straightway start with our default{" "}
            <span style={{ color: "#B9E04C" }}>paragraph</span> option which
            will help you to get even better with an instant check on your wpm,
            accuracy and error rate.
            <br></br>
            <br></br>
            You can easily tweak and customise all the colors of your keyboard
            or choose from our pre-made themes from the settings tab.
            <br></br>
            <br></br>
            You can enter the{" "}
            <span style={{ color: "#B9E04C" }}>leaderboard</span> race with
            other typers by signing up which will give you an additional benefit
            of analysing your past performance and growth.
            <br></br>
            <br></br>
            <br></br>
            <span style={{ color: "#CCCCCC" }}>
              Made with love by Shaunak, Pranshu and Krishan
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
