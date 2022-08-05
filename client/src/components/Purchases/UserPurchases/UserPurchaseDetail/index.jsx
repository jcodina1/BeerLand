import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles.module.css";
import { useModals } from "../../../../Hooks/useModals";
import ModalDetail from "../../../Purchases/ModalDetail/ModalDetail";

export default function UserPurchaseDetail({ purchase }) {
  const [mostrar, setMostrar] = useState(false)

  return (
    <div>
      <button onClick={()=>setMostrar(true)} >
        Details
      </button>
      <></>


    {mostrar===true?<div id="main-container">
        <h3>Status: {purchase.status} </h3>
        <table>
          <thead>
            <tr>
              <th>Beer</th><th>Price</th><th>Cantidad</th><th>Total</th>
            </tr>
          </thead>
          {purchase.beers.map((beer, index) =>
            <tr key={beer.name}>
              <td>{beer.name}</td>
              <td>$ {beer.price}</td>
              <td>{purchase.purchaseDetails.filter(f => f.beerId === beer.id)[0].cant}</td>
              <td>$ {purchase.purchaseDetails.filter(f => f.beerId === beer.id)[0].cant * beer.price}</td>
            </tr>
          )}
          <thead>
            <tr>
              <th></th><th></th><th>Total</th><th>$ {purchase.totalPrice}</th>
            </tr>
          </thead>

        </table>
        <button onClick={()=>setMostrar(false)}> cerrar</button>
      </div>:""}
      
    </div>
  );
}
