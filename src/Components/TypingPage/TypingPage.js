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
  const [currCharIndex, setCurrCharIndex] = useState(-1);
  const [currChar, setCurrChar] = useState("");
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  useEffect(() => {
    setWords(generateWords());
  }, []);

  const generateWords = () => {
    return new Array(NUM_OF_WORDS).fill(null).map(() => randomWords());
  };

  // const output = words.split("");
  const handleKeyDown = ({ keyCode, key }) => {
    // space bar
    if (keyCode === 32) {
      checkMatch();
      setCurrInput("");
      if (currCharIndex > -1) setCurrWordIndex(currWordIndex + 1);
      setCurrCharIndex(-1);
      // backspace
    } else if (keyCode === 8) {
      if (currCharIndex > -1) setCurrCharIndex(currCharIndex - 1);
      setCurrChar("");
    } else {
      setCurrCharIndex(currCharIndex + 1);
      setCurrChar(key);
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

  const getCharClass = (wordIdx, charIdx, char) => {
    if (wordIdx === currWordIndex && charIdx === currCharIndex && currChar) {
      if (char === currChar) {
        return "has-success";
      } else {
        return "has-failed";
      }
    } else return "";
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
                <span key={idx} className={getCharClass(i, idx, char)}>
                  <span>{char}</span>
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
