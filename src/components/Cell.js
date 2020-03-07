import React from "react";
import { PLAYER1, PLAYER2 } from "../state/store";

class Cell extends React.Component {

    render() {
        let player = null;

        switch(this.props.player) {
            case PLAYER1:
                player = "player1";
                break;
            case PLAYER2:
                player = "player2";
                break;
            default:
        }

        const clazz = player === null ? "cell" : "cell " + player; 
        console.log(clazz)

        return (
            <div className={clazz} column={this.props.column} row={this.props.row}>
            </div>
        );
    }

}

export default Cell;