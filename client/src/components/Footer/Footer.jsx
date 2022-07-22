import React from "react";
import { Link } from "react-router-dom";

import style from '../Footer/Footer.module.css'


export default function Footer() {
    return (
        <nav className={style.footer}>
            <div className={style.container}>
               <div className={style.info}>
                <Link to={"/home"} className={style.link}>TO GO TO</Link>
                <Link to={"/home"} className={style.link}>CONTACT</Link>
               </div>
               <div className={style.info}>
                <Link to={"/home"} className={style.link}>FAQ</Link>
                <Link to={"/home"} className={style.link}>ABOUT US</Link>
               </div>
               <div className={style.info}>
                <h4>ADITIONAL INFO</h4>
                <Link to={"/home"} className={style.link}>ANY SUGESTIONS</Link>
               </div>
               
            </div>
        </nav>
    )
}
