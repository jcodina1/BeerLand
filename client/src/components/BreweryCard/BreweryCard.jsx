import { React } from "react";
import { Link } from "react-router-dom";
import style from "../BreweryCard/BreweryCard.module.css";

export default function BreweryCard({
  id,
  name,
  image,
 
}) {
  return (
    <div className={style.card}>
      <div className={style.circle}>
      <Link to={`/seller/detail/${id}`} className={style.link}>
        <img src={image} alt="No img found " />
      </Link>
        <Link to={`/seller/detail/${id}`} className={style.link}>
          <div className={style.content}>
            <h2>{name}</h2>
          </div>
        </Link>
       
        
      </div>
    </div>
  );
}