import React, { useReducer, useState } from "react";
// import { useAuth } from "../context/authContext";
import { Link, useHistory } from "react-router-dom";
import style from "../Login/Login.module.css";
import swal from "sweetalert";
import NavBar from "../NavBar/NavBar";
import googleLogo from "../../img/googleLogin.png";
import facebookLogo from "../../img/facebookLogin.png";
import beertest from "../../img/beertest.png";

export function Login2() {
  // const { login, logingWithGoogle, resetPassword } = useAuth()

  const history = useHistory();
  const [error, setError] = useState("");

  const [user, SetUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    SetUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //     await login(user.email, user.password)
    //     history.push('/home')
    // } catch (error) {

    //     setError(error.message)
    //     swal(error.message)
    // }
  };

  const handleGoogle = async () => {
    // try {
    //     await logingWithGoogle()
    //     history.push('/home')
    // } catch (error) {
    //     setError(error.message)
    //     swal(error.message)
    // }
  };

  const handelResetPassword = async () => {
    // if (!user.email) return swal("please enter your mail")
    // try {
    //     await resetPassword(user.email)
    //     swal('We sent you an mail with a link to reset you password')
    // } catch (error) {
    //     setError(error.message)
    // }
  };

  return (
    <div className={style.login}>
      <div className={style.loginBox}>
        <img className={style.image} src={beertest} alt="beercharacter" />

        <div className={style.container}>
          <form>
            <h1>Login</h1>
            <div className={style.password}>
              <label>Email: </label>
              <input
                name="email"
                type="email"
                placeholder="youremail@company.com"
                onChange={handleChange}
              />
            </div>

            <div className={style.password}>
              <label>Password: </label>
              <input
                name="password"
                type="password"
                id="password"
                placeholder="******"
                onChange={handleChange}
              />
            </div>
            <div className={style.submit}>
              <button className={style.button} onClick={handleSubmit}>
                Login
              </button>
            </div>
            <a href="#!" onClick={handelResetPassword}>
              Forgot Password
            </a>
          </form>

          <div className={style.footer}>
            <label className={style.footer}>Don't have an Account</label>
            <div className={style.registerbox}>
              <div>
                <Link onClick={handleGoogle}>
                  <span>
                    <img
                      className={style.facebookIcon}
                      id="GoogleLogo"
                      src={facebookLogo}
                      alt="Beer"
                    />
                  </span>
                </Link>
                {/* <button className={style.googleIcon} onClick={handleGoogle}>Google Login</button> */}
              </div>
              <div>
                <Link onClick={handleGoogle}>
                  <span>
                    <img
                      className={style.googleIcon}
                      id="GoogleLogo"
                      src={googleLogo}
                      alt="Beer"
                    />
                  </span>
                </Link>
                {/* <button className={style.googleIcon} onClick={handleGoogle}>Google Login</button> */}
              </div>
            </div>
            <Link to="/register">
              <button className={style.button}>Register</button>
            </Link>
          </div>
        </div>
        <div className={style.buttonA}>
          <Link to="/home">
            <span className={style.buttonA}>Back</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
