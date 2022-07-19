import axios from "axios";

export function getAllBeers() {

  return async function (dispatch) {

    var allBeers = await axios.get('http://localhost:3001/beer')
      return dispatch({
        type: 'GET_BEERS',
        payload: allBeers.data,
      });
    
    }
  };

