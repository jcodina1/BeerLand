import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function UserPurchases() {
    userPurchases = useSelector((state) => state.userPurchases)



    return (
        <div>
            <p>Hola!, estas son tus compras.</p>
            {userPurchases.map((purchase) => {
                <div>
                
                        
                            Cervezas: {purchase.beers}
                            Total: {purchase.total}
                    
                </div>
            })}
        </div>
    )
}