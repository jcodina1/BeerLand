import {
  GET_BEERS,
  SEARCH_BAR,
  GET_BEER_DETAIL,
  REMOVE_DETAIL,
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

    default:
      return { ...state };
  }
}
export default Reducer;
