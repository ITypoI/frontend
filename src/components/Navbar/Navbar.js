import React, { useEffect, useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { VscGlobe } from "react-icons/vsc";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { HiOutlineUser } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [text, setText] = useState("");
  const [iconcolor, seticoncolor] = useState("#9a9a9a");
  const navigate = useNavigate();
  const path = window.location.pathname;
  useEffect(() => {
    if (path === "/leaderboard") seticoncolor("#b9e04c");
    else seticoncolor("#9a9a9a");
  }, [path]);

  return (
    <div className="main-nav">
      <div className="typo-icon">
        <img
          onClick={() => navigate("/")}
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
          style={{ color: `${iconcolor}` }}
          onMouseEnter={() => {
            seticoncolor("#b9e04c");
            setText("Leaderboard");
          }}
          onMouseLeave={() => {
            if (path === "/") seticoncolor("#9a9a9a");
            setText("");
          }}
          onClick={() => {
            if (path === "/leaderboard") {
              navigate("/typo");
            } else {
              navigate("/leaderboard");
            }

            setText("");
          }}
          className="nav-icons"
          src="./Navbaricons/world.svg"
          alt="world icon"
        />

        <AiOutlineInfoCircle
          onMouseEnter={() => {
            setText("About");
          }}
          onMouseLeave={() => {
            setText("");
          }}
          className="nav-icons"
          src="./Navbaricons/info.svg"
          alt="info icon"
        />
        <FiSettings
          onMouseEnter={() => {
            setText("Settings");
          }}
          onMouseLeave={() => {
            setText("");
          }}
          className="nav-icons"
          src="./Navbaricons/settings.svg"
          alt="settings icon"
        />
        <HiOutlineUser
          onMouseEnter={() => {
            setText("Username@101");
          }}
          onMouseLeave={() => {
            setText("");
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
