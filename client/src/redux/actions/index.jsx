import axios from "axios";
import {
  ALL_API,
  ALL_ID,
  ALL_NAME,
  GET_BEERS,
  GET_BEER_DETAIL,
  REMOVE_DETAIL,
  SEARCH_BAR,
  POST_BEER,
  POST_USER,
  SORT_BY_NAME,
  SORT_BY_PRICE,
  FILTER_BEER_BY_BREWERY,
  GET_ALL_BREWERIES,
} from "../const";

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
