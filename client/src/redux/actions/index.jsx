import axios from "axios";
import {ALL_API, ALL_ID, ALL_NAME, ORDER_BY_NAME, ORDER_BY_PRICE,
  GET_BEERS, GET_BEER_DETAIL, FILTER_BY_BREWERY, GET_TYPE,
  REMOVE_DETAIL, SEARCH_BAR, POST_BEER,POST_SELLER, POST_USER, ALL_SELLERS, GET_SELLERS,FILTER_BY_SELLER } from "../const";

export function getAllBeers() {
  return async function (dispatch) {
    var allBeers = await axios.get(ALL_API);
    return dispatch({
      type: GET_BEERS,
      payload: allBeers.data,
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
};

export const removeDetail = () => {
  return {
    type: REMOVE_DETAIL,
  };
};

export function searchBar(payload){
  return async function(dispatch){
      try{
          const search = await axios.get(ALL_NAME + payload);
          return dispatch ({
              type: SEARCH_BAR,
              payload: search.data
          })
      } catch(error){
          if(error.response){
              alert(error.response.data)
          }
      }
  }
};

export function postBeer(payload){
  return async function(dispatch){
    try{
      const post = await axios.post(POST_BEER, payload);
      return post;
    }catch(error){
      if(error.response){
        return alert(error.response.data)
      }
    }
  }
};

export function postUser(payload){
  return async function(dispatch){
    try{
      const post = await axios.post(POST_USER, payload);
      return post;
    }catch(error){
      if(error.response){
        return alert(error.response.data)
      }
    }
  }
};

export function orderByName(payload) {
  return {
    type: ORDER_BY_NAME,
    payload
  }
}
export function orderByPrice(payload) {
  return {
    type: ORDER_BY_PRICE,
    payload
  }
}
export function filterBeersBySeller(payload) {
  return {
    type: FILTER_BY_SELLER,
    payload
  }
}
export function getTypes(payload){
  return{
    type:GET_TYPE,
    payload
  }
}

export function getAllSellers() {
  return async function (dispatch) {
    var allSellers = await axios.get(ALL_SELLERS);
    return dispatch({
      type: GET_SELLERS,
      payload: allSellers.data,
    });
  };
}


export function postSeller(payload){
  return async function(dispatch){
    try{
      const post = await axios.post(POST_SELLER, payload);
      return post;
    }catch(error){
      if(error.response){
        return alert(error.response.data)
      }
    }
  }
};