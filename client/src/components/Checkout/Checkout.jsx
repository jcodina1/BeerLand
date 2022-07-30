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
  getUser,
} from "../../redux/actions";
import { useHistory } from "react-router-dom";
import { useAuth } from "../Context/Contestautenticacion";
import Login from "../Login/login2";
import style from "./styles.module.css";
import Swal from "sweetalert2";

export default function Checkout() {
  const dispatch = useDispatch();
  const infoBeer = useSelector((state) => state.infoBeers);
  const checkoutinfo = JSON.parse(localStorage.getItem("carrito"));
  let precio = checkoutinfo.map((e) => e.cant * e.price);
  let users = useSelector((state) => state.user);
  const { user } = useAuth();

  let precioTotal = precio.reduce(function (a, b) {
    return a + b;
  }, 0);
  precioTotal = Number(precioTotal.toFixed(2));
  const history = useHistory();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  // console.log(user.id);

  let currentUser = [];
  const userId = [];
  if (user !== null) {
    currentUser = users.filter((u) => u.email === user.email);
    userId.push(currentUser[0].id);
  }

  console.log(currentUser);
  console.log(userId);

  const purchaseDetails = {};
  const sellerIds = [];
  checkoutinfo.forEach((beer) => {
    purchaseDetails[`${beer.id}`] = [beer.cant, beer.price];
    sellerIds.push(beer.sellerId);
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
              userId={userId}
              precioTotal={precioTotal}
              purchaseDetails={purchaseDetails}
              sellerIds={sellerIds}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
