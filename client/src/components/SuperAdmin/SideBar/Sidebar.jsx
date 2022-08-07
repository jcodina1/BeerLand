import logo2 from '../../../img/BeerLogo2.png'
import logo3 from '../../../img/BeerLogo3.png'
import profiles from '../../../img/beertest.png'
import { AiOutlineMenu } from "react-icons/ai";
import { BsCart4, BsGrid1X2 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { BiLogOut, BiPurchaseTagAlt, BiSearchAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import style from './Sidebar.module.css'

export default function Sidebar() {

    return (
        <div className={style.sideBar}>
            <div className={style.logo_content}>
                <div className={style.logo}>
                    <img className={style.sombreo} src={logo2} alt="logo" />
                    <img className={style.logo_name} src={logo3} alt="logo" />
                </div>
            </div>
            <div className={style.menuBtn}> <AiOutlineMenu /></div>
            <ul className={style.nav_list}>
                <li>
                    <div className={style.search}>
                    <div className={style.links_icon}><BiSearchAlt className={style.links_icon_lupa} /> </div>
                    <input className={style.links_name} placeholder='Search...' />
                    </div>
                </li>
                <li>
                    <Link to='/test' className={style.link}>
                        <div className={style.links_icon}><BsGrid1X2 /> </div>
                        <span className={style.links_name}>DashBoard</span>
                    </Link>

                </li>
                <li>
                    <Link to='/test' className={style.link}>
                        <div className={style.links_icon}><FaUserCircle /> </div>
                        <span className={style.links_name}>Users</span>
                    </Link>

                </li>
                <li>
                    <Link to='/test' className={style.link}>
                        <div className={style.links_icon}><MdOutlineAdminPanelSettings /> </div>
                        <span className={style.links_name}>Sellers</span>
                    </Link>
                </li>
                <li>
                    <Link to='/test' className={style.link}>
                        <div className={style.links_icon}><BsCart4 /></div>
                        <span className={style.links_name}>Products</span>
                    </Link>
                </li>
                <li>
                    <Link to='/test' className={style.link}>
                        <div className={style.links_icon}><BiPurchaseTagAlt /> </div>
                        <span className={style.links_name}>Pusrchases</span>
                    </Link>
                </li>
            </ul>
            <div className={style.profile_content}>
                <div className={style.profile}>
                    <div className={style.profile_details}>
                    <img src={profiles} alt="" />
                        <div className={style.name_job}>
                            <div className={style.name}>JuanCho</div>
                            <div className={style.job}>Fullstack</div>
                        </div>
                    </div>
                    <div className={style.log_out}><BiLogOut/></div>
                </div>
            </div>
        </div>
    )
}