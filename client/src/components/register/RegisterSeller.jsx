import React, { useReducer, useState } from "react";
import { useAuth } from "../Context/Contestautenticacion";
import { useHistory } from "react-router-dom";
import reg from "./Registers.module.css";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postSeller } from "../../redux/actions";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { app } from "../../firebase";
import googleLogo from "../../img/googleLogin.png";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function RegisterSeller() {
  const dispatch = useDispatch();

  const firestore = getFirestore(app);
  const { signup, logingWithGoogle } = useAuth();
  const history = useHistory();
  const [error, setError] = useState("");

  const [user, SetUser] = useState({
    name: "",
    description: "",
    dni: "",
    mail: "",
    password: "",
    confirmation: "",
    rol: "admin",
  });

  const handleChange = (e) => {
    SetUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // const handleGoogle = async () => {
  //   try {
  //     const google = await logingWithGoogle().then((usuarioGoogle) => {
  //       return usuarioGoogle;
  //     });

  //     const user2 = {
  //       mail: google.user.email,
  //       name: google._tokenResponse.firstName,
  //       surname: google._tokenResponse.lastName,
  //       description: "",
  //       dni: 0,
  //       rol: "admin",
  //     };

  //     const docuRef = doc(firestore, `usuarios/${google.user.uid}`);
  //     setDoc(docuRef, {
  //       email: user2.mail,
  //       name: user2.name,
  //       surname: user2.surname,
  //       user: user2.rol,
  //       login: "google",
  //     });
  //     dispatch(postSeller(user2));
  //     history.push("/home");
  //   } catch (error) {
  //     setError(error.message);
  //     swal(error.message);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (user.password === user.confirmation) {
        await signup(user.mail, user.password, user.rol);
        dispatch(postSeller(user));

        history.push("/home");
      } else {
        swal("Passwords do not match");
      }
    } catch (error) {
      setError(error.message);
      swal(error.message);
    }
  };

  return (
<>
    <div className={reg.navBar}>
      <NavBar/>
    </div>
    
<div className={reg.container}>
    <div className={reg.RegisterForm}>
     
      <form style={{ display: 'flex', justifyContent: 'center', flexDirection:'column'}}>
      
      <div className={reg.contactInfo}>
        <h1 style={{ textAlign: 'center', margin: '0', color:"rgb(35,20,10)" }}>Sign In</h1>
        
        <div className={reg.description}>
          <label>Name: </label>
          <input
            className={reg.otromas}
            name="name"
            type="name"
            placeholder="youremail@company.com"
            onChange={handleChange}
            />
        </div>

        <div className={reg.description}>
          <label>Description: </label>
          <input
            className={reg.otromas}
            name="description"
            type="description"
            placeholder="youremail@company.com"
            onChange={handleChange}
            />
        </div>

        <div className={reg.description}>
          <label>Dni: </label>
          <input
            className={reg.otromas}
            name="dni"
            type="number"
            placeholder="youremail@company.com"
            onChange={handleChange}
            />
        </div>

        <div className={reg.description}>
          <label>Email: </label>
          <input
            className={reg.otromas}
            name="mail"
            type="email"
            placeholder="youremail@company.com"
            onChange={handleChange}
            />
        </div>

        <div className={reg.description}>
          <label>Password: </label>
          <input
            className={reg.otromas}
            name="password"
            type="password"
            id="password"
            placeholder="password"
            onChange={handleChange}
            />
        </div>

        <div className={reg.description}>
          <label>Confirmation: </label>
          <input
             className={reg.otromas}
            name="confirmation"
            type="password"
            id="confirmation"
            placeholder="confirmation"
            onChange={handleChange}
            />
        </div>
        <button className={reg.minimize} onClick={handleSubmit}>
          Register
        </button>
      <Link className={reg.textde} to="/home">
        <button className={reg.minimize}>Return</button>
      </Link>
        </div>
      </form>
    </div>
</div>
<Footer></Footer>
                </>
  );
}
