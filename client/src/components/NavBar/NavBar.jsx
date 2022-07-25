<<<<<<< HEAD

=======
>>>>>>> develop
import React, { useState } from "react";

import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "../NavBar/NavBar.module.css";
import BeerLogo from "../../img/BeerLogo.png";
import { useAuth } from "../context/contestautenticacion";
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
<<<<<<< HEAD
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
       <Link to='/test'>
          <button className={style.cartBtn}></button>
        </Link>
        
        {user ? '' :
          <Link to='/login'>
            <button className={style.button}>Login</button>
          </Link>
        }


        {/* <Link to='/login'>
=======
      <Link to="/home">
        <span>
          <img
            id="BeerLogo"
            src={BeerLogo}
            width="120px"
            height="80px"
            alt="Beer"
          />
        </span>
      </Link>
      <SearchBar setPage={setPage} />
      {user ? (
        ""
      ) : (
        <Link to="/login">
          <button>Login</button>
        </Link>
      )}
>>>>>>> develop

      <Link to="/login">
        <button>Add</button>
<<<<<<< HEAD
      </Link> */}


        <button className={style.button} onClick={handleLogOut}>LogOut</button>


        {/*       <button onClick={() => setCart(true)}>Cart</button>
      {cart ? <><Cart/><button onClick={() => setCart(false)}>X</button></> : ''}
 */}
       </div>

       
      </div>



=======
      </Link>

      <h1>Hello {user ? user.email : ""}</h1>
      <button onClick={handleLogOut}>LogOut</button>

      {/*       <button onClick={() => setCart(true)}>Cart</button>
      {cart ? <><Cart/><button onClick={() => setCart(false)}>X</button></> : ''}
 */}

      <Link to="/cart">
        <button>Cart</button>
      </Link>
>>>>>>> develop
    </nav>
  );
}
