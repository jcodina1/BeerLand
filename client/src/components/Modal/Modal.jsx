import React from "react";

export default function Modal({ closeModal }) {
  return (
    <div className="overlay">
      <div className="modal-container">
        <button onClick={() => closeModal(false)}> X </button>
        <div className="title">
          <h1>Are You Over 18?</h1>
        </div>
        <div className="body">
          <p>Next page is adults only!</p>
        </div>
        <div className="footer">
          <button>Yes, I'm Over 18</button>
          <button onClick={() => closeModal(false)}>No, I'm under 18</button>
        </div>
      </div>
    </div>
  );
}
