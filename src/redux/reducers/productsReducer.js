import { ActionTypes } from "../constants/action-types";

const intialState = {
  products: [],
};

const categoryState = {
  category: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export const categoryReducer = (state = categoryState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CATEGORY_PRODUCTS:
      return { ...state, category:payload };
    default:
      return state;
  }
};
