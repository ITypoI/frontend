import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Navbar></Navbar>
      <form
        action=""
        className="login-form-container"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1>Login</h1>
        <div>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="pushable" type="submit">
          <span className="front">Sign in</span>
        </button>
        <div className="SignUpFormLink">
          <h3>
            New to typo ? &nbsp;
            <span>
              <a
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign up
              </a>
            </span>
          </h3>
        </div>
      </form>
    </>
  );
}

export default LoginPage;
