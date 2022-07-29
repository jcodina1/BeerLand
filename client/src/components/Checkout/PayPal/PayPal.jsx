import React from "react";
import Swal from "sweetalert2";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function Paypal({
  precioTotal,
  currentUser,
  sellerIds,
  purchaseDetails,
}) {
  console.log(currentUser);
  let userId = 1;

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
            console.log(userId);
            Swal.fire("Payment successful!", "Enjoy your beer");
            const purchaseInfo = {
              data: data,
              totalPrice: precioTotal,
              userId: userId,
              sellerIds: sellerIds,
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
