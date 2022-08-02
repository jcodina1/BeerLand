import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPurchases } from "../../redux/actions";

export default function Purchase({ id, total, status, create, beers, user,address }) {

    let i = 1

    return (
        <div >
            <div >
                <h3>Id purchase: {id}</h3>
                <h3>Total: {total}</h3>
                <h3>Status purchase: {status}</h3>
                <h3>Date: {create}</h3>
                <h3>Address:</h3>
                {address.map(e=>
                <>
                <p> Street address: {e.address}</p>
                <p>Apto: {e.extra}</p>
                <p>City: {e.city}</p>
               
                </>)}
                <h1>Details:</h1>
                {beers.map((b) =>
                    <div key={b.id}>
                        <h2>Producto #{i++}</h2>
                        <p >Id beer: {b.id}</p>
                        <p>Beer: {b.name}</p>
                        <p>Price: {b.price}</p>
                        <p>Id seller: {b.sellerId}</p>
                        <p>Seller name:{b.seller.name}</p>
                        
                    </div>
                )}
                <p>Id user : {user.id}</p>
                <p>Name: {user.name}</p>
                <p>Surname: {user.surname}</p>
                <p>Address: {user.address}</p>
                <p>Email: {user.email}</p>
                <p> ------- </p><hr />


            </div>
        </div>
    );
}