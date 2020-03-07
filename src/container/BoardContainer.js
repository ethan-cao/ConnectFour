import { connect } from "react-redux";

import Board from "../components/Board";
import * as actions from "../actions";

const mapStateToProps = (state) => {
	console.log("mapStateToProps");
	console.log(state);

	return {
		player: state.player,
		winner: state.winner,
		board: state.board
	};
};

const mapDispatchToProps = {
	fillCell: actions.fillCell
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
