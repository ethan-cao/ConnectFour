import {createStore} from "redux";

import reducers from "../reducers";

export const PLAYER1 = true;
export const PLAYER1_NAME = "player1";
export const PLAYER1_COLOR = "Red";
export const PLAYER2 = false;
export const PLAYER2_NAME = "player2";
export const PLAYER2_COLOR = "Yellow";
export const ROW_SIZE = 6;
export const DRAW = "draw";
export const COLUMN_SIZE = 7;

export const initialState = {
    player: PLAYER1,
    winner: null,
    availableSlots: ROW_SIZE * COLUMN_SIZE,
    board: Array(COLUMN_SIZE).fill(null).map(x => Array(ROW_SIZE).fill(null))
}

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducers, initialState, enhancers);

export default store;