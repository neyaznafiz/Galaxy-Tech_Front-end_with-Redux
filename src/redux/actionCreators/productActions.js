import {
  ADD_PRODUCT,
  ADD_TO_CART,
  LOAD_PRODUCT,
  REMOVE_FROM_CART,
} from "../actionTypes/actionTypes";

// load product after fetch
export const loadProduct = (data) => {
  return {
    type: LOAD_PRODUCT,
    payload: data,
  };
};

// add product
export const addProduct = (data) => {
  return {
    type: ADD_PRODUCT,
    payload: data,
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};
