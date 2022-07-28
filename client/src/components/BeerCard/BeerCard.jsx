/* eslint-disable no-unused-vars */
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import style from "../BeerCard/BeerCard.module.css";
import { useAuth } from "../Context/Contestautenticacion";

import { helpCall } from "../../redux/actions";

import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { getUser } from "../../redux/actions";

import Swal from "sweetalert2";
import { deleteFavs, postFavs } from "../../redux/actions";

import { logEvent } from "firebase/analytics";


export default function BeerCard({
  id,
  name,
  price,
  image,

  // type,
  // origin,
}) {
  const dispatch = useDispatch();

  const user2 = useSelector((state) => state.user);

  const { user } = useAuth();

  const [loggedIn, setLoggeddIn] = useState(false);
  const [isFav, setIsFav] = useState(false);


  if (user !== null) {
    var filtrado = user2.filter((e) => e.email === user.email);
    if (user2.length !== 0) {
    var obj = {
      idUser: filtrado[0].id,
      idBeer: id
    };
    helpCall(`/user/fav/beer?idUser=${obj.idUser}&idBeer=${obj.idBeer}`)
    .then(res => setIsFav(res))
  }
  }

  
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);


  useEffect(() => {
    if (Object.keys(user2) !== 0) {
      setLoggeddIn(true);
    }
    if (Object.keys(user2) === 0) {
      setLoggeddIn(false);
    }
  }, [id, user2]);

  function handleFav() {
    console.log(isFav, "handle");
    if (isFav == false) {
      if (loggedIn) {
        dispatch(postFavs(obj));
        setIsFav(true);
        console.log(isFav, "cambio de estasdo a true, deberia");
      } else
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You must login first to do this!",
        });
    }
    if (isFav == true) {
      dispatch(deleteFavs(obj.idBeer, obj.idUser));
      setIsFav(false);

    }
  }

  return (
    <div className={style.card}>
      <div className={style.circle}>
          <div className={style.content}>
        <Link to={`/beers/detail/${id}`}>
            <h2>{name}</h2>
            <img src={image} alt="No img found :(" />
            <h4>Price: $ {price}</h4>
        </Link>
        <div style={{ justifySelf: "flex-end" }}>
          {isFav == true ? (
            <AiFillHeart size={35} onClick={handleFav} />
          ) : (
            <AiOutlineHeart size={35} onClick={handleFav} />
          )}
        </div>
          </div>
      </div>
    </div>
  );
}