import React from "react";
import { PLAYER1_COLOR, PLAYER2_COLOR, PLAYER1_NAME, PLAYER2_NAME } from "../state/store";

class Header extends React.Component {

	showPlayer1(){
		return <span className="header__messager__player1"> Current player: {PLAYER1_NAME} {PLAYER1_COLOR} </span>
	}

	showPlayer2(){
		return <span className="header__messager__player2"> Current player: {PLAYER1_NAME} {PLAYER2_COLOR} </span>
	}

	render() {
		return (
			<div className="header">
				<button className="header__restart" onClick={this.props.restart}> Restart </button>
				<div className="header__messager">
					{this.props.winner === null
						? (this.props.player ? this.showPlayer1() : this.showPlayer2())
						: `Game over: Winner is ${this.props.winner ? PLAYER1_NAME + " "+ PLAYER1_COLOR : PLAYER2_NAME + " " + PLAYER2_COLOR}`}
				</div>
			</div>
		);
	}
}

export default Header;