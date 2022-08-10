import {
  GET_BEERS,
  GET_BEER_DETAIL,
  SEARCH_BAR,
  REMOVE_DETAIL,
  POST_BEER,
  GET_TYPE,
  POST_USER,
  REMOVE_ONE_FROM_CART,
  UPDATE_BEER,
  REMOVE_ALL_FROM_CART,
  ADD_TO_CART,
  GET_CART,
  TOTAL_PRICE,
  CHECKOUT_BEERS,
  FILTER_BEER_BY_BREWERY,
  SORT_BY_NAME,
  SORT_BY_PRICE,
  SET_PAGE,
  GET_ALL_SELLERS,
  POST_SELLER,
  POST_FAVS,
  GET_USER,
  ALL_USERS,
  FILTER_BEER_BY_TYPE,
  GET_SELLERS,
  DELETE_FAVS,
  GET_BREWERY_DETAIL,
  POST_COMMENT,
  GET_COMMENTS_BEER,
  GET_FAV_DETAIL,
  POST_SCORE,
  ALL_PURCHASES,
  GET_PURCHASES,
  SELLERBEERS,
  SET_DETAIL_SELLER,
  POST_PURCHASE,
  GET_PURCHASES_BY_USER,
  UPDATE_PURCHASE_STATUS,
  FILTER_SALES_STATUS,
  UPDATE_USER,
  GET_SALES_BREWERY,
  CRYPTO,
  FILTER_STATUS,
  POST_SUPPORT,
  GET_SUPPORT,
  ANSWER_SUPPORT,
  SUPPORT,
  SEARCH_BAR2,
} from "../const";

const initialState = {
  search: [],
  beers: [],
  allBeers: [],
  detail: {},
  allSellers: [],
  breweryDetail: [],
  userType: [],
  type: [],
  page: 1,
  filterPlaceholder: [],
  cart: [],
  infoBeers: [],
  infoSoldBeers: [],
  totalPrice: 0,
  user: [],
  sellers: [],
  favs: [],
  comments: [],
  allPurchases: [],
  userPurchases: [],
  brewerySales: [],
  crypto: 0,
  filtroPurchases: [],
  backupSupport: [],
  support:[],
  search2: [],
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case GET_BEERS:
      return {
        ...state,
        allBeers: action.payload,
        beers: action.payload,
      };

    case GET_ALL_SELLERS:
      return {
        ...state,
        allSellers: action.payload,
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
        beers: action.payload,
        
      };
    }

    case SORT_BY_NAME:
      let sortedByName = [];
      if (state.allBeers.length === state.beers.length) {
        sortedByName =
          action.payload === "AtoZ"
            ? state.allBeers.sort(function (a, b) {
                return a.name.localeCompare(b.name);
              })
            : state.allBeers.sort(function (a, b) {
                return b.name.localeCompare(a.name);
              });
      }
      if (state.allBeers.length !== state.beers.length) {
        sortedByName =
          action.payload === "AtoZ"
            ? state.beers.sort(function (a, b) {
                return a.name.localeCompare(b.name);
              })
            : state.beers.sort(function (a, b) {
                return b.name.localeCompare(a.name);
              });
      }
      return {
        ...state,
        beers: sortedByName,
        filterPlaceholder: sortedByName,
      };

    case SORT_BY_PRICE:
      let sortedByPrice = [];
      if (state.allBeers.length === state.beers.length) {
        //revisa si allBeers tiene el mismo largo que beers, para ver si ha habido o no algun filtrado
        sortedByPrice =
          action.payload === "Low to High"
            ? state.allBeers.sort(function (a, b) {
                return a.price - b.price;
              })
            : state.allBeers.sort(function (a, b) {
                return b.price - a.price;
              });
      }
      if (state.allBeers.length !== state.beers.length) {
        //misma logica de arriba, caso opuesto
        sortedByPrice =
          action.payload === "Low to High"
            ? state.beers.sort(function (a, b) {
                return a.price - b.price;
              })
            : state.beers.sort(function (a, b) {
                return b.price - a.price;
              });
      }
      return {
        ...state,
        beers: sortedByPrice,
        filterPlaceholder: sortedByPrice,
      };

    case FILTER_BEER_BY_BREWERY:
      const preFilteredBeersByBrewery = state.allBeers;
      const filteredBeersByBrewery =
        action.payload === "All"
          ? preFilteredBeersByBrewery
          : preFilteredBeersByBrewery.filter(
              (beer) => parseInt(beer.sellerId) === parseInt(action.payload)
            );
      return {
        ...state,
        beers: filteredBeersByBrewery,
        filterPlaceholder: filteredBeersByBrewery,
      };

    case FILTER_BEER_BY_TYPE:
      const preFilteredBeersByType = state.allBeers;
      const filteredBeersByType =
        action.payload === "All"
          ? preFilteredBeersByType
          : preFilteredBeersByType.filter(
              (beer) => beer.tipo === action.payload
            );

      return {
        ...state,
        beers: filteredBeersByType,
        filterPlaceholder: filteredBeersByType,
      };

    case POST_BEER:
      return {
        ...state,
      };

    case POST_USER:
      return {
        ...state,
      };

    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case UPDATE_BEER:
      return {
        ...state,
      };
    case POST_SELLER:
      return {
        ...state,
      };

    case POST_FAVS:
      return {
        ...state,
      };

    case DELETE_FAVS:
      return {
        ...state,
        favs: action.payload,
      };

    case GET_SELLERS:
      return {
        ...state,
        allSellers: action.payload,
        sellers: action.payload,
      };
    case ALL_USERS:
      return {
        ...state,
        user: action.payload,
      };

    case GET_BREWERY_DETAIL:
      return {
        ...state,
        breweryDetail: action.payload,
      };
    case POST_COMMENT:
      return {
        ...state,
      };
    case GET_COMMENTS_BEER:
      return {
        ...state,
        comments: action.payload,
      };

    case GET_FAV_DETAIL:
      return {
        ...state,
        favs: action.payload,
      };

    case POST_SCORE:
      return {
        ...state,
      };

    case GET_PURCHASES:
      return {
        ...state,
        allPurchases: action.payload,
        filtroPurchases: action.payload,
      };

    case SELLERBEERS:
      return {
        ...state,
        filterPlaceholder: action.payload,
      };

    case SET_DETAIL_SELLER:
      return {
        ...state,
        breweryDetail: action.payload,
      };

    case POST_PURCHASE:
      return {
        ...state,
      };

    case UPDATE_PURCHASE_STATUS:
      return {
        ...state,
        userPurchases: action.payload,
      };

    case GET_SALES_BREWERY:
      return {
        ...state,
        userPurchases: action.payload,
        filtroPurchases: action.payload,
      };

    case GET_PURCHASES_BY_USER:
      return {
        ...state,
        userPurchases: action.payload,
        filtroPurchases: action.payload,
      };

    case UPDATE_USER:
      return {
        ...state,
      };

    case FILTER_SALES_STATUS:
      const allOrders = state.filtroPurchases;
      const filteredByStatus =
        action.payload === "All"
          ? allOrders
          : allOrders.filter((st) => st.status === action.payload);
      return {
        ...state,
        userPurchases: filteredByStatus,
      };

    case FILTER_STATUS:
      const orders = state.allPurchases;
      const filtered =
        action.payload === "All"
          ? orders
          : orders.filter((st) => st.status === action.payload);
      return {
        ...state,
        filtroPurchases: filtered,
      };

    case CRYPTO:
      return {
        ...state,
        crypto: action.payload,
      };

    case POST_SUPPORT:
      return {
        ...state,
      }

    case SUPPORT:
      return {
        ...state,
        support: action.payload,
        backupSupport: action.payload
      };

    case ANSWER_SUPPORT:
      return {
        ...state,
      }
    case 'DELETE_COMMENT':
      return{
        ...state,
        support:action.payload,
        backupSupport: action.payload
      }
      case SEARCH_BAR2: {
        return {
          ...state,
          search2: action.payload,
          allSellers: action.payload,
        };
      }
    



    default:
      return { ...state };
  }
}

export default Reducer;
