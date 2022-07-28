import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./LandingModal";
import style from '../LandingPage/LandingPage.module.css'

export default function LandingPage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={style.landingbox} >
      <div className={style.box}>
        <div>
          <div className={style.titleintro}>Welcome to BeerLand!!!</div>
          <button
            className={style.modalbtn}
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Get In!
          </button>
          {openModal && <Modal closeModal={setOpenModal}></Modal>}
        </div>
      </div>
    </div>
  );
}
