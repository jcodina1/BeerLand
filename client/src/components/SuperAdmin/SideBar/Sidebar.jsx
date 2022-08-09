import logo2 from '../../../img/BeerLogo2.png'
import logo3 from '../../../img/BeerLogo3.png'
import profiles from '../../../img/beertest.png'
import { AiOutlineMenu } from "react-icons/ai";
import { BsCart4, BsGrid1X2 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { BiLogOut, BiPurchaseTagAlt, BiSearchAlt, BiSupport} from 'react-icons/bi'

import style from './Sidebar.module.css'
import { useState } from 'react';

export default function Sidebar({mostrar,setMostrar,setRender}) {

    return (
        <div className={mostrar?style.sideBar:style.sideBar2}>            
            <div className={style.menuBtn}> <AiOutlineMenu onClick={()=>mostrar?setMostrar(false):setMostrar(true)} /></div>
            <div className={style.logo_content}>
                <div className={style.logo}>
                    <img className={style.sombrero} src={logo2} alt="logo" />
                    {mostrar?<img className={style.logo_name} src={logo3} alt="logo" />:''}
                </div>
            </div>
            <ul className={style.nav_list}>
                
                <li>
                    <div onClick={()=>setRender("DashBoard")} className={style.link} >
                        <div className={style.links_icon}><BsGrid1X2 /> </div>
                        {mostrar?<span className={style.links_name}>DashBoard</span>:<span className={style.tooltip}>DashBoard</span>}
                    </div>
                    
                </li>
                <li>
                    <div onClick={()=>setRender("Users")} className={style.link}>
                        <div className={style.links_icon}><FaUserCircle /> </div>
                        {mostrar?<span className={style.links_name}>Users</span>:<span className={style.tooltip}>Users</span>}
                    </div>
                    
                </li>
                <li>
                    <div onClick={()=>setRender("Sellers")} className={style.link}>
                        <div className={style.links_icon}><MdOutlineAdminPanelSettings /> </div>
                        {mostrar?<span className={style.links_name}>Sellers</span>:<span className={style.tooltip}>Sellers</span>}
                    </div>
                    
                </li>
                <li>
                    <div onClick={()=>setRender("Products")} className={style.link}>
                        <div className={style.links_icon}><BsCart4 /></div>
                        {mostrar?<span className={style.links_name}>Products</span>:<span className={style.tooltip}>Products</span>}
                    </div>
                    
                </li>
                <li>
                    <div onClick={()=>setRender("Pusrchases")} className={style.link}>
                        <div className={style.links_icon}><BiPurchaseTagAlt /> </div>
                        {mostrar?<span className={style.links_name}>Pusrchases</span>:<span className={style.tooltip}>Pusrchases</span>}
                    </div>
                    
                </li>
                <li>
                    <div onClick={()=>setRender("AdminSupport")} className={style.link} >
                        <div className={style.links_icon}><BiSupport /> </div>
                        {mostrar?<span className={style.links_name}>AdminSupport</span>:<span className={style.tooltip}>AdminSupport</span>}
                    </div>
                    
                </li>
            </ul>
            {mostrar?<div className={style.profile_content}>
                <div className={style.profile}>
                    <div className={style.profile_details}>
                        <img src={profiles} alt="" />
                        <div className={style.name_job}>
                            <div className={style.name}>JuanCho</div>
                            <div className={style.job}>Fullstack</div>
                        </div>
                    </div>
                    <div className={style.log_out}><BiLogOut /></div>
                </div>
            </div>:''}
        </div>
    )
}