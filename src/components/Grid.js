import React from "react";
import Column from "./Column";

class Grid extends React.Component {
	render() {
		const board = this.props.board;
		const size = board.length;
		const columns = [];

		for (let column = 0; column < size; ++column) {
			columns[column] = <Column column={column} rows={board[column]} onClick={() => this.props.fillCell(column)} />;
		}

		return (
            <div className="grid">
                {columns}
            </div>
        );
	}
}

export default Grid;