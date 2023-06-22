import React, { useEffect, useState } from "react";
import "./login.css";

import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { useNavigate } from "react-router-dom";

import { userLogin } from "../../feature/slice/loginSlice";
import { registerUser } from "../../feature/slice/authSlice";

const Login = () => {
  const [signDetails, setsignUpDetails] = useState({
    name: "",
    password: "",
    email: "",
  });
  const [loginDetails, setLoginDetails] = useState({
    password: "",
    email: "",
  });

  const [errors, setErrors] = useState(false);

  const [user, setUser] = useState([]);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSignUpCss = () => {
    function handle() {
      document.querySelector(".cont").classList.toggle("s--signup");
    }

    handle();
  };

  const { auth } = useSelector((state) => state.auth);

  const handleSignUpDetail = (e) => {
    setsignUpDetails({
      ...signDetails,

      [e.target.name]: e.target.value,
    });
  };
  const handleLoginDetail = (e) => {
    setLoginDetails({
      ...loginDetails,

      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = () => {
    const { email, name, password } = signDetails;

    console.log("signup", email, name, password);
    dispatch(registerUser(signDetails));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/register")
      .then((response) => setUser(response.data));
  }, []);

  const handleLogin = () => {
    const { email, password } = loginDetails;
    if (
      user.find((ele) => ele.email === loginDetails.email) &&
      user.find((ele) => ele.password === loginDetails.password)
    ) {
      console.log("login successful");
      dispatch(userLogin({ email: email, password: password }));

      localStorage.setItem(
        "user",
        JSON.stringify([
          {
            email: loginDetails.email,
            password: loginDetails.password,
          },
          navigate("/"),
        ])
      );
    } else {
      setErrors(true);
    }
  };

  return (
    <div className="cont">
      <div className="form sign-in">
        <h2>Welcome</h2>
        <label>
          <span>Email</span>

          <input type="email" name="email" onChange={handleLoginDetail} />
        </label>
        <label>
          <span>Password</span>
          <input type="password" name="password" onChange={handleLoginDetail} />
        </label>
        <p className="forgot-pass">Forgot password?</p>
        <button className="button submit" type="button" onClick={handleLogin}>
          Sign In
        </button>
        {errors ? (
          <div style={{ color: "red" }}>Please Enter Valid Details</div>
        ) : (
          ""
        )}
      </div>
      <div className="sub-cont">
        <div className="img">
          <div className="img__text m--up">
            <h3>Don't have an account? Please Sign up!</h3>
          </div>
          <div className="img__text m--in">
            <h3>If you already has an account, just sign in.</h3>
          </div>
          <div className="img__btn" onClick={handleSignUpCss}>
            <span className="m--up">Sign Up</span>
            <span className="m--in">Sign In</span>
          </div>
        </div>
        <div className="form sign-up">
          <h2>Create your Account</h2>
          <label>
            <span>Name</span>
            <input type="text" name="name" onChange={handleSignUpDetail} />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="email" onChange={handleSignUpDetail} />
            <span>{errors.email ? "please enter valid email" : ""}</span>
          </label>
          <label>
            <span>Password</span>
            <input
              type="password"
              name="password"
              onChange={handleSignUpDetail}
            />
          </label>
          <button
            type="button"
            className="button submit"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
