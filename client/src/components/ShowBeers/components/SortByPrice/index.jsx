import React from "react";
import * as actions from "../../../../redux/actions";
import { useDispatch } from "react-redux";
import styles from "./styles.module.css";

export default function SortByPrice({ setOrder, setCurrentPage }) {
  const dispatch = useDispatch();

  function handleSort(e) {
    e.preventDefault();
    if (e.target.value !== "All") {
      dispatch(actions.sortByPrice(e.target.value));
    } else {
      dispatch(actions.getAllBeers())();
    }
    setCurrentPage(1);
    setOrder(e.target.value);
  }

  return (
    <div>
      <div>
        <select className={styles.select} onChange={(e) => handleSort(e)}>
          <option value="All" key="All">
            Sort by Price!
          </option>
          <option value="Low to High" key="High">
            Low to High
          </option>
          <option value="High" key="Low">
            High to Low
          </option>
        </select>
      </div>
    </div>
  );
}
