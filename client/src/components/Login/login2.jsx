import React from "react";
import { useState } from "react";
import  style from "../Login/Login.module.css";
import swal from "sweetalert";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../Context/Contestautenticacion";
import beertest from "../../img/beertest.png";
import googleLogo from "../../img/googleLogin.png";
import facebookLogo from "../../img/facebookLogin.png";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { app } from "../../firebase";
import { postUser } from "../../redux/actions";
import { useDispatch } from "react-redux";
import "./Login.css"

export function Login() {
  const dispatch = useDispatch();
  const firestore = getFirestore(app);
  const history = useHistory();
  const { login, logingWithGoogle, resetPassword, logingWithFacebook } =
    useAuth();

  const [error, setError] = useState("");
  const [user, SetUser] = useState({
    email: "",
    password: "",
    rol: "user",
  });

  //     function verifica_seleccion(check){
  //         if(!check.checked){
  //             check.checked=1;
  //         }
  //     }

  const handleChange = (e) => {
    SetUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(user.email, user.password);
      history.push("/home");
    } catch (error) {
      setError(error.message);
      swal(error.message);
    }
  };

  const handleGoogle = async () => {
    try {
      const google = await logingWithGoogle().then((usuarioGoogle) => {
        return usuarioGoogle;
      });
      const user2 = {
        email: google.user.email,
        name: google._tokenResponse.firstName,
        surname: google._tokenResponse.lastName,
        address: "",
        rol: "user",
        image:google._tokenResponse.photoUrl
      };
      const docuRef = doc(firestore, `usuarios/${google.user.uid}`);
      setDoc(docuRef, {
        email: user2.email,
        name: google._tokenResponse.firstName,
        surname: google._tokenResponse.lastName,
        user: user.rol,
        login: "google",
        image:google._tokenResponse.photoUrl
      });
      dispatch(postUser(user2));

      //   dispatch(postUser(userdata))
      history.push("/home");
    } catch (error) {
      setError(error.message);
      swal(error.message);
    }
  };

  const handelResetPassword = async () => {
    if (!user.email) return swal("please enter your mail");
    try {
      await resetPassword(user.email);
      swal("We sent you an mail with a link to reset you password");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleFacebook = async () => {
    try {
      const facebook = await logingWithFacebook().then((usuarioFacebook) => {
        return usuarioFacebook;
      });

      const docuRef = doc(firestore, `usuarios/${facebook.user.uid}`);
      setDoc(docuRef, { email: user.email, user: user.rol });

      //   dispatch(postUser(userdata))
      history.push("/home");
    } catch (error) {
      setError(error.message);
      swal(error.message);
    }
  };

  return (
    // <div className={style.login}>
      <div className={style.stop} >
        {/* <img className={style.image} src={beertest} alt="beercharacter" /> */}

        
          <form className={style.LoginForm}>
            <h1>Login</h1>
            <div className={style.fieldLog}>
              
              <input
                name="email"
                type="email"
                placeholder="E-mail"
                onChange={handleChange}
              />
            </div>

            <div className={style.fieldLog}>
             
              <input
                name="password"
                type="password"
                id="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <div className={style.submit}>
              <button className={style.button} onClick={handleSubmit}>
                Login
              </button>
            </div>
           
            <a href="#!" onClick={(e) => handelResetPassword(e)}>
              Forgot Password
            </a>
          </form>
            <label className={style.footer}>Don't have an Account?</label>

            <div>
            <Link to="/register">
              <button className={style.button}>Register</button>
            </Link>
            </div>
          <div className={style.footer}>
            <div className={style.registerbox}>
              
              <div>
                <Link to="/login">
                  <span>
                    <img
                      className={style.facebookIcon}
                      id="GoogleLogo"
                      src={facebookLogo}
                      onClick={(e) => handleFacebook(e)}
                      alt="Beer"
                    />
                  </span>
                </Link>
                {/* <button className={style.googleIcon} onClick={handleGoogle}>Google Login</button> */}
              </div>
              <div>
                
                {/* <Link to="/login"> */}
                  <span>
                    <img
                      className={style.googleIcon}
                      id="GoogleLogo"
                      src={googleLogo}
                      onClick={handleGoogle}
                      alt="Beer"
                    />
                  </span>
                {/* </Link> */}
                {/* <button className={style.googleIcon} onClick={handleGoogle}>Google Login</button>  */}
              </div>
            </div>
            
          </div>
        
        
      {/* </div> */}
    </div>
  );
}
