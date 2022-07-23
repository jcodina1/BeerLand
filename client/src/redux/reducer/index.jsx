import {
  GET_BEERS,
  GET_BEER_DETAIL,
  SEARCH_BAR,
  REMOVE_DETAIL,
  POST_BEER,
  GET_TYPE,
  POST_USER,
  FILTER_BY_BREWERY,
  SORT_BY_NAME,
} from "../const";

const initialState = {
  search: [],
  beers: [],
  allBeers: [],
  detail: {},
  brewery: [],
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
          ? state.allBeers.sort((a, b) => {
              a.name.localeCompare(b.name);
            })
          : state.allBeers.sort((a, b) => {
              b.name.localeCompare(a.name);
            });
      return {
        ...state,
        allBeers: sortedByName,
        filterPlaceholder: sortedByName,
      };
    case FILTER_BY_BREWERY:
      const filterBeersByBrewery = state.allBeers;
      const BreweryFiltered = filterBeersByBrewery.filter((c) => {
        return c.brewery.find((c) => {
          return c.name === action.payload;
        });
      });
      if (action.payload === "All") {
        return {
          ...state,
          beers: filterBeersByBrewery,
        };
      } else {
        return {
          ...state,
          beers: BreweryFiltered,
        };
      }

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
