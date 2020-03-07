import { FILL } from "../actions";
import checkWinner from "../utils/checkWinner";
import { initialState } from "../state/store";

const playGame = (state = initialState, action) => {
	switch (action.type) {
		case FILL:
			const column = action.payload;
			const rows = state.board[column];

			// the column is ready full
			if (rows[0] != null) {
				return state;
			}

			let row = rows.length - 1;
			for (row = rows.length - 1; row >= 0; --row) {
				if (rows[row] === null) {
					break;
				}
			}

			console.log(`fill ${column} - ${row}`);

			const newBoard = [];
			for (let i = 0; i < state.board.length; ++i) {
				newBoard[i] = [...state.board[i]];
			}
			newBoard[column][row] = state.player;

			// const winner = checkWinner(board);
			// if (winner !== null) {
			//     alert(`winner is ${winner}`);
			// }

			return {
				player: !state.player,
				winner: state.winner,
				board: newBoard
			};
		default:
			return state;
	}
};

export default playGame;
