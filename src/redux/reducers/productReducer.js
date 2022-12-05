import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/actionTypes";

const initialState = {
  cart: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    // add to cart
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };

    // remove from cart
    case REMOVE_FROM_CART:
      return {};
    default:
      return state;
  }
};

export default productReducer;
