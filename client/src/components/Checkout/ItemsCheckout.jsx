import React from "react";
import style from './styles.module.css'

export default function Itemscheckout({ name, image, price, cant }) {
  
  return (
      <div className={style.itemContainer}>
        <div className={style.itemBeer}>
          <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>
            <p>Quantity: {cant}</p>
            <p>Price per unit: ${price / cant}</p>
            <p>Subtotal ${price}</p>
          </div>
        </div>
        <div className="prices">
        </div>
      </div>
  );
}