import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BeerCard from "../BeerCard/BeerCard";
import NavBar from "../NavBar/NavBar.jsx";
import { getFavDetail, getFavs, getUser } from "../../redux/actions";
import { useAuth } from "../Context/Contestautenticacion";
import "../UserFavs/userFavs.css";

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
    <div>
      <NavBar />
      <div>
        <h2>My Favourites</h2>
      </div>

      <div className="hola">
        {!favs && !favs
          ? "hola"
          : favs.map((e) => {
              return (
                <BeerCard
                  name={e.name}
                  id={e.id}
                  price={e.price}
                  image={e.image}
                />
              );
            })}
        <Link to="/home">
          <button>Return</button>
        </Link>
      </div>
    </div>
  );
}
