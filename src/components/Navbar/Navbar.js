import React, { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { VscGlobe } from "react-icons/vsc";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { HiOutlineUser } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  return (
    <div className="main-nav">
      <div className="typo-icon">
        <img
          onClick={() => {
            navigate("/");
          }}
          className="typoicon"
          src="./Navbaricons/typoicon.svg"
          alt="typo icon"
        />
      </div>
      <div className="nav-icons-container">
        <div className="nav-icons-container-text">{text}</div>

        <BiEditAlt
          className="nav-icons"
          src="./Navbaricons/edit.svg"
          alt="edit icon"
        />
        <VscGlobe
          onClick={() => {
            setText("Leaderboard");
            navigate("/leaderboard");
          }}
          className="nav-icons"
          src="./Navbaricons/world.svg"
          alt="world icon"
        />

        <AiOutlineInfoCircle
          onClick={() => {
            setText("About");
          }}
          className="nav-icons"
          src="./Navbaricons/info.svg"
          alt="info icon"
        />
        <FiSettings
          onClick={() => {
            setText("Settings");
          }}
          className="nav-icons"
          src="./Navbaricons/settings.svg"
          alt="settings icon"
        />
        <HiOutlineUser
          onClick={() => {
            setText("Username@101");
          }}
          className="nav-icons specific-right-navicon"
          src="./Navbaricons/user.svg"
          alt="user icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
