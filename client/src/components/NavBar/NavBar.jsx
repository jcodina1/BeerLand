import React from "react";
import { Link } from "react-router-dom";
import SearchBar from '../SearchBar/SearchBar'
import style from '../NavBar/NavBar.module.css'
import BeerLogo from '../../img/BeerLogo.png'
import { useAuth } from "../context/authContext";

export default function NavBar({setPage }) {

  const {salir, user} = useAuth()
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

    <Link to='/login'>
        <button>Add</button>
      </Link>
      
      <h1>Hello {user ? user.email : ''}</h1>
      <button onClick={handleLogOut}>LogOut</button>
    </nav>
  )
}
