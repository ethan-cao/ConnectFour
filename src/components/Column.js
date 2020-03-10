import React from "react";
import Cell from "./Cell";
import debounce from "../utils/debounce";

class Column extends React.Component {
    render () {
        const rows = [];

        for (let row = 0; row < this.props.rows.length; ++row) {
            rows[row] = <Cell column={this.props.column} row={row} player={this.props.rows[row]}/>
        }

        return (
            <div className="column">
                <div className="column__unit" onClick={debounce(this.props.onClick, 300)} column={this.props.column}>
                    {rows}
                </div>
                <div classNameN="column__indicator"></div>
            </div>
        );
    }
}

export default Column;