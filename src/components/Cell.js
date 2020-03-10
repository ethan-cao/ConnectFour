import React from "react";
import { PLAYER1, PLAYER2, PLAYER1_NAME, PLAYER2_NAME } from "../state/store";

class Cell extends React.Component {

    render() {
        let player = null;

        switch(this.props.player) {
            case PLAYER1:
                player = PLAYER1_NAME;
                break;
            case PLAYER2:
                player = PLAYER2_NAME;
                break;
            default:
        }

        const clazz = player === null ? "cell" : "cell " + player; 

        return (
            <div className={clazz} column={this.props.column} row={this.props.row} data-testid="cell">
            </div>
        );
    }
}

export default Cell;