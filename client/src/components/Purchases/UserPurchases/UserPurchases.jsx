import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles.module.css";
import { getPurchasesByUserId, getSalesBySellerId, getUser } from "../../../redux/actions";
import Modal from "../../Modal/Modal"
import { useAuth } from "../../Context/Contestautenticacion";
import { useModals } from "../../../Hooks/useModals";


export default function UserPurchases() {
  const user2 = useSelector((state) => state.user)
  const seller = useSelector((state) => state.allSellers)
  const userPurchases = useSelector(state => state.userPurchases);
  const [isOpenModal, openModal, closeModal] = useModals(false);

    const { user } = useAuth();
    const dispatch = useDispatch()
    let currentUser;
    let currentSeller



    if (user !== null ) {
      if(user.rol==="user"){
        currentUser = user2?.filter((e) => e.email === user.email);
    }else {
      currentSeller = seller?.filter((e) => e.mail === user.email);
  }
}

  useEffect(() => {
    dispatch(getUser())
    if (user !== null) {
      if(user.rol==="user") { dispatch(getPurchasesByUserId(currentUser[0].id))}
      else  {dispatch(getSalesBySellerId(currentSeller[0].id))}
    }
  }, [user]);
  // console.log(user)
  // console.log(user2)
  // console.log(currentUser)

  //me traje un dato del endpoint para trabajarlo sin andar pinchando la api, pa dejarlo funcionando es cosa de descomentar lo de arriba
  // y cambiar el json por el selector

console.log(currentSeller)
  let i=1
 
  return (
    <div className={styles.purchasesWrapper}>
      <p>Hey! These are your purchases</p>
      {userPurchases?.map((purchase) => {
        return (
          <div key={purchase.id} className={styles.purchaseContainer}>
            <p>Purchase n°{i++}</p>
            <button onClick={openModal} >
            Ver detalle de la compra.
          </button>
            <Modal isOpen={isOpenModal} closeModal={closeModal}>
            <> Beers:{" "}
            {purchase.beers.map((beer, index) => {
              return <p key={index}> {beer.name} </p>;
            })}
            <p>Total: {purchase.totalPrice}</p>
            <p>Status: {purchase.status} </p></>
            </Modal>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
