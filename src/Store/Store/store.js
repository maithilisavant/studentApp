import rootReducer from "../Reducers";
import { createStore, compose } from "redux";
import { loadState } from "../../Functions/functions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (middleware) => {
  const store = createStore(rootReducer, {}, composeEnhancers(middleware));
  return store;
};

export default configureStore;
