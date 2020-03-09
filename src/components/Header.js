import React from "react";
import { PLAYER1_COLOR, PLAYER2_COLOR } from "../state/store";

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<div className="header__messager">
					{this.props.winner === null
						? `Current player: ${this.props.player ? "player1 " + PLAYER1_COLOR : "player2 " + PLAYER2_COLOR}`
						: `Game over: Winner is ${this.props.winner ? "player1 " + PLAYER1_COLOR : "player2 " + PLAYER2_COLOR}`}
				</div>
				<button className="header__restart" onClick={this.props.restart}> Restart </button>
			</div>
		);
	}
}

export default Header;