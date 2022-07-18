/* eslint-disable no-fallthrough */
const initialState = {
  beer: [],
  beers: [],
  detail: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_BEERS":
      return {
        ...state,
        activities: action.payload,
      };

    default:
      return { ...state };
  }
}
export default rootReducer;
