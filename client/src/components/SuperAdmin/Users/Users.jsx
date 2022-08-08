import { useState } from "react";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import styles from "./Users.module.css";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../Pagination/Pagination";
import { setPage } from "../../../redux/actions";
import { Link } from "react-router-dom";
import PurchaseDetails from "./PurchaseDetails";
export default function Users() {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.user);
  const allPurchases = useSelector((state) => state.allPurchases);
  const [modalOpen, setModalOpen] = useState(false);

  let page = useSelector((state) => state.page);
  let usersPerPage = 10;

  let lastIndex = page * usersPerPage; //indice incial para metodo slice
  let firstIndex = lastIndex - usersPerPage; //indice final para metodo slice
  let currentUser = allUsers.slice(firstIndex, lastIndex); //metodo slice para determinar del array los libros a mostrar por pagina

  const limitPage = Math.ceil(allUsers.length / usersPerPage);

  let firstPrevControl = false; //control de botones, deshabilita cuando es imposible la ejecución
  let nextLastControl = false;

  if (page === 1) firstPrevControl = true; //control de botones, dependiendo la posición, deshabilita el correspondiente
  if (page === limitPage) nextLastControl = true;

  // pageControl realiza el control del paginado, recibe la información del evento y renderiza mediante el componente Paginated.
  // setea las páginas segun el botón clickeado.

  const paginate = (e, pageNumber) => {
    if (pageNumber === "next" && page + 1 <= limitPage) {
      dispatch(setPage(page + 1));
    } else if (pageNumber === "prev" && page - 1 >= 1) {
      dispatch(setPage(page - 1));
    } else {
      dispatch(setPage(pageNumber));
    }
  };
  console.log(allUsers);
  console.log(allPurchases);
  return (
    <div className={styles.table}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Surname</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Amount Paid</TableCell>
              <TableCell>Toggle Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentUser.map((e) => (
              <TableRow key={e.id}>
                <TableCell>
                  <img src={e.image} alt="Avatar" />
                </TableCell>
                <TableCell>{e.id}</TableCell>
                <TableCell>{e.name}</TableCell>
                <TableCell>{e.surname}</TableCell>
                <TableCell>{e.email}</TableCell>
                <TableCell>
                  {e.address === "" ? "Address not found" : e.address}
                </TableCell>
                <TableCell>
                  $
                  {allPurchases
                    .filter((purchase) => purchase.userId == e.id)
                    .map((compra) => compra.totalPrice)}
                </TableCell>
                <TableCell>
                  <button onClick={() => setModalOpen(true)}>
                    Purchase Detail
                  </button>{" "}
                  {modalOpen && (
                    <div>
                      {" "}
                      <PurchaseDetails
                        setModalOpen={setModalOpen}
                        userId={e.id}
                      />
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
            {console.log(allUsers)}
          </TableBody>
        </Table>
        <Pagination
          page={page}
          paginate={paginate}
          limitPage={limitPage}
          firstPrevControl={firstPrevControl}
          nextLastControl={nextLastControl}
        />
      </TableContainer>
    </div>
  );
}
