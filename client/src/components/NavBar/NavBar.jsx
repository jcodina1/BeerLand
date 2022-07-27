import React, { useState } from "react";

import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "../NavBar/NavBar.module.css";
import BeerLogo from "../../img/BeerLogo.png";
import { useAuth } from "../Context/Contestautenticacion";
import Cart from "../Cart/Cart";

export default function NavBar({ setPage }) {
  const { salir, user } = useAuth();
  console.log(user);
  const [cart, setCart] = useState(false);

  const handleLogOut = async () => {
    await salir();
  };

  return (
    <nav className={style.navbar}>
      <div >
        <Link to='/home'>
          <span >
            <img className={style.logo} id='BeerLogo' src={BeerLogo} alt='Beer' />
          </span>
        </Link>
      </div>
      <div className={style.space}>
        <SearchBar setPage={setPage} />
      </div>

      <div className={style.infoDistribution}>
        <div className={style.space}>
          <h1>Hello {user ? user.email : ''}</h1>
        </div>

        <div className={style.buttonlink}>
          <Link to='/cart'>
            <button className={style.cartBtn}></button>
          </Link>

          {user ? '' :
            <Link to='/login'>
              <button className={style.button}>Login</button>
            </Link>
          }
           { !user ? '' :
          <button className={style.button} onClick={handleLogOut}>LogOut</button>
        }
          </div>
      </div>

    </nav>
  )
}