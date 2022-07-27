/* eslint-disable no-unused-vars */
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import style from "../BeerCard/BeerCard.module.css";
import { useAuth } from "../Context/Contestautenticacion";

import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { getUser } from "../../redux/actions";

import Swal from "sweetalert2";
import { deleteFavs, postFavs } from "../../redux/actions";

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
  const filtrado = user2.filter((e) => e.email === user.email);

  const [loggedIn, setLoggeddIn] = useState(false);
  const [isFav, setIsFav] = useState(false);

  if (user2.length !== 0) {
    var obj = {
      idUser: filtrado[0].id,
      idBeer: id,
    };
  }

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    if (Object.keys(user) !== 0) {
      setLoggeddIn(true);
    }
    if (Object.keys(user) === 0) {
      setLoggeddIn(false);
    }
  }, [id, user]);

  function handleFav() {
    if (isFav == false) {
      if (loggedIn) {
        dispatch(postFavs(obj));

        setIsFav(true);
      } else
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You must login first to do this!",
        });
    }
    if (isFav == true) {
      dispatch(deleteFavs(user.idUser, id));
      setIsFav(false);
    }
    console.log(obj);
  }

  return (
    <div>
      <Link to={`/beers/detail/${id}`}>
        <div className={style.cardContainer}>
          <h2>{name}</h2>
          <img className={style.cardImg} src={image} alt="No img found :(" />
          <h4>Price: $ {price}</h4>
          {/* <h4 className={style.content}>{type}</h4>
        <h4 className={style.content}>{origin}</h4> */}
        </div>
      </Link>
      <div style={{ justifySelf: "flex-end" }}>
        {isFav ? (
          <AiFillHeart size={35} onClick={handleFav} />
        ) : (
          <AiOutlineHeart size={35} onClick={handleFav} />
        )}
      </div>
    </div>
  );
}
