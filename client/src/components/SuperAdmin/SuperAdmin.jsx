import React from "react";
import style from "./SuperAdmin.module.css";
import Sidebar from "./SideBar/Sidebar";
import DashBoard from "./DashBoard/DashBoard";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllBeers, getAllPurchases, getAllSellers, getSupport, getUser } from "../../redux/actions";
import Purchases from "../Purchases/AllPurchases";
import Users from "./Users/Users";
import Sellers from "./Sellers/Sellers";
import Beers from "./Beers/Beers";
import SupportAdmin from "./AdminSupport/AdminSupport";
const SuperAdmin = () => {
    const [mostrar, setMostrar] = useState(false)
    const [render, setRender] = useState("DashBoard")
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllPurchases())
        dispatch(getAllSellers())
        dispatch(getUser())
        dispatch(getAllBeers())
        dispatch(getSupport())

    }, [])
    //Users
    // Sellers
    // Products
    // Pusrchases
    return (
        <div className={style.superAdmin}>
           <div className={style.side}> <Sidebar mostrar={mostrar} setMostrar={setMostrar} setRender={setRender} /></div>
            <div className={mostrar ? style.container : style.container2}>
            {render === "DashBoard" ? <DashBoard  /> :
            render === "Users" ? <Users  /> :
            render === "Sellers" ? <Sellers  /> :
            render === "Products" ? <Beers  /> :
            render === "Pusrchases" ? <Purchases  />:
            render === "AdminSupport" ? <SupportAdmin/>:
            <DashBoard mostrar={mostrar} />}
            </div>
           
        </div>
    );

};

export default SuperAdmin;
