import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles.module.css";
import { useModals } from "../../../../Hooks/useModals";
import ModalDetail from "../../../Purchases/ModalDetail/ModalDetail";

export default function UserPurchaseDetail({ purchase }) {
  const [isOpenModal, openModal, closeModal] = useModals(false);

  return (
    <div>
      <button onClick={openModal}>
        Details
      </button>
      <ModalDetail isOpen={isOpenModal} closeModal={closeModal}><>
        <h3>Beers:{" "}</h3>
        {purchase.beers.map((beer,index) =><p key={index}>-  {beer.name} ({purchase.purchaseDetails.filter(f=>f.beerId===beer.id)[0].cant})</p>)
        }
        <h3>Total: ${purchase.totalPrice}</h3>
        <h3>Status: {purchase.status} </h3></>
      </ModalDetail>
    </div>
  );
}
