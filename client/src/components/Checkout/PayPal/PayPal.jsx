import React, { useRef, useEffect } from 'react'
import Swal from 'sweetalert2';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function Paypal({ precioTotal, userId }) {
    // const paypal = useRef();
    // useEffect(() => {
    //     window.paypal.Buttons({
    //         createOrder: (data, actions, err) => {
    //             return actions.order.create({
    //                 intent: "CAPTURE",
    //                 purchase_units: [
    //                     {
    //                         description: "Payment",
    //                         amount: {
    //                             currency_code: "USD",
    //                             value: precioTotal
    //                         }
    //                     },
    //                 ]
    //             })
    //         },
    //         onApprove: async (data, actions) => {
    //             const order = await actions.order.capture();
    //             Swal.fire(
    //                 'Payment successful!',
    //                 'Enjoy your beer'
    //               )
    //             // aca va lo que queremos que haga cuando da ok
    //             // const onApprove = (data, actions) => {
    //             //     let totalInfo = {
    //             //       data: data,
    //             //       totalPrice: preciototal,
    //             //       infoBook: infoBook,
    //             //       userId: userId,
    //             //       address: address
    //             //     };
    //             const purchaseInfo ={
    //                 data: data,
    //                 totalPrice: precioTotal,
    //                 userId: userId

    //             }
    //             console.log(purchaseInfo)

    //         },
    //         onError: (err) => {
    //             console.log(err)
    //         }
    //     })
    //         .render(paypal.current)
    // }, [])
    return (
        // <div>
        //     <div ref={paypal}></div>
        // </div>

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
                        Swal.fire(
                            'Payment successful!',
                            'Enjoy your beer'
                        )
                        const purchaseInfo = {
                            data: data,
                            totalPrice: precioTotal,
                            userId: userId
                        }
                        console.log(purchaseInfo)
                    }}
                />
            </PayPalScriptProvider>
        </div>
    )
}