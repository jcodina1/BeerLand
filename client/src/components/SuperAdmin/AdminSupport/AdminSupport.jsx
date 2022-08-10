
import styles from './AdminSupport.module.css'
import { useState } from "react";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useModals } from '../../../Hooks/useModals';
import Modal from '../../Modal/Modal';
import AdminAnswer from './AdminAnswer';
import { deleteComment } from '../../../redux/actions';



import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../Pagination/Pagination";
import { setPage } from "../../../redux/actions";
import { Link } from 'react-router-dom';

export default function SupportAdmin() {
    const dispatch = useDispatch()
    const Comments = useSelector(state => state.support)
    const [isOpenModal, openModal, closeModal] = useModals(false);
    console.log(Comments)

    function handleclick(idSupport, f) {
      f.preventDefault()
      dispatch(deleteComment(idSupport))
    }
    // let page = useSelector((state) => state.page);
    // let sellersPerPage = 3
  
    // let lastIndex = page * sellersPerPage; //indice incial para metodo slice
    // let firstIndex = lastIndex - sellersPerPage; //indice final para metodo slice
    // let currentSeller = allSellers.slice(firstIndex, lastIndex); //metodo slice para determinar del array los libros a mostrar por pagina
  
    // const limitPage = Math.ceil(allSellers.length / sellersPerPage);
  
    // let firstPrevControl = false; //control de botones, deshabilita cuando es imposible la ejecución
    // let nextLastControl = false;
  
    // if (page === 1) firstPrevControl = true; //control de botones, dependiendo la posición, deshabilita el correspondiente
    // if (page === limitPage) nextLastControl = true;
  
    // // pageControl realiza el control del paginado, recibe la información del evento y renderiza mediante el componente Paginated.
    // // setea las páginas segun el botón clickeado.
  
  
    // const paginate = (e, pageNumber) => {
    //   if (pageNumber === "next" && page + 1 <= limitPage) {
    //     dispatch(setPage(page + 1));
    //   } else if (pageNumber === "prev" && page - 1 >= 1) {
    //     dispatch(setPage(page - 1));
    //   } else {
    //     dispatch(setPage(pageNumber));
    //   }
    // };
  
    return (
      <div className={styles.table}>  
        <TableContainer component={Paper}>
          <Table >
            <TableHead>
  
              <TableRow>
              <TableCell>id</TableCell>
                <TableCell>Register Date</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Comment</TableCell>
                <TableCell>Answer</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Comments.map((e, i) =>
                <TableRow key={e.id}>
                   <TableCell>{e.idSupport}</TableCell>
                  <TableCell>{e.date}</TableCell>
                  <TableCell>{e.name}</TableCell>
                  <TableCell>{e.email}</TableCell>
                  <TableCell>{e.comment}</TableCell>
                
                  <TableCell>
                       <AdminAnswer 
                       name={e.name}
                       email={e.email}
                       idSupport={e.idSupport}
                       isUser={e.isUser}
                       userId={e.userId}
                       />
                  </TableCell>
                  <TableCell>
                    <button onClick={f=>handleclick(e.idSupport, f)}>X</button>
                  </TableCell>
                  {/* <TableCell>{e.createdAt.split("T")}</TableCell> */}
                  
                </TableRow>)}

            
                
               
                    
                
               
                
              
  
            </TableBody>
          </Table>
          {/* <Pagination
            page={page}
            paginate={paginate}
            limitPage={limitPage}
            firstPrevControl={firstPrevControl}
            nextLastControl={nextLastControl}
          /> */}
        </TableContainer>
  
      </div>
    );
}