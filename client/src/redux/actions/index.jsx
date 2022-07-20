import axios from "axios";
import {ALL_API, ALL_ID, ALL_NAME,
  GET_BEERS, GET_BEER_DETAIL,
  REMOVE_DETAIL, SEARCH_BAR, POST_BEER } from "../const";

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