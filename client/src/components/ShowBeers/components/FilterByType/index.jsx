import React from "react";
import * as action from "../../../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles.module.css";

export default function FilterByType() {
  const dispatch = useDispatch();
  let allBeers = useSelector((state) => state.allBeers);
  let types = allBeers.map((beer) => beer.tipo);
  let prunedTypes = new Set(types);
  types = [...prunedTypes];

  function handleChange(e) {
    e.preventDefault();
    dispatch(action.filterBeersByType(e.target.value));
    dispatch(action.setPage(1));
  }

  return (
    <nav className={styles.nav}>
      <select className={styles.select} onChange={(e) => handleChange(e)}>
        <option value="All">Filter by Beer Type</option>
        {types.map((type) => (
          <option key={type.toString()} value={type.toString()}>
            {type}
          </option>
        ))}
      </select>
    </nav>
  );
}
