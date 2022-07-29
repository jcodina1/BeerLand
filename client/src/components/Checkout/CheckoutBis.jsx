import React from "react";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../redux/actions'
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export default function Checkout() {
  const dispatch = useDispatch();
  let user = useSelector((state) => state.user);
  const checkoutinfo = JSON.parse(localStorage.getItem("carrito")); //importante
  let precio = checkoutinfo.map((beer) => beer.cant * beer.price);
  let preciototal = precio.reduce(function (prev, ) {
    return a + b;
  }, 0);
  // const history = useHistory();

  console.log(user);

  // useEffect(() => {
  //   dispatch(getUser())

  // }, [dispatch])



  // useEffect(() => {
  //   dispatch(getCart());
  //   dispatch(exchangeCrypto())
  // }, [dispatch]);
 


  // const createOrder = (data, actions) => {
  //   if (user.hasOwnProperty("name")) {     //cambiar x validacion de firebase
  //     return actions.order.create({
  //       purchase_units: [
  //         {
  //           amount: {
  //             value: preciototal,               // se puede ampliar y completar
  //           },
  //         },
  //       ],
  //     });
  //   } else {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Oops...",
  //       text: "You have to be logged in to buy!",
  //     });
  //   }
  // };
  // const onApprove = (data, actions) => {
  //   let totalInfo = {
  //     data: data,
  //     totalPrice: preciototal,                  //importante
  //     infoBook: infoBook,
  //     userId: userId,
  //     address: address
  //   };



  

    // let timerInterval;
    // Swal.fire({
    //   title: "Your payment was successful",
    //   html: 'Thank you for trusting in BookStore',
    //   timer: 5000,
    //   timerProgressBar: true,
    //   didOpen: () => {
    //     Swal.showLoading()
    //     const b = Swal.getHtmlContainer().querySelector('b')
    //     timerInterval = setInterval(() => {
    //       b.textContent = Swal.getTimerLeft()
    //     }, 100)
    //   },
    //   willClose: () => {
    //     clearInterval(timerInterval);
    //   },
    // }).then((result) => {
    //   /* Read more about handling dismissals below */
    //   if (result.dismiss === Swal.DismissReason.timer) {
    //     localStorage.removeItem("carrito");
    //     window.location.href = "/home";
    //     console.log("I was closed by the timer");
    //   }
    // });

  //   return actions.order.capture();
  // };

  return (
    <div>pay</div>
  );
}