
import { ORDER_BY_NAME, FILTER_BY_SELLER, FILTER_SCORE, ORDER_BY_PRICE, HIGHER_PRICE, ASC } from '../const'


import {
  GET_BEERS, GET_BEER_DETAIL, SEARCH_BAR, REMOVE_DETAIL, POST_BEER, GET_TYPE, POST_USER, GET_SELLERS
} from "../const";



const initialState = {
  search: [],
  beers: [],
  allBeers: [],
  detail: {},
  allSellers: [],
  seller: [],
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
        search: action.payload,
        allBeers: action.payload
      }
    }
    case ORDER_BY_NAME:
            let sortedArr = action.payload === 'asc' ?
                state.allBeers.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1
                    }
                    if (b.name > a.name) {
                        return -1
                    }
                    return 0

                }) :
                state.allBeers.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1
                    }
                    if (b.name > a.name) {
                        return 1
                    }
                    return 0

                })
                return {
                  ...state,
                  allBeers: sortedArr
               
          
                };

    // case ORDER_BY_NAME:
    //         const aToZ = action.payload === 'Asc'
    //         ? state.allBeers.sort((a, b) => a.name.localeCompare(b.name))
    //         : state.allBeers.sort((a, b) => b.name.localeCompare(a.name));
            
    //         return{
    //             ...state,
    //             allBeers: aToZ
    //         }




    case FILTER_BY_SELLER:
      return{
        ...state,
        allBeers: action.payload === 'ALL' ? state.beers
        : state.seller.filter(e => e.beers.map((e) => e.sellerId).includes(action.payload))
      };

    case POST_BEER:
      return {
        ...state
      };

    case POST_USER:
      return {
        ...state
      };

    case FILTER_SCORE:
      return {
        ...state,
        allBeers: action.payload,
      };

    case ORDER_BY_PRICE: {
      let orderBeersByPrice = action.payload === HIGHER_PRICE ? state.allBeers.sort((a, b) => {
        if (a.price < b.price) {
          return -1
        }
        if (a.price > b.price) {
          return 1
        }
        return 0
      }) :
        state.allBeers.sort((a, b) => {
          if (a.price < b.price) {
            return 1
          }
          if (a.price > b.price) {
            return -1
          }
          return 0
        })
      return {
        ...state,
        allBeers: orderBeersByPrice
      }
    }

    case GET_SELLERS:
      return {
        ...state,
        allSellers: action.payload,
        sellers: action.payload
      };


    default:
      return { ...state };
  }
}

export default Reducer;
