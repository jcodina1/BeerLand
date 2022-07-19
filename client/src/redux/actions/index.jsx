import axios from "axios";
import ALL_API from "../const";

export function getAllBeers() {
  return async function (dispatch) {
    var allBeers = await axios.get("https://beerland.herokuapp.com/beer");
    return dispatch({
      type: "GET_BEERS",
      payload: allBeers.data,
    });
  };
}

export function getBeerDetail(id) {
  return async function (dispatch) {
    const beerById = await axios.get(
      `https://beerland.herokuapp.com/beer/id/${id}`
    );
    return dispatch({
      type: "GET_BEER_DETAIL",
      payload: beerById.data,
    });
  };
}

export const removeDetail = () => {
  return {
    type: "REMOVE_DETAIL",
  };
};
