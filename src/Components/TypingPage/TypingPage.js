import React, { useEffect, useState } from "react";
import randomWords from "random-words";
import "../LandingPage/LandingPage.css";
import "./TypingPage.css";
import { Fade } from "react-reveal";
import Navbar from "../Navbar/Navbar";
import Keyboard from "../Keyboard/Keyboard";

const TypingPage = () => {
  const NUM_OF_WORDS = 60;
  const SECONDS = 60;
  const [words, setWords] = useState([]);
  const [countDown, setCountDown] = useState(SECONDS);
  const [currInput, setCurrInput] = useState("");
  const [currWordIndex, setCurrWordIndex] = useState(0);
  const [currCharIndex, setCurrCharIndex] = useState(0);
  const [currChar, setCurrChar] = useState("");
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    setWords(generateWords());
  }, []);

  const generateWords = () => {
    return new Array(NUM_OF_WORDS).fill(null).map(() => randomWords());
  };

  const handleKeyDown = ({ keyCode, key }) => {
    // space bar
    if (keyCode === 32) {
      checkMatch();
      setCurrInput("");
      if (currCharIndex > 0) setCurrWordIndex(currWordIndex + 1);
      setCurrCharIndex(0);
      // backspace
    } else if (keyCode === 8) {
      let res = currInput.trim();
      console.log(res);
      let val = res.length;
      val--;
      if (val >= 0)
        document.getElementById(currWordIndex + "" + val).style.color =
          "#6B6B6B";
      if (val >= 0) setCurrCharIndex(val);
      else setCurrCharIndex(0);
    } else {
      checkChar(key);
      setCurrCharIndex(currCharIndex + 1);
    }
  };

  const checkMatch = () => {
    const wordToCompare = words[currWordIndex];
    const doesItMatch = wordToCompare === currInput.trim();
    if (doesItMatch) {
      setCorrect(correct + 1);
    } else {
      setIncorrect(incorrect + 1);
    }
  };

  const checkChar = (key) => {
    if (
      currCharIndex <= words[currWordIndex].length &&
      words[currWordIndex][currCharIndex] === key
    ) {
      document.getElementById(currWordIndex + "" + currCharIndex).style.color =
        "#B9E04C";
    } else if (currCharIndex <= words[currWordIndex].length) {
      document.getElementById(currWordIndex + "" + currCharIndex).style.color =
        "#ffffff";
    } else return;
  };

  return (
    <div className="mainDiv">
      <Navbar></Navbar>
      <input
        type="text"
        onKeyDown={handleKeyDown}
        value={currInput}
        onChange={(e) => setCurrInput(e.target.value)}
      />
      <div className="textBox">
        {words.map((word, i) => (
          <span key={i}>
            <span>
              {word.split("").map((char, idx) => (
                <span key={idx}>
                  <span id={i + "" + idx}>{char}</span>
                </span>
              ))}
            </span>
            <span> </span>
          </span>
        ))}
      </div>
      <Fade right>
        <Keyboard />
      </Fade>
    </div>
  );
};

export default TypingPage;
