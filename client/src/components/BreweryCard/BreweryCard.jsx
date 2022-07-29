import { React } from "react";
import { Link } from "react-router-dom";
import style from "../BeerCard/BeerCard.module.css";

export default function BreweryCard({
  id,
  name,
  description,
  image,
 
}) {
  return (
    <Link to={`/sellers/detail/${id}`}>
      <div className={style.cardContainer}>
        <h1>{name}</h1>
        <img className={style.cardImg} src={image} alt="No img found :(" />
        <p>{description}</p>
       
      </div>
    </Link>
  );
}