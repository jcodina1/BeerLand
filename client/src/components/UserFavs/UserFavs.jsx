import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BeerCard from "../BeerCard/BeerCard";
import NavBar from "../NavBar/NavBar.jsx";
import { getFavs } from "../../redux/actions";

export default function UserFavs() {
  const user = useSelector((state) => state.user);
  const favs = useSelector((state) => state.favs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavs(user.id));
  }, []);

  return (
    <div>
      <NavBar />
      <div>
        <h2>My Favourites</h2>
      </div>
      <div>
        {favs.length !== 0 ? (
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
        )}
      </div>
    </div>
  );
}
