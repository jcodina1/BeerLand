import React from "react";
import * as actions from "../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
export default function FilterByBrewery() {
  const dispatch = useDispatch();
  const allBreweries = useSelector((state) => state.allBreweries);

  function handleFilter(e) {
    e.preventDefault();
    console.log(e.target.value);
    if (e.target.value !== "All") {
      dispatch(actions.filterBeersByBrewery(e.target.value));
    } else {
      dispatch(actions.getAllBeers());
    }
  }
  return (
    <div>
      <select className={styles.select} onChange={(e) => handleFilter(e)}>
        <option value="All">Filter by Brewery</option>

        {allBreweries.map((brewery) => {
          return (
            <option value={brewery.name}>{brewery.name.toLowerCase()}</option>
          );
        })}
      </select>
    </div>
  );
}
