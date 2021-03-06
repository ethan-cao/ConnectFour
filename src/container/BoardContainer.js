import { connect } from "react-redux";

import Board from "../components/Board";
import * as actions from "../actions";

const mapStateToProps = (state) => ({
		player: state.player,
		winner: state.winner,
		board: state.board
});

const mapDispatchToProps = {
	fillCell: actions.fillCell,
	restart: actions.restart
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);