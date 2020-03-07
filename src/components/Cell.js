import React from "react";

class Cell extends React.Component {

    render() {
        return (
            <div className="cell" row={this.props.row}>
                cell
            </div>
        );
    }

}

export default Cell;