import React from "react";
import { PLAYER1_COLOR, PLAYER2_COLOR } from "../state/store";

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				{this.props.winner === null
					? `Current player: ${this.props.player ? "player1 " + PLAYER1_COLOR : "player2 " + PLAYER2_COLOR}`
					: `Game over: ${this.props.winner}`}
			</div>
		);
	}
}

export default Header;
