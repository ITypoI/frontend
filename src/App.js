import React, { Fragment } from "react";
import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import TypingPage from "./Components/TypingPage/TypingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeaderBoard from "./Components/LeaderBoard/LeaderBoard";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>} />
          <Route path="/typo" element={<TypingPage></TypingPage>} />
          <Route path="/leaderboard" element={<LeaderBoard></LeaderBoard>} />
        </Routes>
      </BrowserRouter>
      {/* <LeaderBoard></LeaderBoard> */}
    </Fragment>
  );
}

export default App;
