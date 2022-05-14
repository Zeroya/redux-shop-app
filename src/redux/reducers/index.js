import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer, categoryReducer, handleCard } from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  category: categoryReducer,
  handleCard
});
export default reducers;
