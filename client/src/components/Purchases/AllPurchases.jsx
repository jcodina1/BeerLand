import { React, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPurchases } from '../../redux/actions';
import Purchase from '../Purchases/Purchase.jsx';

export default function Purchases(){
    const dispatch = useDispatch();
    const purchases = useSelector((state)=>state.allPurchases)
    useEffect(() => {
        if (!purchases.length) {
            dispatch(getAllPurchases());
        }
    }, []);
    
    console.log(purchases)
    return(
        <div>
            {purchases?.map((e)=>{
                return (
                    <Purchase
                    key={e.id}
                    id= {e.id}
                    total= {e.totalPrice}
                    status= {e.status}
                    create= {e.createdAt}
                    beers={e.beers}
                    user={e.user}
                    seller={e.beers.seller}
                    address={e.address}
                    // beers: purchase.beers.map((b)=>{
                    //     return (
                    //         b.id,
                    //         b.name,
                    //         b.price,
                    //         b.sellerId,
                    //         b.seller.name
                    //     )
                    // }),
                    // user: purchase.user.map((u)=>{
                    //     return (
                    //         u.id,
                    //         u.name,
                    //         u.surname,
                    //         u.address,
                    //         u.email
                    //     )
                    // })
                />)
            }
            )}
        </div>
    )
}