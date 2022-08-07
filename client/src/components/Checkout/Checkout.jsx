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

export default function Checkout() {
  const dispatch = useDispatch();

  const checkoutinfo = JSON.parse(localStorage.getItem("carrito"));
  let precio = checkoutinfo.map((e) => e.cant * e.price);
  let users = useSelector((state) => state.user);
  const { user } = useAuth();

  let precioTotal = precio.reduce(function (a, b) {
    return a + b;
  }, 0);
  precioTotal = Number(precioTotal.toFixed(2));

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCart());
    dispatch(exchangeCrypto())
  }, [dispatch]);

  const crypto = useSelector(state => state.crypto)

  let x = precioTotal / crypto
  let valuecrypto = x.toString()
  let val = valuecrypto.slice(0, 11)


  let currentUser;
  let userId;
  let userEmail
  if (user !== null) {
    currentUser = users.filter((u) => u.email === user.email);
    userId = currentUser[0].id;
    userEmail = currentUser[0].email
  }

  const purchaseDetails = [];
  checkoutinfo.forEach((beer) => {
    purchaseDetails.push(beer.id);
  });

  return (
    <div className="checkout">
      <div className="checkoutCont">
        <div>
          {checkoutinfo?.map((e) => (
            <Itemscheckout
              key={e.id}
              image={e.image}
              name={e.name}
              price={e.price * e.cant}
              cant={e.cant}
            />
          ))}
        </div>
        <div className="pay">
          <h1 style={{ textAlign: "center", fontSize: "30px" }}>Order Total</h1>
          <h3>Total: ${precioTotal} </h3>
          <div className="paypal">
            <Paypal
              email={userEmail}
              userId={userId}
              precioTotal={precioTotal}
              purchaseDetails={purchaseDetails}
            />
          </div>
          <div>
          <h3>USD: ${precioTotal}</h3>
          <h3>ETH <FaEthereum /> : {val} </h3>
            <Crypto
            email={userEmail}
            userId={userId}
            precioTotal={precioTotal}
            purchaseDetails={purchaseDetails}
            />
            <a href="https://metamask.io/" target='_blank'><span style={{ display: 'flex', justifyContent: 'center', marginTop: '-20px', marginBottom: '-8px' }}> What is Metamask?</span></a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
