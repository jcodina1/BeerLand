/* eslint-disable no-unused-vars */
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import style from "../BeerCard/BeerCard.module.css";
import { useAuth } from "../Context/Contestautenticacion";
import { addToCart, getFavDetail, helpCall } from "../../redux/actions";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { getUser } from "../../redux/actions";
import Swal from "sweetalert2";
import { deleteFavs, postFavs } from "../../redux/actions";
import { logEvent } from "firebase/analytics";
import { BsCartCheckFill, BsCartPlus } from "react-icons/bs";


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
    if (filtrado.length !== 0) {
      var obj = {
        idUser: filtrado[0].id,
        idBeer: id
      };
      helpCall(`user/fav/beer?idUser=${obj.idUser}&idBeer=${obj.idBeer}`)
        .then(res => setIsFav(res))
    }
  }


  useEffect(() => {
    dispatch(getUser());
  }, []);


  useEffect(() => {
    if (Object.keys(user2) !== 0) {
      setLoggeddIn(true);
    }
    if (Object.keys(user2) === 0) {
      setLoggeddIn(false);
    }
  }, [id, user2]);


  function handleFav() {
    if (isFav == false) {
      if (user !== null) {
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
      dispatch(deleteFavs(obj.idUser, obj.idBeer));
      setIsFav(false);
    }
  }

  const cart = useSelector((state) => state.cart);
  const [cartIcon, setCartIcon] = useState(
    <BsCartPlus size={25} onClick={handleClick} className="icon" />
  );
  let beerinCart = JSON.parse(localStorage.getItem("carrito"))?.filter(
    (e) => e.id === id
  );

  function handleClick() {
    if (!beerinCart?.length) {
      dispatch(addToCart(id))
      const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-start',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'success',
        title: `Added "${name}" to cart`,
      })
      setCartIcon(<BsCartCheckFill size={25} className="done" />)
    }
  }

  return (
    <div className={style.card}>
      <div className={style.circle}>
      <Link to={`/beers/detail/${id}`} className={style.link}>
        <img src={image} alt="No img found " height='450px' width='360px' />
      </Link>
        <Link to={`/beers/detail/${id}`} className={style.link}>
          <div className={style.content}>
            <h2>{name}</h2>
          </div>
        </Link>
        <div className={style.content}>
          <h4>Price: $ {price}</h4>
          <div className={style.heart}>
          {isFav == true ? (
            <AiFillHeart size={35} onClick={handleFav} />
          ) : (
            <AiOutlineHeart size={35} onClick={handleFav} />
          )}
        </div>
        <div className={style.addTo}>
            <p>Add to Cart</p>
            <button>
              {beerinCart?.length ? (
                <BsCartCheckFill size={25} className={style.done} />
              ) : (
                cartIcon
              )}
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}