import {
  GET_BEERS,
  GET_BEER_DETAIL,
  SEARCH_BAR,
  REMOVE_DETAIL,
  POST_BEER,
  GET_TYPE,
  POST_USER,
  FILTER_BEER_BY_BREWERY,
  SORT_BY_NAME,
  SORT_BY_PRICE,
} from "../const";

const initialState = {
  search: [],
  beers: [],
  allBeers: [],
  detail: {},
  allBreweries: [],
  userType: [],
  type: [],
  filterPlaceholder: [],
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case GET_BEERS:
      return {
        ...state,
        allBeers: action.payload,
        beers: action.payload,
      };

    case REMOVE_DETAIL:
      return {
        ...state,
        detail: [],
      };

    case GET_BEER_DETAIL: {
      return {
        ...state,
        detail: action.payload,
      };
    }
    case GET_TYPE: {
      return {
        ...state,
        type: action.payload,
      };
    }
    case SEARCH_BAR: {
      return {
        ...state,
        search: action.payload,
        allBeers: action.payload,
      };
    }
    case SORT_BY_NAME:
      let sortedByName =
        action.payload === "AtoZ"
          ? state.allBeers.sort(function (a, b) {
              return a.name.localeCompare(b.name);
            })
          : state.allBeers.sort(function (a, b) {
              return b.name.localeCompare(a.name);
            });
      return {
        ...state,
        beers: sortedByName,
        filterPlaceholder: sortedByName,
      };
    case SORT_BY_PRICE:
      let sortedByPrice =
        action.payload === "Low to High"
          ? state.allBeers.sort(function (a, b) {
              return a.price - b.price;
            })
          : state.allBeers.sort(function (a, b) {
              return b.price - a.price;
            });
      return {
        ...state,
        beers: sortedByPrice,
        filterPlaceholder: sortedByPrice,
      };

    case FILTER_BEER_BY_BREWERY:
      const preFilteredBeers = state.allBeers;
      const filteredBeers =
        action.payload === "All"
          ? preFilteredBeers
          : preFilteredBeers.filter((beer) =>
              beer.brewery.find((brewery) => brewery.name === action.payload)
            );
      return {
        ...state,
        beers: filteredBeers,
        filterPlaceholder: filteredBeers,
      };

    case POST_BEER:
      return {
        ...state,
      };

    case POST_USER:
      return {
        ...state,
      };

    default:
      return { ...state };
  }
}

export default Reducer;
