const initialState = {
  beers: [],
  allBeers: [],
  detail: {},
  userType: []
};

function Reducer(state = initialState, action) {
  switch (action.type) {


    case 'GET_BEERS':
      return {
        ...state,
        allBeers: action.payload,
      };

    default:
      return { ...state };
  }
}
export default Reducer;
