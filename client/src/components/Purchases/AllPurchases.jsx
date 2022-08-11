import { React, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPurchases } from '../../redux/actions';
import Purchase from '../Purchases/Purchase.jsx';
import AllFilterStatus from './FilterStatus/AllFilterStatus'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import style from "./Purchases.module.css"
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
            <div className={style.table}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id purchase</TableCell>
                            <TableCell>Status purchase</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Id User</TableCell>
                            <TableCell>User Name</TableCell>
                            <TableCell>User Email</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Total</TableCell>
                            <TableCell>Detail</TableCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        
            {purchases?.map(e =><Purchase
                        key={e.id}
                        id={e.id}
                        total={e.totalPrice}
                        status={e.status}
                        create={e.createdAt}
                        beers={e.beers}
                        user={e.user}
                        seller={e.beers.seller}
                        address={e.address}
                    /> )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        </div>
    )
}