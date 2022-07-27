import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BeerCard from "../BeerCard/BeerCard";
import NavBar from "../NavBar/NavBar.jsx";
import { getFavs } from "../../redux/actions";
import { useAuth } from "../Context/Contestautenticacion";
import { getUser } from "../../redux/actions";

export default function UserFavs() {
  const favs = useSelector((state) => state.favs);

  const user2 = useSelector((state) => state.user);

  const { user } = useAuth();
  console.log(user);

  const filtrado = user2.filter((e) => e.email === user.email);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <div>
      <NavBar />
      <div>
        <h2>My Favourites</h2>
      </div>
      {filtrado[0]?.map((e) => {
        return <div>{e.beers}</div>;
      })}
      <div>
        {/* {favs.length !== 0 ? (
          favs.map((beer) => {
            return (
              <BeerCard
                name={beer.name}
                image={beer.image}
                author={beer.author}
                price={beer.price}
                id={beer.id}
              ></BeerCard>
            );
          })
        ) : (
          <h3>You have no favorites</h3>
        )} */}
      </div>
    </div>
  );
}
