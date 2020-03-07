import {createStore} from "redux";

import reducers from "../reducers";

export const PLAYER1 = true;
export const PLAYER2 = false;
export const ROW_SIZE = 6;
export const COLUMN_SIZE = 7;

export const initialState = {
    player: PLAYER1,
    winner: null,
    board: Array(ROW_SIZE).fill(null).map(x => Array(COLUMN_SIZE).fill(null))
}

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducers, initialState, enhancers);

export default store;