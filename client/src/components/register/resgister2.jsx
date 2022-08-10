import React from "react";
import { useState } from "react";
import style from "./Registers.module.css";
import swal from "sweetalert";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../Context/Contestautenticacion";
import { postUser } from "../../redux/actions";
import NavBar from "../NavBar/NavBar";
import { useDispatch } from "react-redux";
import Footer from "../Footer/Footer";


export function Register() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { signup } = useAuth();

  const [error, setError] = useState("");
  const [user, SetUser] = useState({
    email: "",
    password: "",
    confirmation: "",
    name: "",
    surname: "",
    address: "",
    rol: "user",
  });



  const handleChange = (e) => {
    SetUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(user.email, user.password, user.rol);
      dispatch(postUser(user));
    } catch (error) {
      setError(error.message);
      swal(error.message);
    }
  };



  return (
    <>
      <div className={style.navBar}>
            <NavBar/>
      </div>
  
    <div className={style.container}>
      <div className={style.RegisterForm}>

      <form style={{ display: 'flex', justifyContent: 'center', flexDirection:'column'}}>
        
        <div className={style.contactInfo}>
        <h1 style={{ textAlign: 'center', margin: '0', color:"rgb(35,20,10)"  }}>Sign In</h1>
        <div className={style.description}>
          <label>Name: </label>
          <input
            className={style.otromas}
            name="name"
            type="name"
            placeholder="Name"
            onChange={handleChange}
          />
        </div>

        <div className={style.description}>
          <label>Last Name: </label>
          <input
           className={style.otromas}
            name="surname"
            type="surname"
            placeholder="Last Name"
            onChange={handleChange}
          />
        </div>

        <div className={style.description}>
          <label>Address: </label>
          <input
            className={style.otromas}
            name="address"
            type="address"
            placeholder="Address"
            onChange={handleChange}
          />
        </div>

        <div className={style.description}>
          <label>Email: </label>
          <input
            className={style.otromas}
            name="email"
            type="email"
            placeholder="youremail@company.com"
            onChange={handleChange}
          />
        </div>

        <div className={style.description}>
          <label>Password: </label>
          <input
           className={style.otromas}
            name="password"
            type="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>

        <div className={style.description}>
          <label>Confirmation: </label>
          <input
            className={style.otromas}
            name="confirmation"
            type="password"
            id="confirmation"
            placeholder="Confirmation"
            onChange={handleChange}
          />
        </div>


      
      <div className={style.descriptionS}>
        <button className={style.minimize} onClick={handleSubmit}>Sign In</button>
      </div>
    

      <div>
       
        <Link className={style.textde} to="/registerCompany">
          <div className={style.descriptionS}>
            <label>Register as a company </label>
          </div>
          
        </Link>
      </div>
      <div>
        <Link className={style.textde} to="/home">
        <div className={style.descriptionS}>
            <button className={style.minimize}>Return</button>
          </div>
        </Link>
      </div>



        </div>

      </form>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}
