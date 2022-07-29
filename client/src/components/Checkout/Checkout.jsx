import Paypal from "./PayPal/PayPal";
import React from "react";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import Itemscheckout from "./ItemsCheckout";
import {
  getCart,
  infoBeers,
  infoSoldBeers,
  totalPrice,
} from "../../redux/actions";
import { useHistory } from "react-router-dom";
import Login from "../Login/login2";
import style from "./styles.module.css";
import Swal from "sweetalert2";

export default function Checkout() {
  const dispatch = useDispatch();
  const infoBeer = useSelector((state) => state.infoBeers);
  const checkoutinfo = JSON.parse(localStorage.getItem("carrito"));
  let precio = checkoutinfo.map((e) => e.cant * e.price);
  var user = useSelector((state) => state.user);
  let precioTotal = precio.reduce(function (a, b) {
    return a + b;
  }, 0);
  precioTotal = Number(precioTotal.toFixed(2));
  const history = useHistory();

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  console.log(checkoutinfo);
  const purchaseDetails = {};
  checkoutinfo.forEach((beer) => {
    purchaseDetails[`${beer.id}`] = [beer.cant, beer.price];
  });
  console.log(purchaseDetails);

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
              userId={user.id}
              precioTotal={precioTotal}
              purchaseDetails={purchaseDetails}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
