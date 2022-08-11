import React from "react";
import { Link } from "react-router-dom";
import "./AgeRestriction.css"
import beertest from '../../img/beertest.png'
import Modal from "../Modal/Modal.jsx";
import { useModals } from "../../Hooks/useModals";
import Stop from "../../img/Stop.png"


export default function AgeRestriction() {
  const [isOpenModal, openModal, closeModal] = useModals(false);


  return (     
          
          <div className="container">
            <img src={Stop} alt="" />
            <h2>Are You Over 18?</h2>
            <div>
              <p>Next page is adults only!</p>
            </div>
            <div>
              <Link to="/promoPage">
                <button type="button">Yes, I'm Over 18!</button>
              </Link>
              <button onClick={() => closeModal(false)}>No, I'm under 18</button>
            </div>
          </div>
       
     
   
  );
}
