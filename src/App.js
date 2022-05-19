import React from "react";
import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import TypingPage from "./Components/TypingPage/TypingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>} />
        <Route path="/type" element={<TypingPage></TypingPage>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
