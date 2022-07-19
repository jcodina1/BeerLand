import React from "react";
import { Link } from "react-router-dom";
import SearchBar from '../SearchBar/SearchBar'
import style from '../NavBar/NavBar.module.css'
import BeerLogo from '../../img/BeerLogo.png'

export default function NavBar() {
  return (
    <nav className={style.navbar}>
      <Link to='/home'>
        <span>
          <img id='BeerLogo' src={BeerLogo} width='120px' height='80px' alt='Beer' />
        </span>
      </Link>
      <SearchBar />
    </nav>
  )
}
