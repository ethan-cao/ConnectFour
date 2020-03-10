import React from "react";
import { PLAYER1_COLOR, PLAYER2_COLOR } from "../state/store";

class Header extends React.Component {

	showPlayer1(){
		return <span className="header__messager__player1"> Current player: player1 {PLAYER1_COLOR} </span>
	}

	showPlayer2(){
		return <span className="header__messager__player2"> Current player: player2 {PLAYER2_COLOR} </span>
	}

	render() {
		return (
			<div className="header">
				<button className="header__restart" onClick={this.props.restart}> Restart </button>
				<div className="header__messager">
					{this.props.winner === null
						? (this.props.player ? this.showPlayer1() : this.showPlayer2())
						: `Game over: Winner is ${this.props.winner ? "player1 " + PLAYER1_COLOR : "player2 " + PLAYER2_COLOR}`}
				</div>

				{/* <div className="header__messager">
					{this.props.winner === null
						? `Current player: ${this.props.player ? "player1 " + PLAYER1_COLOR : "player2 " + PLAYER2_COLOR}`
						: `Game over: Winner is ${this.props.winner ? "player1 " + PLAYER1_COLOR : "player2 " + PLAYER2_COLOR}`}
				</div> */}
			</div>
		);
	}
}

export default Header;