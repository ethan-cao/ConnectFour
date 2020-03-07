import React from "react";
import Header from "../components/Header";
import Grid from "../components/Grid";

class Board extends React.Component {
	render() {
		return (
			<div className="board">
				<Header />
				<Grid />
			</div>
		);
	}
}

export default Board;
