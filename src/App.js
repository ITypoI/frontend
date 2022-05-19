import React, { Fragment } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import TypingPage from "./components/TypingPage/TypingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>} />
          <Route path="/typo" element={<TypingPage></TypingPage>} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
