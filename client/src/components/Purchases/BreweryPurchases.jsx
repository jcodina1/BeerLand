import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";


export default function breweryPurchases(){
    const breweryPurchase = useSelector((state) => state.allPurchases)



    
    return(
        <div>
            <p>Bienvenido, estas son tus ventas.</p>
            {breweryPurchase.map((purchase) => {
                <div>
                    <ul>
                        <li>
                            Cervezas: {purchase.beers}
                        </li>
                        <li>
                            Total: {purchase.total}
                        </li>
                    </ul>
                </div>
            })}
        </div>
    )
}