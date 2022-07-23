import Paypal from '../PayPal/PayPal'
import React from "react";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import Itemscheckout from "./ItemsCheckout";
import { getCart, infoBeers, infoSoldBeers, totalPrice} from "../../redux/actions";
import { useHistory } from "react-router-dom";
import Login from "../Login/Login";
import Swal from "sweetalert2";


export default function Checkout() {
  const dispatch = useDispatch();
  const infoBeer = useSelector((state) => state.infoBeers);
  const checkoutinfo = JSON.parse(localStorage.getItem("carrito"));
  let precio = checkoutinfo.map((e) => e.cant * e.price);
  var user = useSelector((state) => state.user);
  let preciototal = precio.reduce(function (a, b) {
    return a + b;
  }, 0);
  const history = useHistory();

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const createOrder = (data, actions) => {
    if (user.hasOwnProperty("name")) {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: preciototal,
            },
          },
        ],
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have to be logged in to buy!",
      });
    }
  };

/*   const onApprove = (data, actions) => {
    let totalInfo = {
      data: data,
      totalPrice: preciototal,
      infoBook: infoBook,
      userId: userId,
      address: address
    };

    dispatch(infoBooks(infoBook));
    dispatch(infoSoldBooks(totalInfo));

    let timerInterval;
    Swal.fire({
      title: "Your payment was successful",
      html: 'Thank you for trusting in BookStore',
      timer: 5000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      <-- Read more about handling dismissals below -->
      if (result.dismiss === Swal.DismissReason.timer) {
        localStorage.removeItem("carrito");
        window.location.href = "/home";
        console.log("I was closed by the timer");
      }
    });

    return actions.order.capture();
  }; */

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
          <h1 style={{ textAlign: 'center', fontSize: '30px' }}>Order Total</h1>
          <h3>Total: ${preciototal}</h3>
          <div className="paypal">
            <Paypal/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}