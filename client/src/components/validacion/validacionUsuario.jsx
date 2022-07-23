import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSellers } from "../../redux/actions";
import { useAuth } from "../context/authContext";
import Home from "../Home/Home";
import HomeAdmin from "./homeadmin";


export default function ValidacionUSer() {
    const seller = useSelector(state => state.allSellers)
    const {user} = useAuth()
    console.log(user)
    const dispatch = useDispatch()
    console.log(seller)


    // useEffect(() => {

    //       dispatch(getAllSellers());

    //   }, [dispatch]);

    
    //   function Comparacion() {
    //     if (user !== null) {
    //         var userAtual = seller.filter(e=> user.email === e.email)
            
    //     }
    //     return userAtual
  
    //   }

    //   const funcioncoso = Comparacion()
    //   console.log(funcioncoso)

    
      

    return (
        <div>
            {
                user === null ? <Home/> : <HomeAdmin/>  
            }
        </div>
    )
    
}