import axios from "axios";
import {GET_BEERS, ALL_API} from '../const'

export function getAllBeers() {
  return async function (dispatch) {
    const allBeers = await axios.get(ALL_API)
    .then((response) => {
      return dispatch({
        type: GET_BEERS,
        payload: allBeers.data,
      });
    }).catch((error)=>{
      console.log(error)
    })
  };
}
