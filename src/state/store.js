import {createStore, applyMiddleware, compose} from "redux";
import reduxThunk from "redux-thunk"; 	

import reducers from "../reducers";

export const PLAYER1 = true;
export const PLAYER2 = false;
export const ROW_SIZE = 6;
export const COLUMN_SIZE = 7;

const initialState = {
    player: PLAYER1,
    winner: null,
    board: Array(ROW_SIZE).fill(null).map(x => Array(COLUMN_SIZE).fill(null))
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(reduxThunk)));

export default store;
