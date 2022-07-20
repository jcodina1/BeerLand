import { GET_BEERS, SEARCH_BAR  } from "../const";

const initialState = {
  beers: [],
  allBeers: [],
  detail: {},
  userType: []
};

function Reducer(state = initialState, action) {
  switch (action.type) {


    case GET_BEERS:
      return {
        ...state,
        allBeers: action.payload,
        beers: action.payload
      };
     
    case SEARCH_BAR:
      return {
        ...state,
        allBeers: action.payload
      }  

    default:
      return { ...state };
  }
}
export default Reducer;
