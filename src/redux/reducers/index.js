import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer, categoryReducer } from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  category: categoryReducer
});
export default reducers;
