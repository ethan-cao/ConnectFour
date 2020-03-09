import React from "react";
import { PLAYER1_COLOR, PLAYER2_COLOR } from "../state/store";

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				{this.props.winner === null
					? `Current player: ${this.props.player ? "player1 " + PLAYER1_COLOR : "player2 " + PLAYER2_COLOR}`
					: `Game over: Winner is ${this.props.winner ? "player1 " + PLAYER1_COLOR : "player2 " + PLAYER2_COLOR}`}
			</div>
		);
	}
}

export default Header;