import React from "react";
import Swal from "sweetalert2";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function Paypal({
  precioTotal,
  userId,
  sellerId,
  purchaseDetails,
}) {
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
            console.log(order);
            Swal.fire("Payment successful!", "Enjoy your beer");
            const purchaseInfo = {
              data: data,
              totalPrice: precioTotal,
              userId: userId,
              sellerId: sellerId,
              paymentMethod: data.paymentSource,
              purchaseDetails: purchaseDetails,
              status: "PENDING",
            };
            console.log(purchaseInfo);
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
