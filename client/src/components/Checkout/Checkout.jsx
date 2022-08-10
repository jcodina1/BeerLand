import Paypal from "./PayPal/PayPal";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import Itemscheckout from "./ItemsCheckout";
import { exchangeCrypto, getCart, getUser } from "../../redux/actions";
import { useAuth } from "../Context/Contestautenticacion";
import Crypto from "./Crypto/Crypto";
import { FaEthereum } from "react-icons/fa";
import style from "../Checkout/Checkout.module.css";
import NavBar from "../NavBar/NavBar";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

export default function Checkout() {
  const dispatch = useDispatch();

  const checkoutinfo = JSON.parse(localStorage.getItem("carrito"));
  let precio = checkoutinfo.map((e) => e.cant * e.price);
  let users = useSelector((state) => state.user);
  const { user } = useAuth();
  console.log(user);
  let precioTotal = precio.reduce(function (a, b) {
    return a + b;
  }, 0);
  precioTotal = Number(precioTotal.toFixed(2));
  console.log(users);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCart());
    dispatch(exchangeCrypto());
  }, [dispatch]);

  const crypto = useSelector((state) => state.crypto);
  console.log(checkoutinfo);
  let x = precioTotal / crypto;
  let valuecrypto = x.toString();
  let val = valuecrypto.slice(0, 11);

  let currentUser;
  let userId;
  let userEmail;
  if (user !== null) {
    currentUser = users.filter((u) => u.email === user.email);
    console.log(currentUser);

    currentUser = users?.filter((u) => u.email === user.email);

    userId = currentUser[0].id;
    userEmail = currentUser[0].email;
  }

  const purchaseDetails = [];
  checkoutinfo.forEach((beer) => {
    purchaseDetails.push({
       beerId:  beer.id,
       cant:  beer.cant,
      price: beer.price,
      sellerId: beer.sellerId,
      beerName: beer.name,
     });
  });
  const beers = [];
  checkoutinfo.forEach((beer) => {
    beers.push(beer.id);
  });
  console.log(purchaseDetails);
  return (
    <Container maxWidth="xxl" disableGutters="false" >
      <div>
        <NavBar />
      </div>

      <div className={style.checkout}>
        <div className={style.detailPage}>
          <div className={style.link2}><Link className={style.link2} to="/cart">...Edit</Link></div>

          <div className={style.pay}>

            <div className={style.row2} >
              <div className={style.payInfo}>
                <h1 style={{ textAlign: "center", fontSize: "30px" }}>Order Total</h1>
                <h3 className={style.h3}>Total: ${precioTotal} </h3>
                <h3 className={style.h3}><FaEthereum />ETH: {val} </h3>
              </div>
              <div className={style.paymentCont}>
                <div >
                  <Crypto
                    email={userEmail}
                    userId={userId}
                    precioTotal={val}
                    purchaseDetails={purchaseDetails}
                  />
                  <a href="https://metamask.io/" target='_blank'><span style={{ display: 'flex', justifyContent: 'center', marginTop: '5px', marginBottom: '20px' }}> What is Metamask?</span></a>
                </div>
                <div className={style.paypal}>
                  <Paypal
                    email={userEmail}
                    userId={userId}
                    precioTotal={precioTotal}
                    purchaseDetails={purchaseDetails}
                  />
                </div>
              </div>

            </div>
            <div /* className={style.items} */>
              {checkoutinfo?.map((e) => (
                <Itemscheckout className={style.items}
                  key={e.id}
                  image={e.image}
                  name={e.name}
                  price={e.price * e.cant}
                  cant={e.cant}
                />
              ))}

            </div>


          </div>
        </div>
      </div>

      <Footer />
    </Container>
  );
}
