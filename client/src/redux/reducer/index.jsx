
import {ORDER_BY_NAME,FILTER_BY_BREWERY,} from '../const'


import {
  GET_BEERS, GET_BEER_DETAIL,SEARCH_BAR, REMOVE_DETAIL, POST_BEER, GET_TYPE} from "../const";



const initialState = {
  beers: [],
  allBeers: [],
  detail: {},
  brewery: [],
  userType: [],
  type: []


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
        detail: action.payload
      }
    }
    case GET_TYPE: {
      return {
        ...state,
        type: action.payload
      }
    }
    case SEARCH_BAR: {
      return {
        ...state,
        allBeers: action.payload
      }
    }
    case ORDER_BY_NAME:
      let orderBeersByName = action.payload === 'ASC' ? state.allBeers.sort((a, b) => {
        if (a.name < b.name) {
          return -1
        }
        if (a.name > b.name) {
          return 1
        }
        return 0
      }) :
        state.allBeers.sort((a, b) => {
          if (a.name < b.name) {
            return 1
          }
          if (a.name > b.name) {
            return -1
          }
          return 0
        })
      return {
        ...state,
        allBeers: orderBeersByName
      }
    case FILTER_BY_BREWERY:
      const filterBeersByBrewery = state.allBeers
      const BreweryFiltered = filterBeersByBrewery.filter((c) => {
        return c.brewery.find((c) => {
          return c.name === action.payload
        })
      })
      if (action.payload === 'All') {
        return {
          ...state,
          beers: filterBeersByBrewery
        }
      } else {
        return {
          ...state,
          beers: BreweryFiltered
        }
      }


    case POST_BEER:
      return {
        ...state
      };

    default:
      return { ...state };
  }
}

export default Reducer;
