import { ORDER_BY_NAME, FILTER_BY_BREWERY, } from '../const'

import {
  GET_BEERS, GET_BEER_DETAIL, SEARCH_BAR, REMOVE_DETAIL, POST_BEER, GET_TYPE, POST_USER, REMOVE_ONE_FROM_CART, REMOVE_ALL_FROM_CART, ADD_TO_CART, GET_CART, TOTAL_PRICE, CHECKOUT_BEERS
} from "../const";

const initialState = {
  search: [],
  beers: [],
  allBeers: [],
  detail: {},
  brewery: [],
  userType: [],
  type: [],
  cart: [],
  infoBeers: [],
  infoSoldBeers: [],
  totalPrice: 0,
  user: {},
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case GET_BEERS:
      return {
        ...state,
        allBeers: action.payload,
        beers: action.payload,
      };

    case ADD_TO_CART:
      let newbeer = state.allBeers?.find((beer) => beer?.id === action.payload);
      newbeer.cant = 1;
      let carrito = JSON.parse(localStorage.getItem("carrito"));
      if (carrito) {
        carrito.push(newbeer);
        localStorage.setItem("carrito", JSON.stringify(carrito));
      } else {
        localStorage.setItem("carrito", JSON.stringify([newbeer]));
      }
      return {
        ...state,
        cart: JSON.parse(localStorage.getItem("carrito")),
      };

    case REMOVE_ALL_FROM_CART:
      localStorage.setItem("carrito", JSON.stringify([]));
      return {
        cart: [],
      };

    case REMOVE_ONE_FROM_CART:
      let beerToDelete = JSON.parse(localStorage.getItem("carrito")).filter(
        (beer) => beer.id !== action.payload
      );
      localStorage.setItem("carrito", JSON.stringify(beerToDelete));
      return {
        ...state,
        cart: beerToDelete,
      };

    case GET_CART:
      return {
        ...state,
        cart: JSON.parse(localStorage.getItem("carrito")),
      };

      
    case TOTAL_PRICE:
      return {
        ...state,
        totalPrice: action.payload,
      };

    case CHECKOUT_BEERS:
      return {
        ...state,
        infoBeers: action.payload,
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
    };

    case GET_TYPE: {
      return {
        ...state,
        type: action.payload
      }
    };

    case SEARCH_BAR: {
      return {
        ...state,
        search: action.payload,
        allBeers: action.payload
      }
    };

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
      };

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
      };

    case POST_BEER:
      return {
        ...state
      };

    case POST_USER:
      return {
        ...state
      };

    default:
      return { ...state };
  }
}

export default Reducer;
