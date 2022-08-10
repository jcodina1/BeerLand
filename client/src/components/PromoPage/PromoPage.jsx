import React, { useEffect } from "react";
import style from "./PromoPage.module.css"
import banner from "../../img/banner.jpg"
import bannerpagos from "../../img/bannerpagos.jpg"
import Slider from "../Slider/Slider"
import Navbar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import Slider2 from "../Slider2/Slider2";
import Container from '@mui/material/Container';
import { useDispatch } from "react-redux";
import { getAllBeers } from "../../redux/actions";
import Slider3 from "../Slider3/Slider3";



export default function PromoPage() {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getAllBeers())
    }, [])
    
    return (
        <Container maxWidth='xxl' disableGutters='false'>
            <div className={style.promopage}>

                <Navbar />
                <Slider3/>
                <div className={style.banner} >
                    <img src={banner} alt="promo banner" />
                </div>
                <Slider2 className={style.slider2} />


                 <div >
                    <div className={style.dataUp}>
                        <h1>We add Paypal and Cyrpto so you can buy your book!</h1>
                        <img src="https://cdn.blogtienao.com/wp-content/uploads/2021/11/bitcoin-xu-ly-nhieu-hon-paypal-62-tong-gia-tri-giao-dich-trong-nam-2021.jpg" alt="" />

                    </div>
                </div> 

                <Footer />
            </div>
        </Container>

    )
}