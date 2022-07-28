import React, { useRef, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function Paypal({ user }) {
  //   const paypal = useRef();
  //   useEffect(() => {
  //     window.paypal
  //       .Buttons({
  //         createOrder: (data, actions, err) => {
  //           return actions.order.create({
  //             intent: "CAPTURE",
  //   purchase_units: [
  //     {
  //       description: "Payment",
  //       amount: {
  //         currency_code: "USD",
  //         value: 1,
  //       },
  //     },
  //   ],
  //           });
  //         },
  //         onApprove: async (data, actions) => {
  //           const order = await actions.order.capture();
  //           console.log("Payment successful");
  //           // aca va lo que queremos que haga cuando da ok
  //         },
  //         onError: (err) => {
  //           console.log(err);
  //         },
  //       })
  //       .render(paypal.current);
  //   }, []);
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
                    value: 1,
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            const details = await actions.order.capture();
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}
