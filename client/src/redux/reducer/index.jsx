const initialState = {
  beers: [],
  allBeers: [],
  detail: {},
  userType: [],
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_BEERS":
      return {
        ...state,
        allBeers: action.payload,
      };
    case "GET_BEER_DETAIL":
      return {
        ...state,
        detail: action.payload,
      };
    case "REMOVE_DETAIL":
      return {
        ...state,
        detail: [],
      };

    default:
      return { ...state };
  }
}
export default Reducer;
