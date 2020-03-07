"use strict";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./styles/main.scss";

import store from "./state/store";
import BoardContainer from "./container/BoardContainer";
import registerServiceWorker from "./registerServiceWorker";

const loadGame = (container) => {
	ReactDOM.render(
		<Provider store={store}>  
			<BoardContainer/>
		</Provider>, 
		container
	);
};

// registerServiceWorker();

export default loadGame;