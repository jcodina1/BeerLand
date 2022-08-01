import React, { useState, useEffect } from "react";
import style from "../Cart/Cart.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeAllFromCart,
  getCart,
  totalPrice,
  infoBeers,
  addToCart,
} from "../../redux/actions/index";
import Item from "../Item/Item.jsx";
import Footer from "../Footer/Footer.jsx";
import BeerLogo from "../../img/BeerLogo.png";

export default function Cart() {
  const [checkout, setCheckout] = useState(false);
  const cantidad = Math.floor(Math.random() * 15) + 1;

  const dispatch = useDispatch();
  const beerCarts = useSelector((state) => state.cart);
  let localstorage = JSON.parse(localStorage.getItem("carrito"));
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("carrito"))
  );
  const [del, setDel] = useState(true);
  const [add, setAdd] = useState(false);

  const checkoutinfo = JSON.parse(localStorage.getItem("carrito"));
  let precio = checkoutinfo.map((e) => e.cant * e.price);
  let preciototal = precio.reduce(function (a, b) {
    return a + b;
  }, 0);
  preciototal = Number(preciototal.toFixed(2));

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
    localStorage.setItem("carrito", JSON.stringify(newBeers));
    localStorage.setItem("carrito", JSON.stringify(newBeers));
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


    if (firstItems.length) {
      let priceTotal = firstItems?.reduce(function (a, b) {
        return a + b;
      }, 0);
      let beerInfo = localstorage;
      dispatch(totalPrice(priceTotal));
      dispatch(infoBeers(beerInfo));

    } else {
      let pricesTotal = newItems?.reduce(function (a, b) {
        return a + b;
      }, 0);
      let beerInfo = localstorage;
      dispatch(totalPrice(pricesTotal));
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
    <div className={style.cartContainer}>
      <div className={style.header}>
        <Link to="/home">
          <img className={style.logo} id="BeerLogo" src={BeerLogo} alt="Beer" />
        </Link>
        <h1 className={style.h1}>Cart</h1>
        <Link to="/home" className={style.link}>
          <p className={style.keep}>Keep Shopping</p>
        </Link>
      </div>
      <div className={style.cart}>
        {JSON.parse(localStorage.getItem("carrito"))?.length ? (
          <div className={style.items}>
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
            <div>
              <h1 className={style.boxend}>TOTAL: ${preciototal} </h1>
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
      <div className={style.checkout}>
        <Link to="/checkout" className={style.link}>
          <p className={style.check2}>Checkout</p>
        </Link>
      </div>
    </div>
  );
}
