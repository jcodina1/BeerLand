import React from "react";

export default function Itemscheckout({ name, image, price, cant }) {
  return (
    <>
      <div className="itemContainer">
        <div className="itemBeer">
          <img src={image} alt={name} width='15%' height='15%' />
          <div>
            <h4>{name}</h4>
            <p>Quantity: {cant}</p>
            <p>Price per unit: ${price / cant}</p>
          </div>
        </div>
        <div className="prices">
          <p>Subtotal ${price}</p>
        </div>
      </div>
    </>
  );
}