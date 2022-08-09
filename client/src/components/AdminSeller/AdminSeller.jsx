import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from './AdminSeller.module.css'
import Sidebar from "./SideBar/Sidebar";
import DashBoard from "./DashBoard/DashBoard";
import { getBeerSeller, getAllSellers, getSalesBySellerId } from "../../redux/actions";
import Beers from "./Beers/Beers";
import UserPurchases from "../Purchases/UserPurchases/UserPurchases";

const AdminSeller = ({user}) => {
    const [mostrar, setMostrar] = useState(false)
    const [render, setRender] = useState("DashBoard")
    const dispatch = useDispatch()
    const seller = useSelector((state) => state.allSellers)
    let currentSeller;

    if (user !== null) {
        currentSeller = seller?.filter((e) => e.mail === user.email);
    }

    useEffect(() => {
        dispatch(getAllSellers())
        dispatch(getSalesBySellerId(currentSeller[0].id))
        dispatch(getBeerSeller(currentSeller[0].id))
    }, [])

    //Users
    // Sellers 
    // Products
    // Pusrchases
    return (
        <div className={style.superAdmin}>
            <div className={style.side}> <Sidebar mostrar={mostrar} setMostrar={setMostrar} setRender={setRender} /></div>
            <div className={mostrar ? style.container : style.container2}>
                {render === "DashBoard" ? <DashBoard user={user}/> :
                    render === "Products" ? <Beers /> :
                        render === "Pusrchases" ? <UserPurchases /> :
                            <DashBoard mostrar={mostrar} />}
            </div>

        </div>
    );
};

export default AdminSeller;