import axios from "axios";
import{ALL_API} from '../const'
export function getAllBeers() {

  return async function (dispatch) {

    var allBeers = await axios.get(ALL_API)
      return dispatch({
        type: 'GET_BEERS',
        payload: allBeers.data,
      });
    
    }
  };

