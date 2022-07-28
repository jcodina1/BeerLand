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

  if (user !== null) {
    var filtrado = user2.filter((e) => e.email === user.email);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <div>
        <h2>My Favourites</h2>
      </div>
      {filtrado &&
        filtrado[0].beers?.map((e) => {
          return (
            <BeerCard id={e.id} name={e.name} image={e.image} price={e.price} />
            // <div>
            //   <h1>{e.name}</h1>
            //   <h1>id:{e.id}</h1>
            //   <img src={e.image} width="15%" height="15%" alt="Not Found" />
            //   <h2>Price: ${e.price}</h2>
            // </div>
          );
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
        <Link to="/home">
          <button>Volver</button>
        </Link>
      </div>
    </div>
  );
}
