import axios from "axios";
import {
  ALL_API,
  ALL_ID,
  ALL_NAME,
  GET_BEERS,
  GET_BEER_DETAIL,
  REMOVE_DETAIL,
  SEARCH_BAR,
  UPDATE_BEER,
  POST_BEER,
  POST_USER,
  REMOVE_ONE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  ADD_TO_CART,
  GET_CART,
  TOTAL_PRICE,
  CHECKOUT_BEERS,
  SORT_BY_NAME,
  SORT_BY_PRICE,
  FILTER_BEER_BY_BREWERY,
  GET_ALL_BREWERIES,
  GET_BREWERY_DETAIL,
  SET_PAGE,
  FILTER_BEER_BY_TYPE,
  SELLER,
  GET_ALL_SELLERS,
  ALL_SELLERS,
  GET_SELLERS,
  POST_SELLER,
  POST_FAVS,
  GET_FAVS,
  FAVS,
  DELETE_FAVS,
  GET_USER,
  ALL_USERS,
  SELLERS_ID,
  GET_COMMENTS_BEER,
  POST_COMMENT,
  COMMENTS,
  GET_FAV,
  POST_SCORE,
  ALL_PURCHASES,
  GET_PURCHASES,
  SELLERBEERS,
  SELLERBEER,
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
  ALL_NAME2

} from "../const";

export function addToCart(id) {
  return {
    type: ADD_TO_CART,
    payload: id,
  };
}

export function removeAllFromCart() {
  return {
    type: REMOVE_ALL_FROM_CART,
  };
}

export function removeOneFromCart(id) {
  return {
    type: REMOVE_ONE_FROM_CART,
    payload: id,
  };
}

export function getCart() {
  return { type: GET_CART };
}

export function totalPrice(payload) {
  return { type: TOTAL_PRICE, payload };
}

export function infoBeers(payload) {
  return { type: CHECKOUT_BEERS, payload };
}

export function getAllBeers() {
  return async function (dispatch) {
    let allBeers = await axios.get(ALL_API);
    return dispatch({
      type: GET_BEERS,
      payload: allBeers.data,
    });
  };
}

export function getAllSellers() {
  return async function (dispatch) {
    const allSellers = await axios.get(SELLER);
    return dispatch({
      type: GET_SELLERS,
      payload: allSellers.data,
    });
  };
}

export function getBeerDetail(id) {
  return async function (dispatch) {
    const beerById = await axios.get(ALL_ID + id);
    return dispatch({
      type: GET_BEER_DETAIL,
      payload: beerById.data,
    });
  };
}

export function getBreweryDetail(id) {
  return async function (dispatch) {
    const breweryById = await axios.get(SELLERS_ID + id);
    return dispatch({
      type: GET_BREWERY_DETAIL,
      payload: breweryById.data,
    });
  };
}

export const removeDetail = () => {
  return {
    type: REMOVE_DETAIL,
  };
};

export function searchBar(payload) {
  return async function (dispatch) {
    try {
      const search = await axios.get(ALL_NAME + payload);
      return dispatch({
        type: SEARCH_BAR,
        payload: search.data,
      });
    } catch (error) {
      if (error.response) {
        alert(error.response.data);
      }
    }
  };
}

export function postBeer(payload) {
  return async function (dispatch) {
    try {
      const post = await axios.post(POST_BEER, payload);
      return post;
    } catch (error) {
      if (error.response) {
        return alert(error.response.data);
      }
    }
  };
}

export function postUser(payload) {
  return async function (dispatch) {
    try {
      const post = await axios.post(POST_USER, payload);
      return post;
    } catch (error) {
      if (error.response) {
        return alert(error.response.data);
      }
    }
  };
}

export function setPage(num) {
  return async function (dispatch) {
    try {
      return dispatch({ type: SET_PAGE, payload: num });
    } catch (error) {
      console.log(error);
    }
  };
}

export function sortByName(payload) {
  return {
    type: SORT_BY_NAME,
    payload,
  };
}

export function sortByPrice(payload) {
  return {
    type: SORT_BY_PRICE,
    payload,
  };
}

export function filterBeersByBrewery(payload) {
  return {
    type: FILTER_BEER_BY_BREWERY,
    payload,
  };
}

export function filterBeersByType(payload) {
  return {
    type: FILTER_BEER_BY_TYPE,
    payload,
  };
}

export function updateBeer(data, id) {
  return (dispatch) => {
    axios
      .put(UPDATE_BEER + id, data)
      .then((response) => dispatch({ type: UPDATE_BEER }))
      .catch((e) => {
        console.log(e);
      });
  };
}

export function getSellers() {
  return async function (dispatch) {
    let allSellers = await axios.get(ALL_SELLERS);
    return dispatch({
      type: GET_SELLERS,
      payload: allSellers.data,
    });
  };
}

export function postSeller(payload) {
  return async function (dispatch) {
    try {
      const post = await axios.post(POST_SELLER, payload);
      return post;
    } catch (error) {
      if (error.response) {
        return alert(error.response.data);
      }
    }
  };
}

export function postFavs(obj) {
  return async function (dispatch) {
    try {
      const response = await axios.post(FAVS, obj);
      return dispatch({ type: POST_FAVS, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getFavs(user) {
  return async function (dispatch) {
    try {
      const response = await axios.get(FAVS);
      return dispatch({ type: GET_FAVS, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteFavs(idUser, idBeer) {
  return async function (dispatch) {
    try {
      const response = await axios.delete(
        FAVS + `?idUser=${idUser}&idBeer=${idBeer}`
      );
      return dispatch({ type: DELETE_FAVS, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getUser() {
  return async function (dispatch) {
    let allUser = await axios.get(GET_USER);
    return dispatch({
      type: ALL_USERS,
      payload: allUser.data,
    });
  };
}

export async function helpCall(url) {
  return axios.get(`/${url}`).then((res) => {
    return res.data;
  });
}

export function postComment(obj, id) {
  console.log(obj);
  return async function (dispatch) {
    try {
      const response = await axios.post(`${COMMENTS}/beer/${id}`, obj);
      return dispatch({ type: "POST_SCORE", payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getCommentsBeer(idBeer) {
  return async function (dispatch) {
    const commentBeer = await axios.get(`/comment/beer/${idBeer}`);
    return dispatch({
      type: GET_COMMENTS_BEER,
      payload: commentBeer.data,
    });
  };
}
export function getFavDetail(id) {
  return async function (dispatch) {
    const Fav = await axios.get(GET_FAV + id);
    return dispatch({
      type: "GET_FAV_DETAIL",
      payload: Fav.data,
    });
  };
}

export function postScore(obj) {
  return async function (dispatch) {
    try {
      const response = await axios.post(POST_SCORE, obj);
      return dispatch({ type: "POST_SCORE", payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export async function helpCallScores(url) {
  return axios.get(`/${url}`).then((res) => {
    return res.data;
  });
}

export function postPurchase(purchaseInfo) {
  return async function (dispatch) {
    try {
      const res = await axios.post(ALL_PURCHASES, purchaseInfo);
      return dispatch({ type: POST_PURCHASE, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAllPurchases() {
  return async function (dispatch) {
    let allPurchases = await axios.get(ALL_PURCHASES);
    return dispatch({
      type: GET_PURCHASES,
      payload: allPurchases.data,
    });
  };
}

export function getBeerSeller(id) {
  return async function (dispatch) {
    const beers = await axios.get(SELLERBEER + id);
    return dispatch({
      type: SELLERBEERS,
      payload: beers.data,
    });
  };
}

export function SetSellerDetail() {
  return {
    type: SET_DETAIL_SELLER,
    payload: [],
  };
}

export function getPurchasesByUserId(userId) {
  return async function (dispatch) {
    try {
      const userPurchases = await axios.get(
        ALL_PURCHASES + `/user?userId=${userId}`
      );
      return dispatch({
        type: GET_PURCHASES_BY_USER,
        payload: userPurchases.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateStatus(id, status) {
  try {
    return async function (dispatch) {
      const updateStatus = await axios.put(
        ALL_PURCHASES + `/status?id=${id}&status=${status}`
      );
      return dispatch({
        type: UPDATE_PURCHASE_STATUS,
        payload: updateStatus.data,
      });
    };
  } catch (error) {
    console.log(error);
  }
}

export function getSalesBySellerId(sellerId) {
  try {
    return async function (dispatch) {
      const brewerySales = await axios.get(
        ALL_PURCHASES + `/seller?sellerId=${sellerId}`
      );
      return dispatch({
        type: GET_SALES_BREWERY,
        payload: brewerySales.data,
      });
    };
  } catch (error) {
    console.log(error);
  }
}

export function filterSalesByStatus(payload) {
  return {
    type: FILTER_SALES_STATUS,
    payload,
  };
}

export function updateUser(data, id) {
  console.log(data);
  try {
    return async function (dispatch) {
      const response = axios.put(UPDATE_USER + id, data);
      return dispatch({ type: UPDATE_USER });
    };
  } catch (error) {}
}

export function exchangeCrypto() {
  return async function (dispatch) {
    try {
      var response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd`
      );
      return dispatch({ type: CRYPTO, payload: response.data.ethereum.usd });
    } catch (e) {
      console.log(e);
    }
  };
}

export function filterByStatus(payload) {
  return {
    type: FILTER_STATUS,
    payload,
  };
}

export function postSupport(payload) {
  return async function (dispatch) {
    try {
      let response = await axios.post(POST_SUPPORT, payload);
      return dispatch({ type:POST_SUPPORT, payload: response.data });
    } catch (e) {
      console.log(e);
    }
  };
}

export function getSupport() {
  return async function (dispatch) {
    try {
      const res = await axios.get(GET_SUPPORT);
      console.log(res)
      return dispatch({ type: SUPPORT, payload: res.data.supports });
    } catch (error) {
      console.log(error);
    }
  };
}

export function answerSupport(payload) {
  console.log(payload)
  return async function (dispatch) {
    try {
      let response = await axios.post(ANSWER_SUPPORT, payload);
      return dispatch({ type: ANSWER_SUPPORT, payload: response.data });
    } catch (e) {
      console.log(e);
    }
  };
}

export function deleteComment(idSupport) {
  return async function (dispatch) {
    try {
      const re = await axios.delete("http://localhost:3001/support?idSupport=" + idSupport);
      return dispatch({ type: 'DELETE_COMMENT', payload: re.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function searchBar2(payload) {
  console.log(payload)
  return async function (dispatch) {
    try {
      const search2 = await axios.get(ALL_NAME2 + payload);
      return dispatch({
        type: SEARCH_BAR2,
        payload: search2.data,
      });
    } catch (error) {
      if (error.response) {
        alert(error.response.data);
      }
    }
  };
}
