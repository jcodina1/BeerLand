import { useState } from "react";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import styles from "./styles.module.css";

export default function SaleDetail({ purchase }) {
  const TAX_RATE = 0.05;
  const invoiceSubtotal = purchase.totalPrice;
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceSubtotal - invoiceTaxes;
  const [mostrar, setMostrar] = useState(false);
console.log(purchase);
  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }

  return (
   
        <div className={styles.table}>         
         
            <div>
              
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 600, maxWidth: 1000 }}
                  aria-label="spanning table"
                >
                  <TableHead>
                    <TableRow>                      
                      <TableCell>Beer</TableCell>
                      <TableCell>Cant</TableCell>
                      <TableCell>Price unit</TableCell>
                      <TableCell>Total</TableCell>
                      
                    </TableRow>                    
                  </TableHead>
                  <TableBody>
                    {purchase.beers.map((beer, index) => (
                      <TableRow key={beer.name}>
                        <TableCell>{beer.name}</TableCell>
                        <TableCell>
                          {
                            purchase.purchaseDetails.filter(
                              (f) => f.beerId === beer.id
                            )[0].cant
                          }
                        </TableCell>
                        <TableCell>$ {beer.price}</TableCell>
                        <TableCell>
                          $ {purchase.purchaseDetails.filter(
                            (f) => f.beerId === beer.id
                          )[0].cant * beer.price}
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell rowSpan={3} />
                      <TableCell colSpan={2}>Subtotal</TableCell>
                      <TableCell align="right">{purchase.totalPrice}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Tax</TableCell>
                      <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
                        0
                      )} %`}</TableCell>
                      <TableCell align="right">
                        {ccyFormat(invoiceTaxes)}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2}>TOTAL</TableCell>
                      <TableCell align="right">
                        {ccyFormat(invoiceTotal)}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <Button
                variant="contained"
                color="warning"
                onClick={() => setMostrar(false)}
              >
                Close
              </Button>
            </div>
          
        </div>
      
  );
}
