import React from "react";
import style from './styles.module.css'

export default function Itemscheckout({ name, image, price, cant }) {
  
  return (
    <div className={style.itemContainer}>
      <div className={style.itemBeer}>
        <img src={image} alt={name} />
        <div className={style.itemBeer}>
          <h4>{name}</h4>
          <p>Units: {cant}</p>
          <p>Price per unit: ${(price / cant).toFixed(2)}</p>
          <p>Subtotal: ${price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}