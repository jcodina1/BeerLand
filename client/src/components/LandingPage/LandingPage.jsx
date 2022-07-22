import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./LandingModal";

export default function LandingPage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div>
        <div>
          <h1>Welcome to BeerLand</h1>
          <button
            className="modal-btn"
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
