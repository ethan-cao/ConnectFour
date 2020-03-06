import {createStore, applyMiddleware, compose} from "redux";
import reducers from "../reducers";
import reduxThunk from "redux-thunk"; 	

// composeEnhancers is used to support redux-devtools-extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(reduxThunk)));

// debug purpose
// window.store = store;

export default store;
