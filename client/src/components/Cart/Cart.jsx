import React, { useState, useEffect } from "react";

import style from '../Cart/Cart.module.css';

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { removeAllFromCart, getCart, totalPrice, infoBeers, addToCart } from '../../redux/actions/index';
import Item from "../Item/Item.jsx";
import Footer from '../Footer/Footer.jsx'

export default function Cart() {


  const [checkout, setCheckout] = useState(false)
  const cantidad = Math.floor(Math.random() * 15) + 1
  const dispatch = useDispatch();
  const beerCarts = useSelector((state) => state.cart);
  let localstorage = JSON.parse(localStorage.getItem("carrito"))
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('carrito')));
  const [del, setDel] = useState(true);
  const [add, setAdd] = useState(false);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  function newDel() {
    setItems(localstorage);
    setDel(del ? false : true);
  }

  function handleItem(name, price, cant) {
    let newBeers = localstorage?.map((e) => {
      if (e.name === name) {
        e.cant = cant;
        e.total = cant * price;
      } else {
        if (!e.total) e.total = e.price;
      }
      return e;
    });
    localStorage.setItem("carrito", JSON.stringify(newBeers))
    console.log(newBeers);
    setItems(newBeers);
    let total = 0;
    newBeers.forEach((e) => {
      total += e.price * e.cant;
    });
    setAdd(true);
    return total;
  }

/*   function handleAddItems() {
    let newItems = localstorage?.map((e) => e?.total);
    let firstItems = localstorage?.map((e) => e.price);
    console.log("first item", firstItems)
    console.log("new item", newItems)

    if (firstItems.length) {
      let totalPrice = firstItems?.reduce(function (a, b) {
        return a + b;
      }, 0);
      let beerInfo = localstorage;
      dispatch(totalPrice(totalPrice));
      dispatch(infoBeers(beerInfo));

    } else {
      let totalPrices = newItems?.reduce(function (a, b) {
        return a + b;
      }, 0);
      let beerInfo = localstorage;
      dispatch(totalPrice(totalPrices));
      dispatch(infoBeers(beerInfo));

    }
    let precio = localstorage.map((e) => e.cant * e.price);
    let preciototal = precio.reduce(function (a, b) {
      return a + b;
    }, 0);
    return preciototal
  }

  function handleSubItems() {
    let newItems = localstorage?.map((e) => e.cant);
    return newItems.reduce(function (a, b) {
      return a + b;
    }, 0);
  } */
  
  return (
      <div className="cartContainer">
        <div className="cart">
          {JSON.parse(localStorage.getItem("carrito"))?.length ? (
            <div className="items">
              {beerCarts?.map((e) => (
                <Item
                  id={e.id}
                  name={e.name}
                  image={e.image}
                  price={e.price}
                  stock={e.stock}
                  handleItem={handleItem}
                  newDel={newDel}
                />
              ))}
{/*               <div className="subTotal">
                {
                  <ul>
                  </ul>
                }
                <h3 >
                  subTotal <span>{`(${handleSubItems()} items)`}</span>
                </h3>
                <p>${handleAddItems()},00</p>
              </div> */}
              <div className="continue subTotal">
                <Link to="/home">
                  <p className="keep">Keep Shopping</p>
                </Link>
                <Link to="/checkout">
                  <button className="checkout">Checkout</button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="empty">
              <h1>Oops, Your Cart is Empty!</h1>
              <p>Looks like you haven't added anything to your cart yet</p>
              <img src="https://jersix.com/wp-content/uploads/2020/10/Empty-pana-uai-2000x1500.png" />
            </div>
          )}
        </div>
      <div className={style.boxend}> 
        <h1>TOLTAL: </h1>
         {beerCarts
                .map((p) => parseInt(p.price))
                .reduce((prev, curr) => prev + curr)}
      </div>
      <Footer/>
    </div >
  );
}

