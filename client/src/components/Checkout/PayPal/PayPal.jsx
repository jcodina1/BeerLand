import React, { useState } from "react";
import Swal from "sweetalert2";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function Paypal({ precioTotal, userId, purchaseDetails }) {
  const [approved, setApproved] = useState(false);

  if (approved === true) {
    const purchaseInfo = {
      totalPrice: precioTotal,
      userId: userId,
      purchaseDetails: purchaseDetails,
      status: "PENDING",
    };
    console.log(purchaseInfo);
    setApproved(false);
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
            setApproved(true);
            Swal.fire("Payment successful!", "Enjoy your beer");
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
