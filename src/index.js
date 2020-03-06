"use strict";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Board from "./container/Board";
import store from "./state/store";
import registerServiceWorker from "./registerServiceWorker";

const loadGame = (container) => {
	console.log(container);

	ReactDOM.render(
		<Provider store={store}>  
			<Board/>
		</Provider>, 
		container
	);
};

// registerServiceWorker();

export default loadGame;