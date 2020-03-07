import React from "react";
import Cell from "./Cell";

class Column extends React.Component {
    render () {
        const rows = [];
        
        for (let row = 0; row < this.props.rowSize; row++) {
            rows[row] = <Cell row={row} />
        }

        return (
            <div className="column" column={this.props.column}>
                {rows}
            </div>
        );
    }
}

export default Column;