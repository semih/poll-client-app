import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const middlwareEnhancer = applyMiddleware(thunk);
const composedEnhancer = composeWithDevTools(middlwareEnhancer);

const store = createStore(rootReducer, undefined, composedEnhancer);

export default store;
