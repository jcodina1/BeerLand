import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSalesBySellerId } from "../../../redux/actions/index"
import AllFilterStatus from "../FilterStatus/AllFilterStatus";
import SaleDetail from "../UserPurchases/SaleDetail/SaleDetail";

import styles from './BrewerySales.module.css'
export default function BrewerySales() {

  const sales = useSelector((state) => state.filtroPurchases);

  
  return (
    <>
    <AllFilterStatus/>
    <div className={styles.table}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>                         
              <TableCell>User Name</TableCell>
              <TableCell>Status</TableCell>              
              <TableCell>Sales</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sales.map((e) => (
              <>
              <TableRow key={e.id}>               
                <TableCell>{e.id}</TableCell>                
                <TableCell>{e.user.name}</TableCell>
                <TableCell>{e.status}</TableCell>                
                <TableCell><button> hola</button></TableCell>
                
              </TableRow>
              <TableRow>
              <SaleDetail purchase={e} />
              </TableRow>
              </>
            ))}
      
          </TableBody>
        </Table>
        
      </TableContainer>
    </div>
    </>
  );
}