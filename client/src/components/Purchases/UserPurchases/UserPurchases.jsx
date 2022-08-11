import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles.module.css";
import {
  getPurchasesByUserId,
  getSalesBySellerId,
  getUser,
} from "../../../redux/actions";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAuth } from "../../Context/Contestautenticacion";
import UserFilterStatus from "../FilterStatus/UserFilterStatus";

import NavBar from "../../NavBar/NavBar";
import PurchaseDetails from "../../SuperAdmin/Users/PurchaseDetails";

export default function UserPurchases() {
  const user2 = useSelector((state) => state.user);
  const seller = useSelector((state) => state.allSellers);
  const userPurchases = useSelector((state) => state.userPurchases);
  const [modalOpen, setModalOpen] = useState(false);

  const { user } = useAuth();
  const dispatch = useDispatch();
  let currentUser;
  console.log(user);

  if (user !== null) {
    currentUser = user2?.filter((e) => e.email === user.email);
  }
  console.log(currentUser);
  useEffect(() => {
    dispatch(getUser());
    dispatch(getPurchasesByUserId(currentUser[0].id));
  }, []);

  console.log(userPurchases);

  let subtotals = [];
  if (userPurchases != null) {
    let amounts = [];
    let prices = [];
    userPurchases.map((purchase) => {
      amounts.push(purchase.purchaseDetails.cant);
      purchase.beers.map((beer) => {
        prices.push(beer.price);
      });
    });
    for (let index = 0; index < amounts.length; index++) {
      subtotals.push(amounts[index] * prices[index]);
    }
  }
  console.log(subtotals);

  return (
    <div className={styles.navbar}>
      <NavBar />
      {/* <div className={styles.contentWrapper}>
        <Users setModalOpen={setShowModal} />
      </div> */}
      <div className={styles.contentWrapper}>
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
              {userPurchases.map((purchase) => {
                return (
                  <TableRow>
                    <TableCell>
                      {purchase.beers.map((beer) => (
                        <p>{beer.name}</p>
                      ))}
                    </TableCell>
                    <TableCell>
                      {purchase.beers.map((beer) => (
                        <p> {beer.seller.name} </p>
                      ))}
                    </TableCell>
                    <TableCell>
                      {purchase.purchaseDetails.map((detail) => (
                        <p>{detail.cant}</p>
                      ))}
                    </TableCell>
                    <TableCell>
                      {purchase.beers.map((beer) => (
                        <p>${beer.price}</p>
                      ))}
                    </TableCell>
                    <TableCell>
                      {purchase.purchaseDetails.map((detail) => {
                        let subt =
                          parseFloat(detail.cant) * parseFloat(detail.price);
                        return <p>${subt} </p>;
                      })}
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
