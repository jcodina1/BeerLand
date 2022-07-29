import React from "react";
import { Link } from "react-router-dom";
import style from '../LandingPage/LandingModal.module.css'
import beertest from '../../img/beertest.png'

export default function Modal({ closeModal }) {
  return (
    <div className={style.box}>
      <div className={style.close}>
        <button className={style.closebtn} onClick={() => closeModal(false)}> X </button>
      </div>

      <div className={style.modalcontainer}>
        <div className={style.content}>
          <img className={style.image} src={beertest} alt='beercharacter' />
          <div className={style.intro}>
            <span className={style.title}>Are You Over 18?</span>


            <div className={style.body}>
              <p>Next page is adults only!</p>
            </div>
            <div className={style.footer}>
              <Link to="/home">
                <button className={style.button} type="button">Yes, I'm Over 18!</button>
              </Link>
              <button className={style.button} onClick={() => closeModal(false)}>No, I'm under 18</button>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
