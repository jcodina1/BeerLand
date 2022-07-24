import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSellers } from "../../redux/actions";
import { useAuth } from "../context/contestautenticacion";
import Home from "../Home/Home";
import HomeAdmin from "./HomeAdmin";


export default function ValidacionUSer() {

    const {user} = useAuth()
    console.log(user)



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
                 user === null ? <Home/> : user.rol === 'user' ?<Home/> : <HomeAdmin/>
            }
        </div>
    )
    
}