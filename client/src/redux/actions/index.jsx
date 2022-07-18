import axios from "axios";

export function loadProducts() {
  return async function (dispatch) {
    const jsonBeers = await axios.get("http://localhost:3001/beers");
    return dispatch({
      type: "GET_BEERS",
      payload: jsonBeers.data,
    });
  };
}
