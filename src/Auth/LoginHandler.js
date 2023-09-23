import React, { useEffect, useState } from "react";
import classes from "../UI/LoginHandler.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../Redux/AuthSlice";

const LoginHandler = () => {

  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const emailHandler = (event) => {
    //   setLoginData(prev=> prev.email=event.taget.value)
    //  console.log(loginData)
    // setLoginData({
    //   email:event.target.value
    // })

    setLoginData((prev) => {
      return { ...prev, email: event.target.value };
    });
    console.log(loginData);
  };
  const submitHandler = () => {
    console.log(JSON.stringify(loginData));
    console.log(JSON.stringify({
      email: loginData.email,
      password: loginData.password,
    }))
    fetch("http://localhost:4000/users/login", {
      method: "POST",
      body: JSON.stringify({
        email: loginData.email,
        password: loginData.password,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem('jwt', JSON.stringify(data));
        const token = JSON.parse(localStorage.getItem('jwt'));
        console.log(token);
        ;
        console.log(token);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const passwordHandler = (event) => {
    // setLoginData(prev=> prev.password=event.taget.value)
    setLoginData((prev) => {
      return { ...prev, password: event.target.value };
    });
    console.log(loginData);
  };

  return (
    <>
      <div className={classes.loginPage}>
        <div className={classes.loginHandler}>
          <h1 className={classes.welcomeTxt}>TRAIT</h1>
          <h1 className={classes.heading2}>Motivation Redefined!</h1>
          <input
            type="email"
            placeholder="Your email here"
            className={classes.inputHandler}
            onChange={emailHandler}
          ></input>
          <input
            type="password"
            placeholder="Your password here"
            className={classes.inputHandler}
            onChange={passwordHandler}
          ></input>
          <div className={classes.buttonHandler}>
            <button className={classes.login} onClick={submitHandler}>
              Login
            </button>
            <button className={classes.signUp}>Sign Up</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginHandler;
