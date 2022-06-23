import React from "react";
import useForm from "./useForm";
import validation from "./validation";
import { Navigate, useNavigate } from "react-router-dom";
import "./FormSignUp.css";
import Navbar from "../Navbar/Navbar";

const FormSignUp = () => {
  const navigate = useNavigate();
  const { handleChange, values, handleSubmit, errors } = useForm(validation);
  return (
    <div>
      <Navbar></Navbar>
      <form action="" onSubmit={handleSubmit} className="signup-form-container">
        <h1>Register</h1>
        <div className="form-inputs">
          <input
            id="username"
            type="text"
            name="username"
            className="form-input"
            placeholder="Username"
            autoComplete="off"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <input
            id="email"
            type="text"
            name="email"
            className="form-input"
            placeholder="Email"
            autoComplete="off"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Password"
            autoComplete="off"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <input
            id="password2"
            type="password"
            name="password2"
            className="form-input"
            placeholder="Confirm Password"
            autoComplete="off"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className="pushable" type="submit">
          <span className="front">Sign Up</span>
        </button>
        <div className="LoginFormLink">
          <h3>
            Already have an account ? &nbsp;
            <span>
              <a
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </a>
            </span>
          </h3>
        </div>
      </form>
    </div>
  );
};

export default FormSignUp;
