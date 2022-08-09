import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/actions";
import { useSelector } from "react-redux";
import { BsCartPlus } from "react-icons/bs";
import { BsCartCheckFill } from "react-icons/bs";
import Swal from "sweetalert2";
import style from "../DetailCompra/DetailCompra.module.css";

/* import './styles.css' */

export default function Compra({ id, name, price, stock }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [cartIcon, setCartIcon] = useState(
    <BsCartPlus size={25} onClick={handleClick} className="icon" />
  );
  let beerinCart = JSON.parse(localStorage.getItem("carrito"))?.filter(
    (e) => e.id === id
  );

  function handleClick() {
    if (!beerinCart?.length) {
      dispatch(addToCart(id));
      const Toast = Swal.mixin({
        toast: true,
        position: "bottom-start",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: `Added "${name}" to cart`,
      });
      setCartIcon(<BsCartCheckFill size={25} className="done" />);
    }
  }

  return (
    <div className={style.detailCompra}>
      <h3
        style={{
          borderBottom: "1px solid gray",
          textAlign: "center",
          paddingBottom: "10px",
        }}
      >
        ${price}
      </h3>
      {parseInt(stock) === parseInt(0) ? (
        <h3>No more stock</h3>
      ) : (
        <div style={{ marginTop: "-20px" }}>
          <div className={style.addTo}>
            <p>Available Stock:</p>
            <p className={style.spaceL}>{stock}</p>
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
      )}
      {stock == 0 ? null : (
        <Link to={"/cart"}>
          <button onClick={handleClick} className={style.buy}>
            Buy This Beer
          </button>
        </Link>
      )}
    </div>
  );
}
