import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
export default function PurchaseDetails({ setModalOpen, userId }) {
  const allPurchases = useSelector((state) => state.allPurchases);

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <button onClick={() => setModalOpen(false)}> X</button>{" "}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Beer</TableCell>
                <TableCell>Seller</TableCell>
                <TableCell>Units</TableCell>
                <TableCell>Price per Unit</TableCell>
                <TableCell>Subtotal</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allPurchases
                .filter((purchase) => purchase.userId == userId)
                .map((filteredPurchase) => {
                  return (
                    <TableRow>
                      <TableCell>
                        {filteredPurchase.beers.map((beer) => (
                          <p>{beer.name}</p>
                        ))}
                      </TableCell>
                      <TableCell>
                        {filteredPurchase.beers.map((beer) => (
                          <p>{beer.seller.name}</p>
                        ))}
                      </TableCell>
                      <TableCell>
                        {filteredPurchase.purchaseDetails.map((detail) => (
                          <p>{detail.cant}</p>
                        ))}
                      </TableCell>
                      <TableCell>
                        {filteredPurchase.beers.map((beer) => (
                          <p>{beer.price}</p>
                        ))}
                      </TableCell>
                      <TableCell>
                        {filteredPurchase.beers.map((beer) => (
                          <p>{beer.price}</p>
                        ))}
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
