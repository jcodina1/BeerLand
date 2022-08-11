import styles from "./Sellers.module.css";
import { useState } from "react";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../Pagination/Pagination";
import { setPage } from "../../../redux/actions";

export default function Sellers() {
  const dispatch = useDispatch();
  const allSellers = useSelector((state) => state.allSellers);
  let page = useSelector((state) => state.page);
  let sellersPerPage = 3;
  const [modalOpen, setModalOpen] = useState(false);
  let lastIndex = page * sellersPerPage; //indice incial para metodo slice
  let firstIndex = lastIndex - sellersPerPage; //indice final para metodo slice
  let currentSeller = allSellers.slice(firstIndex, lastIndex); //metodo slice para determinar del array los libros a mostrar por pagina

  const limitPage = Math.ceil(allSellers.length / sellersPerPage);

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

  return (
    <div className={styles.table}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>Id</TableCell>
              <TableCell>Dni</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Register date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentSeller.map((e) => (
              <TableRow key={e.id}>
                <TableCell>
                  <img className={styles.img} src={e.image} alt="Avatar" />
                </TableCell>
                <TableCell>{e.id}</TableCell>
                <TableCell>{e.dni}</TableCell>
                <TableCell>{e.name}</TableCell>
                <TableCell>{e.mail}</TableCell>
                <TableCell>{e.createdAt.split("T")}</TableCell>
              </TableRow>
            ))}

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
