import axios from "axios";
import {
  ALL_API,
  ALL_ID,
  ALL_NAME,
  GET_BEERS,
  GET_BEER_DETAIL,
  REMOVE_DETAIL,
  SEARCH_BAR,
  UPDATE_BEER,
  POST_BEER,
  POST_USER,
  REMOVE_ONE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  ADD_TO_CART,
  GET_CART,
  TOTAL_PRICE,
  CHECKOUT_BEERS,
  SORT_BY_NAME,
  SORT_BY_PRICE,
  FILTER_BEER_BY_BREWERY,
  GET_ALL_BREWERIES,
  SET_PAGE,
  ALL_SELLERS,
  GET_SELLERS,
  POST_SELLER,

  POST_FAVS,
  GET_FAVS,
  FAVS,
} from "../const";

export function addToCart(id) {
  return {
    type: ADD_TO_CART,
    payload: id,
  };
}

export function removeAllFromCart() {
  return {
    type: REMOVE_ALL_FROM_CART,
  };
}

export function removeOneFromCart(id) {
  console.log(id);
  return {
    type: REMOVE_ONE_FROM_CART,
    payload: id,
  };
}

export function getCart() {
  return { type: GET_CART };
}

export function totalPrice(payload) {
  return { type: TOTAL_PRICE, payload };
}

export function infoBeers(payload) {
  return { type: CHECKOUT_BEERS, payload };
}

export function getAllBeers() {
  return async function (dispatch) {
    let allBeers = await axios.get(ALL_API);
    return dispatch({
      type: GET_BEERS,
      payload: allBeers.data,
    });
  };
}

export function getAllBreweries() {
  return async function (dispatch) {
    let allBreweries = await axios.get("http://localhost:3001/seller");
    return dispatch({
      type: GET_ALL_BREWERIES,
      payload: allBreweries.data,
    });
  };
}

export function getBeerDetail(id) {
  return async function (dispatch) {
    const beerById = await axios.get(ALL_ID + id);
    return dispatch({
      type: GET_BEER_DETAIL,
      payload: beerById.data,
    });
  };
}

export const removeDetail = () => {
  return {
    type: REMOVE_DETAIL,
  };
};

export function searchBar(payload) {
  return async function (dispatch) {
    try {
      const search = await axios.get(ALL_NAME + payload);
      return dispatch({
        type: SEARCH_BAR,
        payload: search.data,
      });
    } catch (error) {
      if (error.response) {
        alert(error.response.data);
      }
    }
  };
}

export function postBeer(payload) {
  return async function (dispatch) {
    try {
      const post = await axios.post(POST_BEER, payload);
      return post;
    } catch (error) {
      if (error.response) {
        return alert(error.response.data);
      }
    }
  };
}

export function postUser(payload) {
  return async function (dispatch) {
    try {
      const post = await axios.post(POST_USER, payload);
      return post;
    } catch (error) {
      if (error.response) {
        return alert(error.response.data);
      }
    }
  };
}

export function setPage(num) {
  return async function (dispatch) {
    try {
      return dispatch({ type: SET_PAGE, payload: num });
    } catch (error) {
      console.log(error);
    }
  };
}

export function sortByName(payload) {
  return {
    type: SORT_BY_NAME,
    payload,
  };
}

export function sortByPrice(payload) {
  return {
    type: SORT_BY_PRICE,
    payload,
  };
}

export function filterBeersByBrewery(payload) {
  return {
    type: FILTER_BEER_BY_BREWERY,
    payload,
  };
}

export function updateBeer(data, id) {
  return (dispatch) => {
    axios
      .put(`http://localhost:3001/beer/update/${id}`, data)
      .then((response) => dispatch({ type: UPDATE_BEER }))
      .catch((e) => {
        console.log(e);
      });
  };
}

export function getSellers() {
  return async function (dispatch) {
    let allSellers = await axios.get(ALL_SELLERS);
    return dispatch({
      type: GET_SELLERS,
      payload: allSellers.data,
    });
  };
}

export function postSeller(payload) {
  return async function (dispatch) {
    try {
      const post = await axios.post(POST_SELLER, payload);
      return post;
    } catch (error) {
      if (error.response) {
        return alert(error.response.data);
      }
    }
  };
}

export function postFavs(obj) {
  return async function (dispatch) {
    try {
      const response = await axios.post(FAVS, obj);
      return dispatch({ type: POST_FAVS, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getFavs(user) {
  return async function (dispatch) {
    try {
      const response = await axios.get(FAVS);
      return dispatch({ type: GET_FAVS, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
}
