import React from "react";

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				{this.props.player}
			</div>
		);
	}
}

export default Header;