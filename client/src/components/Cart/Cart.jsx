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

import { useAuth } from "../Context/Contestautenticacion";
import Swal from "sweetalert2";
import NavBar from "../NavBar/NavBar";
import Container from '@mui/material/Container';

export default function Cart() {
  const [checkout, setCheckout] = useState(false);
  const cantidad = Math.floor(Math.random() * 15) + 1;
  const user2 = useSelector((state) => state.user);
  const { user } = useAuth();
  const [loggedIn, setLoggeddIn] = useState(false);
  const dispatch = useDispatch();
  const beerCarts = useSelector((state) => state.cart);
  let localstorage = JSON.parse(localStorage.getItem("carrito"));
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("carrito")));
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
  }, [user]);

  useEffect(() => {
    if (user) {
      setLoggeddIn(true)
    }
  }, [user]);
  console.log(loggedIn)

  function newDel() {
    setItems(localstorage);
    setDel(del ? false : true);
  }

  function handleCheckout() {
    if (!loggedIn) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You must login first to do this!",
      });
    }
  }

  function cartItems() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You have no items to buy!",
    });
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
    setItems(newBeers);
    let total = 0;
    newBeers.forEach((e) => {
      total += e.price * e.cant;
    });
    setAdd(true);
    return total;
  }

  return (

    <Container maxWidth='xxl' disableGutters='false'>
      <div>
        <NavBar />
      </div>
      <div className={style.tittle}>
        <h1>Cart</h1>
      </div>
      <div className={style.detailPage}>
        <Link to="/home" className={style.link}>
          <p className={style.keep}>Keep Shopping</p>
        </Link>

        <div className={style.checkoutCont}>
          <div className={style.cart}>
            <div className={style.link2}><Link className={style.link2} to="/checkout">...Checkout</Link></div>

            {JSON.parse(localStorage.getItem("carrito"))?.length ? (
              <div className={style.items}>
                {beerCarts?.map((e) => (
                  <Item
                    key={e.id}
                    id={e.id}
                    name={e.name}
                    image={e.image}
                    price={e.price}
                    stock={e.stock}
                    handleItem={handleItem}
                    newDel={newDel}
                  />
                ))}
                <div className={style.boxend}>
                  <h1 className={style.h1} >TOTAL: $ {preciototal} </h1>
                </div>
              </div>
            ) : (
              <div className="empty">
                <h1>Oops, Your Cart is Empty!</h1>
                <p>Looks like you haven't added anything to your cart yet</p>
                <img src="https://jersix.com/wp-content/uploads/2020/10/Empty-pana-uai-2000x1500.png" width='500em' />
              </div>
            )}
          </div>
        </div>


        <div className={style.checkout}>
          {
            !loggedIn ? <p className={style.check2} onClick={e => handleCheckout(e)}>Checkout</p>
              : JSON.parse(localStorage.getItem("carrito"))?.length ? <Link to="/checkout" className={style.link}>
                <p className={style.check2}>Checkout</p>
              </Link>
                : <p className={style.check2} onClick={e => cartItems(e)}>Checkout</p>
          }
        </div>
      </div>
    </Container>
  );
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
