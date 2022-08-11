import logo2 from '../../../img/BeerLogo2.png'
import logo3 from '../../../img/BeerLogo3.png'
import profiles from '../../../img/beertest.png'
import { AiOutlineMenu } from "react-icons/ai";
import { BsGrid1X2 } from "react-icons/bs";
import { GiBeerBottle } from "react-icons/gi";
import { MdOutlineAttachMoney, MdOutlineCreateNewFolder } from "react-icons/md";
import { BiLogOut } from 'react-icons/bi'
import style from './Sidebar.module.css'

export default function Sidebar({mostrar,setMostrar,setRender,salir2,user}) {
console.log(user);
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
                    <div onClick={()=>setRender("Products")} className={style.link}>
                        <div className={style.links_icon}><GiBeerBottle /></div>
                        {mostrar?<span className={style.links_name}>Products</span>:<span className={style.tooltip}>Products</span>}
                    </div>
                    
                </li>
                <li>
                    <div onClick={()=>setRender("Pusrchases")} className={style.link}>
                        <div className={style.links_icon}><MdOutlineAttachMoney/> </div>
                        {mostrar?<span className={style.links_name}>Sales</span>:<span className={style.tooltip}>Sales</span>}
                    </div>
                </li>
                <li>
                    <div onClick={()=>setRender("addProduct")} className={style.link} >
                        <div className={style.links_icon}><MdOutlineCreateNewFolder /> </div>
                        {mostrar?<span className={style.links_name}>addProduct</span>:<span className={style.tooltip}>addProduct</span>}
                    </div>
                    
                </li>
            </ul>
            {mostrar?<div className={style.profile_content}>
                <div className={style.profile}>
                    <div className={style.profile_details}>
                        <img src={profiles} alt="" />
                        <div className={style.name_job}>
                            <div className={style.name}>{user.email}</div>
                            <div className={style.job}>{user.rol}</div>
                        </div>
                    </div>
                    <div className={style.log_out}><BiLogOut onClick={(e)=>salir2(e)} /></div>
                </div>
            </div>:''}
        </div>
    )
}