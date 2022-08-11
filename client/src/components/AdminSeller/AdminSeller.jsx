import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from './AdminSeller.module.css'
import Sidebar from "./SideBar/Sidebar";
import DashBoard from "./DashBoard/DashBoard";
import { getBeerSeller, getAllSellers, getSalesBySellerId } from "../../redux/actions";
import Beers from "./Beers/Beers";
import BrewerySales from '../Purchases/BrewerySales/BrewerySales'
import ProductForm from "../Forms/ProductForm"

const AdminSeller = ({ user ,salir2}) => {
    const [mostrar, setMostrar] = useState(false)
    const [render, setRender] = useState("DashBoard")
    const dispatch = useDispatch()
    const seller = useSelector((state) => state.allSellers)
    let currentSeller;
    let sellerId;
    if (user !== null) {
        currentSeller = seller?.filter((e) => e.mail === user.email);
        sellerId = currentSeller[0].id
    }

    useEffect(() => {
        dispatch(getAllSellers())
        dispatch(getSalesBySellerId(sellerId))
        dispatch(getBeerSeller(sellerId))
    }, [dispatch])
    console.log(sellerId);
    //Users
    // Sellers 
    // Products
    // Pusrchases
    return (
        <div className={style.superAdmin}>
            <div className={style.side}> <Sidebar mostrar={mostrar} setMostrar={setMostrar} setRender={setRender} salir2={salir2} user={user}/></div>
            <div className={mostrar ? style.container : style.container2}>
                {render === "DashBoard" ? <DashBoard user={user} /> :
                    render === "Products" ? <Beers /> :
                        render === "Pusrchases" ? <BrewerySales sellerId={sellerId} /> :
                            render === "addProduct" ? <ProductForm /> :
                                <DashBoard mostrar={mostrar} />
                }
            </div>

        </div>
    );
};

export default AdminSeller;