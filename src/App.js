import React, { Fragment } from "react";
import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import TypingPage from "./Components/TypingPage/TypingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeaderBoard from "./Components/LeaderBoard/LeaderBoard";
import AboutPage from "./Components/AboutPage/AboutPage";
import SignUp from "./Components/SignUp/SignUp";
import LoginPage from "./Components/LoginPage/LoginPage";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>} />
          <Route path="/typo" element={<TypingPage></TypingPage>} />
          <Route path="/leaderboard" element={<LeaderBoard></LeaderBoard>} />
          <Route path="/about" element={<AboutPage></AboutPage>} />
          <Route path="/signup" element={<SignUp></SignUp>} />
          <Route path="/login" element={<LoginPage></LoginPage>} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
