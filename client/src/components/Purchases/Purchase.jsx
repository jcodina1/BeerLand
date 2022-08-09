import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPurchases, updateStatus } from "../../redux/actions";
import style from "./Purchases.module.css"

export default function Purchase({ id, total, status, create, beers, user, address }) {

    const dispatch = useDispatch()
    let i = 1

    let statusA = ["PENDING", "CANCELLED", "COMPLETED"]
    const [statusAc, setStatusAc] = useState(status)
    const [statusB, setStatusB] = useState(status)
    useEffect(() => { dispatch(getAllPurchases()) }, [status])
    const handleChangeStatus = (e) => {
        setStatusAc(e.target.value)
    }
    const hadleSubmit = (e) => {
        e.preventDefault()
        console.log("enviado");
        dispatch(updateStatus(id, statusAc)).then(res => setStatusB(statusAc))

    }
    return (
        <div >
            <div >
                <h3>Id purchase: {id}</h3>
                <h3>Total: {total}</h3>
                <div>
                    <h3>Status purchase: {statusB}</h3></div>
                <select
                    name='status'
                    onChange={(e) => { handleChangeStatus(e) }}
                >
                    <option value="">Selection one</option>
                    {statusA.map(e => e !== statusB ? <option key={e} value={e}>{e}</option> : "")}
                </select>
                <p>Esta seguro de cambiar El estado a : {statusAc === statusB ? "" : statusAc}</p>
                <button onClick={e => hadleSubmit(e)}>Si</button>
                <h3>Date: {create}</h3>
                <h3>Address:</h3>
                {address.map(e =>
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
                <div>



                </div>
                <p> ------- </p><hr />


            </div>
        </div>
    );
}