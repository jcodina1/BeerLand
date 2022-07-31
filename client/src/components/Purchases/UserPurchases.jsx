import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function UserPurchases(){
    userPurchases = useSelector((state) => state.userPurchases)

    
    
    return(
        <div>
            <p>Hola!, estas son tus compras.</p>
            {userPurchases.map((purchase) => {
              
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