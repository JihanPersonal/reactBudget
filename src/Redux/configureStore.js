import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Reducers/rootReducer";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
const configureStore = initialstate => {
  //Add REDUX support tool
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialstate,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  );
};
export default configureStore;
