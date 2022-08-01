import React, { useState } from "react";
import Swal from "sweetalert2";
import {useDispatch} from 'react-redux'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useHistory } from 'react-router-dom';
import * as actions from '../../../redux/actions'

export default function Paypal({ precioTotal, userId, purchaseDetails }) {
  const dispatch = useDispatch();
  const [approved, setApproved] = useState(false);
  const nav = useHistory();
  function navigateToHome(){
    nav.push('/home')
  }
  

  if (approved === true) {
    const purchaseInfo = {
      totalPrice: precioTotal,
      userId: userId,
      purchaseDetails: purchaseDetails,
      status: "PENDING",
    };

    dispatch(actions.postPurchase(purchaseInfo))
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
            navigateToHome()
          }}/>
      </PayPalScriptProvider>
    </div>
  );
}

//      beerQuantityExample = {
//             'id1' : [cantidad,precio]
//                   ...
//             'idN' : [cantidad,precio]
//               }
