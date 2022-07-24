import React, { useRef, useEffect } from 'react'

const Paypal = () => {
    const paypal = useRef();
    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Payment",
                            amount: {
                                currency_code: "USD",
                                value: 1
                            }
                        },
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                console.log("Payment successful")
                // aca va lo que queremos que haga cuando da ok
            },
            onError: (err) => {
                console.log(err)
            }
        })
            .render(paypal.current)
    }, [])
    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}

export default Paypal;