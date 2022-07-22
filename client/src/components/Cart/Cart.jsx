import React, { useState } from "react";
import style from '../Cart/Cart.module.css'
import { Link } from "react-router-dom";


export default function Cart() {
  const [checkout, setCheckout] = useState(false)
  const cantidad = Math.floor(Math.random() * 15) + 1
  const products = [
    {
      "name": "Stella Artois",
      "description": "Pack Cerveza Premium Lager",
      "price": "8290",
      "stock": 102,
      "image": "https://firebasestorage.googleapis.com/v0/b/beerland-42137.appspot.com/o/cervezas%2Fimage0.jpg?alt=media&token=12b41f5b-56ae-4e3a-9958-e1d4540aba32",
      "sellerId": 14
    },
    {
      "name": "Budweiser",
      "description": "Pack Cerveza Lager",
      "price": "7390",
      "stock": 53,
      "image": "https://firebasestorage.googleapis.com/v0/b/beerland-42137.appspot.com/o/cervezas%2Fimage1.jpg?alt=media&token=12b41f5b-56ae-4e3a-9958-e1d4540aba32",
      "sellerId": 6
    },
    {
      "name": "Royal Guard",
      "description": "Pack 18 Cervezas Latas 350 cc c/u",
      "price": "7790",
      "stock": 120,
      "image": "https://firebasestorage.googleapis.com/v0/b/beerland-42137.appspot.com/o/cervezas%2Fimage2.jpg?alt=media&token=12b41f5b-56ae-4e3a-9958-e1d4540aba32",
      "sellerId": 14
    },
    {
      "name": "Sol",
      "description": "Pack Cervezas",
      "price": "3990",
      "stock": 141,
      "image": "https://firebasestorage.googleapis.com/v0/b/beerland-42137.appspot.com/o/cervezas%2Fimage3.jpg?alt=media&token=12b41f5b-56ae-4e3a-9958-e1d4540aba32",
      "sellerId": 2
    },
    {
      "name": "Stella Artois",
      "description": "Pack Cerveza Premium Lager",
      "price": "3790",
      "stock": 15,
      "image": "https://firebasestorage.googleapis.com/v0/b/beerland-42137.appspot.com/o/cervezas%2Fimage4.jpg?alt=media&token=12b41f5b-56ae-4e3a-9958-e1d4540aba32",
      "sellerId": 6
    }]

  return (
    <>
      <div className={style.conteiner}>
        <div className={style.containerTitle}>
          <h1 className={style.title}> Cart X🅱🅴🅴🆁🅻🅰🅽🅳 ( ͡❛ ͜ʖ ͡❛) Products</h1>
          <Link to='/home'>Continue Shopping</Link>
        </div>
        <div className={style.containerProducts}>
          <div className={style.boxend}>🛒CheckOut</div>
          {
            products.map(e => <>
              <div className={style.info}>
                <img src={e.image} />
                <span>{e.name}</span>
                <span>{e.price}</span>
                <span>Total: {cantidad * Number(e.price)}</span>
                <div className={style.editDelete}>
                  <span>✏️</span>
                  <span>❌</span>
                </div>
              </div>
            </>)
          }
        </div>
      </div>
    </>

  );


}
