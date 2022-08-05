import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles.module.css";
import { getPurchasesByUserId, getSalesBySellerId, getUser } from "../../../redux/actions";
import { useAuth } from "../../Context/Contestautenticacion";
import UserPurchaseDetail from './UserPurchaseDetail/index'


export default function UserPurchases() {
  const user2 = useSelector((state) => state.user)
  const seller = useSelector((state) => state.allSellers)
  const userPurchases = useSelector(state => state.userPurchases);

  const { user } = useAuth();
  const dispatch = useDispatch()
  let currentUser;
  let currentSeller;
  let currentRol;

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

  if (user !== null ) {
    if(user.rol === "user"){
      currentRol = "purchases";
    }else {
    currentRol = "sales";
    }
}

  let i=1
 
  return (
    <div className={styles.purchasesWrapper}>
      <p>Hey! These are your {currentRol}</p>
      {userPurchases?.map((purchase) => {
        return (
          <div key={purchase.id} className={styles.purchaseContainer}>
            <p>Order n°{i++}</p>
            <UserPurchaseDetail purchase={purchase}/>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
