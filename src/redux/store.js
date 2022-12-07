import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
// import logger from "redux-logger";
import cartCounter from "./middleware/cartCounter";
import rootReducer from "./reducers/rootReducer";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(cartCounter))
);

export default store;
