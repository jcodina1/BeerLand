import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Modal from "./LandingModal";
import style from '../LandingPage/LandingPage.module.css'
import Modal from "../Modal/Modal.jsx";
import { useModals } from "../../Hooks/useModals";
import AgeRestriction from "./AgeRestriction";

export default function LandingPage() {
  const [isOpenModal, openModal, closeModal] = useModals(false);
  // const [openModal, setOpenModal] = useState(false);

  return (
    <div className={style.landingbox} >
      <div className={style.box}>
        <div>
          <div className={style.titleintro}>Welcome to BeerLand!!!</div>
          <button
            className={style.modalbtn}
            onClick={openModal}
          >
            Get In!
          </button>
          <Modal isOpen={isOpenModal} closeModal={closeModal}>
                <AgeRestriction />
              </Modal>
          {/* {openModal && <Modal closeModal={setOpenModal}></Modal>} */}
        </div>
      </div>
    </div>
  );
}
