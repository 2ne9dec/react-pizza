import axios from 'axios';
import {
  SET_CATEGORY,
  SET_SORT_BY,
  SET_LOADING,
  SET_PIZZAS,
  ADD_PIZZA_CART,
  CLEAR_CART,
  REMOVE_CART_ITEM,
  PLUS_CART_ITEM,
  MINUS_CART_ITEM,
} from './actionTypes';

export const setCategory = (index) => {
  return {
    type: SET_CATEGORY,
    payload: index,
  };
};

export const setSortBy = ({ type, order }) => {
  return {
    type: SET_SORT_BY,
    payload: { type, order },
  };
};

export const setLoading = (value) => ({
  type: SET_LOADING,
  payload: value,
});

export const setPizzas = (items) => {
  return {
    type: SET_PIZZAS,
    payload: items,
  };
};

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoading(false));
  axios
    .get(
      `/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${
        sortBy.order
      }`,
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export const addPizzaToCart = (pizzaObj) => {
  return {
    type: ADD_PIZZA_CART,
    payload: pizzaObj,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export const removeCartItem = (id) => {
  return {
    type: REMOVE_CART_ITEM,
    payload: id,
  };
};

export const plusCartItem = (id) => {
  return {
    type: PLUS_CART_ITEM,
    payload: id,
  };
};

export const minusCartItem = (id) => {
  return {
    type: MINUS_CART_ITEM,
    payload: id,
  };
};
