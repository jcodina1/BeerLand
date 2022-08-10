import React, { useState } from "react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useHistory } from "react-router-dom";
import { postPurchase, removeAllFromCart } from "../../../redux/actions";

export default function Paypal({
  precioTotal,
  userId,
  purchaseDetails,
  beerId,
  email,
}) {
  const dispatch = useDispatch();
  const nav = useHistory();
  function navigateToHome() {
    //nav.push("/home");
    window.location.href = "/home";
  }

  function setCart() {
    dispatch(removeAllFromCart());
  }

  return (
    <div>
      <PayPalScriptProvider
        options={{
          "client-id":
            "AVGtPFPGY9WcQmtb9olWFLKvPGfrSMvqcfqtVYtv2D1NGrCm2lODo3_izcywut1HqrS-dVUIBfXTaHah",
        }}
      >
        <PayPalButtons
          createOrder={(data, actions, err) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  description: "Payment",
                  amount: {
                    currency_code: "USD",
                    value: precioTotal,
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            const order = await actions.order.capture();
            Swal.fire("Payment successful!", "Enjoy your beer");
            navigateToHome();
            console.log(order);
            const purchaseInfo = {
              email: email,
              totalPrice: precioTotal,
              userId: userId,
              purchaseDetails: purchaseDetails,
              beerId: beerId,
              status: "PENDING",
              address: [order.purchase_units[0].shipping.address].map((e) => {
                return {
                  address:
                    order.purchase_units[0].shipping.address.address_line_1,
                  extra:
                    order.purchase_units[0].shipping.address.address_line_2,
                  city: order.purchase_units[0].shipping.address.admin_area_2,
                };
              }),
            };
            console.log(purchaseInfo);
            dispatch(postPurchase(purchaseInfo));
            setCart();
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}

//      beerQuantityExample = {
//             'id1' : [cantidad,precio]
//                   ...
//             'idN' : [cantidad,precio]
//               }
