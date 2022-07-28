import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/actions";
import { useSelector } from "react-redux";
import { BsCartPlus } from "react-icons/bs";
import { BsCartCheckFill } from "react-icons/bs";
/* import './styles.css' */

export default function Compra({ id, price, stock }) {
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
      setCartIcon(<BsCartCheckFill size={25} className="done" />);
    }
  }

  return (
    <div className="detailCompra">
      <h3
        style={{
          borderBottom: "1px solid gray",
          textAlign: "center",
          paddingBottom: "10px",
        }}
      >
        ${price}
      </h3>
      {stock == 0 ? (
        <h3>No more stock</h3>
      ) : (
        <div style={{ marginTop: "-20px" }}>
          <div className="addTo">
            <p>Available Stock:</p>
            <p style={{ marginRight: "10px" }}>{stock}</p>
          </div>
          <div className="addTo">
            <p>Add to Cart</p>
            <button>
              {beerinCart?.length ? (
                <BsCartCheckFill size={25} className="done" />
              ) : (
                cartIcon
              )}
            </button>
          </div>
        </div>
      )}
      {stock == 0 ? null : (
        <Link to={"/cart"}>
          <button onClick={handleClick} className="buy">
            Buy This Beer
          </button>
        </Link>
      )}
    </div>
  );
}
