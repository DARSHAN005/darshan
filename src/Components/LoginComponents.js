
import React, { useState, useEffect } from "react";

import "./LoginComponents.css";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import UserService from "../Services/UserService";

import axios from "axios";

export function LoginComponents() {

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [database, setDatabase] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:8096/onlinesweetmart-user/getusers/all')
  //     .then(res => {
  //       console.log(res)
  //       setDatabase(res.data)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }, [])

  useEffect(() => {
    UserService.getUsers().then((response) => {
      console.log(response)
      setDatabase(response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])




  const errors = {
    uname: "invalid username ",
    pass: "invalid  password"

  };


  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];



    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    console.log(userData1)
    var userData1 = '';

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        if (userData.type == 'Admin') {
          setIsSubmitted(true);
          userData1 = history.push({
            pathname: '/adminhome',
            nm: userData,
          });
        } else {

          setIsSubmitted(true);
          userData1 = history.push({
            pathname: '/home',
            nm: userData,
          });
        }
      }
    }
    else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };


  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const history = useHistory();
  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (

    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {
          isSubmitted ? this.userData1 : renderForm
        }
        <Link to="/Register">!...New User ? please click to sign up...!</Link>
      </div>
    </div>
  );

}
export default LoginComponents;

