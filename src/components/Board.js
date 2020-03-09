import React from "react";
import Header from "./Header";
import Grid from "./Grid";

class Board extends React.Component {
	render() {
		return (
			<div className="board">
				<Header player={this.props.player} winner={this.props.winner} restart={this.props.restart} />
				<Grid player={this.props.player} board={this.props.board} fillCell={this.props.fillCell}/>
			</div>
		);
	}
}

export default Board;