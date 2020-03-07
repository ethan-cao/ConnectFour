import React from "react";
import Column from "./Column";
import { ROW_SIZE, COLUMN_SIZE } from "../state/store";

class Grid extends React.Component {
	render() {
		const columns = [];

		for (let column = 0; column < COLUMN_SIZE; ++column) {
			columns[column] = <Column column={column} rowSize={ROW_SIZE} />;
		}

		console.log(columns);

		return <div className="grid">{columns}</div>;
	}
}

export default Grid;
