import { React, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPurchases } from '../../redux/actions';
import Purchase from '../Purchases/Purchase.jsx';
import AllFilterStatus from './FilterStatus/AllFilterStatus'

export default function Purchases() {
    const dispatch = useDispatch();
    const purchases = useSelector((state) => state.filtroPurchases)
    
    useEffect(() => {
        if (!purchases.length) {
            dispatch(getAllPurchases());
        }
    }, [purchases]);

    return (
        <div>
            <AllFilterStatus/>
            {purchases?.map((e) => {
                return (
                    <Purchase
                        key={e.id}
                        id={e.id}
                        total={e.totalPrice}
                        status={e.status}
                        create={e.createdAt}
                        beers={e.beers}
                        user={e.user}
                        seller={e.beers.seller}
                        address={e.address}
                    />
                )
            })}
        </div>
    )
}