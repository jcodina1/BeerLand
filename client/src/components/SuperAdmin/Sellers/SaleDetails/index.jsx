import React, { us } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function SaleDetails({ setModalOpen, sellerId, allPurchases }) {
  console.log(allPurchases);
  let purchaseInfo = [];
  if (allPurchases != null) {
    allPurchases.forEach((purchase) => {
      purchaseInfo = [
        ...purchaseInfo,
        ...purchase.purchaseDetails,
        ...purchase.beers,
      ];
    });
  }
  // console.log(purchaseInfo);
  const filteredPurchases = purchaseInfo.filter(
    (info) => (info.sellerId = sellerId)
  );

  // console.log(filteredPurchases);

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <button onClick={() => setModalOpen(false)}> X</button>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell>Price per Unit</TableCell>
                <TableCell>Amount Sold</TableCell>
                <TableCell>Total Earnings</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {allPurchases
                .map((purchase) =>
                  purchase.purchaseDetails.filter(
                    (detail) => detail.sellerId == sellerId
                  )
                )
                .map((filteredPurchases) => {
                  return (
                    <TableRow key={filteredPurchases.id}>
                      <TableCell>
                        {" "}
                        {filteredPurchases.beers.map((beer) => (
                          <p>{beer.name}</p>
                        ))}
                      </TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  );
                })} */}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
