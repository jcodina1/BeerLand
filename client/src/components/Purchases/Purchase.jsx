import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPurchases, updateStatus } from "../../redux/actions";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import style from "./Purchases.module.css"

export default function Purchase({ id, total, status, create, beers, user, address }) {

    const dispatch = useDispatch()
    let i = 1

    let statusA = ["PENDING", "CANCELLED", "COMPLETED"]
    const [statusAc, setStatusAc] = useState(status)
    const [statusB, setStatusB] = useState(status)
    const [changeStatus,setChangeStatus]=useState(false)
    const [seeBeer,setSeeBeer]=useState(false)
    useEffect(() => { dispatch(getAllPurchases()) }, [status])
    const handleChangeStatus = (e) => {
        setStatusAc(e.target.value)
    }
    const hadleSubmit = (e) => {
        e.preventDefault()
        console.log("enviado");
        dispatch(updateStatus(id, statusAc)).then(res => setStatusB(statusAc))
        setChangeStatus(false)
    }
    return (

        <>
            <TableRow>
                <TableCell>{id}</TableCell>
                <TableCell>
                    {!changeStatus?<>{statusB}<br />
                    <button onClick={() => setChangeStatus(true)}>Change Status</button></>:
                    <>
                    <select
                    name='status'
                    onChange={(e) => { handleChangeStatus(e) }}
                >
                    <option value="">Selection one</option>
                    {statusA.map(e => e !== statusB ? <option key={e} value={e}>{e}</option> : "")}
                </select>
                <p>Esta seguro de cambiar El estado a : {statusAc === statusB ? "" : statusAc}</p>
                <button onClick={e => hadleSubmit(e)}>Si</button>
                    </>}                    
                </TableCell>
                <TableCell>{create}</TableCell>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{Array.isArray(address) ? address?.map(e =>
                    <>
                        <p> Street address: {e.address}</p>
                        <p>Apto: {e.extra}</p>
                        <p>City: {e.city}</p>

                    </>) : address}</TableCell>
                <TableCell>$ {total}</TableCell>
                <TableCell onClick={()=>setSeeBeer(true)}>Detail</TableCell>
            </TableRow>
                    {
                        seeBeer?
                        <>
                        <p onClick={()=>setSeeBeer(false)}>❌</p>
                        
                            <TableRow>
                            <TableCell>Beer Id</TableCell>
                            <TableCell>Beer</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Id seller</TableCell>
                            <TableCell>Seller name</TableCell>
                        </TableRow>
                        

                        {beers.map((b) =>
                    
                        <TableRow key={b.id}>
                        <TableCell>{b.id}</TableCell>
                            <TableCell>{b.name}</TableCell>
                            <TableCell>{b.price}</TableCell>
                            <TableCell>{b.sellerId}</TableCell>
                            <TableCell>{b.seller.name}</TableCell>
                        </TableRow>
                        )}
                        </>
                        :""
                    }
           
        </>



    );
}