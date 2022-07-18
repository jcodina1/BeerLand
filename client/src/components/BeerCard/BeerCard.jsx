import React from "react";
import { Link } from "react-router-dom";

export default function Card({ img, name, region, id }) {
  return (
    <div>
      <img src={img} alt="No img found :(" />
      <h3>{name}</h3>
      <h4>{region}</h4>
    </div>
  );
}
