import React from "react";
import * as actions from "../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
export default function FilterByBrewery() {
  const dispatch = useDispatch();
  const allSellers = useSelector((state) => state.allSellers);
  
  function handleFilter(e) {
    e.preventDefault();

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

        {allSellers.map((seller) => {
          return <option key={seller.id} value={seller.id.toString()}>{seller.name}</option>;
        })}
      </select>
    </div>
  );
}
