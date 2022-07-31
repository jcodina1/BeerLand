import React from "react";
import style from "../PromoBanner/PromoBanner.module.css"
import banner from "../../img/banner.jpg"

export default function PromoBanner (){
    return(
        <div className={style.banner}>
            <img src={banner} alt="promo banner"/>
        </div>

    )
}