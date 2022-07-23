import React, { useEffect } from "react";
import * as action from "../../../../redux/actions";
import { useDispatch } from "react-redux";
import styles from "./styles.module.css";

export default function SortByName({ setOrder, setCurrentPage }) {
  const dispatch = useDispatch();
  function handleSort(e) {
    e.preventDefault();
    if (e.target.value !== "All") {
      dispatch(action.sortByName(e.target.value));
      setCurrentPage(1);
      setOrder(e.target.value);
    } else {
      dispatch(action.loadCountries());
      setCurrentPage(1);
      setOrder(e.target.value);
    }
  }
  return (
    <div>
      <select className={styles.select} onChange={(e) => handleSort(e)}>
        <option value="All" key="All">
          Show All
        </option>
        <option value="AtoZ" key="AtoZ">
          A - Z
        </option>
        <option value="not AtoZ :P" key="ZtoA">
          Z - A
        </option>
      </select>
    </div>
  );
}
