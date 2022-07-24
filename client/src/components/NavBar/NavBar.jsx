import React from "react";
import { Link } from "react-router-dom";
import SearchBar from '../SearchBar/SearchBar'
import style from '../NavBar/NavBar.module.css'
import BeerLogo from '../../img/BeerLogo.png'
import { useAuth } from "../context/contestautenticacion";
import { authContext } from "../context/contestautenticacion";
import { useContext } from "react";

export default function NavBar({setPage }) {

  const {user, salir} = useAuth()
  console.log(user)

   const handleLogOut = async () => {
     await salir()
   }
   
  return (
    <nav className={style.navbar}>
      <Link to='/home'>
        <span>
          <img id='BeerLogo' src={BeerLogo} width='120px' height='80px' alt='Beer' />
        </span>
      </Link>
      <SearchBar setPage={setPage}/>
      { user ? '':
        <Link to='/login'>
        <button>Login</button>
      </Link>
      }

    <Link to='/add'>
        <button>Add</button>
      </Link>
      
      <h1>Hello {user ? user.email : ''}</h1>
      { !user ? '':
      <button onClick={handleLogOut}>LogOut</button>
      }
    </nav>
  )
}
