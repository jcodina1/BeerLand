import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BeerCard from "../BeerCard/BeerCard";
import NavBar from "../NavBar/NavBar.jsx";
import { getFavDetail, getFavs, getUser } from "../../redux/actions";
import { useAuth } from "../Context/Contestautenticacion";
import "./userFavs.css"


export default function UserFavs() {
  const user2 = useSelector((state) => state.user);
  const favs = useSelector((state) => state.favs);
  const { user } = useAuth();
  const dispatch = useDispatch();

  if (user !== null) {
    var filtrado = user2.filter((e) => e.email === user.email);
  }

  useEffect(() => {
    dispatch(getUser());
  }, []);

  useEffect(() => {
    if (user !== null) {
      dispatch(getFavDetail(filtrado[0].id));
    }
  }, [user]);

  return (
    
    <>
    <NavBar />
    {user ?
    <>
    <div className="favs">
    <h2>My favorites</h2>
    <div className='catalogue'>
        {
          favs.length !==0?
          favs.map(e => {
            return (
              <BeerCard
              key={e.id} name={e.name} id={e.id} price={e.price} image={e.image}
              />
              )
            })
            :
            <h3>You have no favorites</h3>
          }
    </div>
  </div>
    </>:
    <div  className="aviso">
    <h2>You need to be logged in to access here</h2>
    <Link to={`/home`}>
    <button className='minimize'>Back home</button>
    </Link>
    </div>}

</>
)
}