
import {
  GET_BEERS, GET_BEER_DETAIL,
  SEARCH_BAR, REMOVE_DETAIL, POST_BEER
} from "../const";


const initialState = {
  beers: [],
  allBeers: [],
  detail: {},
  userType: [],
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case GET_BEERS:
      return {
        ...state,
        allBeers: action.payload,
        beers: action.payload,
      };


    case GET_BEER_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    case REMOVE_DETAIL:
      return {
        ...state,
        detail: [],
      };

    case SEARCH_BAR:
      return {
        ...state,
        allBeers: action.payload,
      };

    case POST_BEER:
      return {
        ...state
      };

    default:
      return { ...state };
  }
}
export default Reducer;
