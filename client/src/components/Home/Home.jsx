import { React, useState, useEffect } from "react";
/* import { useDispatch, useSelector } from "react-redux"; */
import NavBar from "../NavBar/NavBar";
import ShowBeers from '../ShowBeers/ShowBeers'
import style from '../Home/Home.module.css'
import Footer from '../Footer/Footer'
import { useAuth } from "../context/contestautenticacion";

export default function Home() {

  return (
    <div className={style.homeContainer}>
      <div>
        <NavBar />
      </div>
      <div >
        <ShowBeers />
      </div>
      <div>
        <Footer />
      </div>
    </div>

  );
}
