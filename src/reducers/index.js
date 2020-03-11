import { FILL, RESTART } from "../actions";
import { initialState, ROW_SIZE, COLUMN_SIZE, DRAW } from "../state/store";
import checkwinner from "../utils/checkWinner";

const playGame = (state = initialState, action) => {
	// console.log(action);

	switch (action.type) {
		case FILL:
			const column = action.payload;
			const rows = state.board[column];

			// the column is ready full
			if (rows[0] != null) {
				return state;
			}

			if (state.winner !== null) {
				return state;
			}

			let row = rows.length - 1;
			for (row = rows.length - 1; row >= 0; --row) {
				if (rows[row] === null) {
					break;
				}
			}

			// console.log(`fill ${column} - ${row}`);

			const newBoard = [];
			for (let i = 0; i < state.board.length; ++i) {
				newBoard[i] = [...state.board[i]];
			}
			newBoard[column][row] = state.player;

			const newPlayer = !state.player;
			const newAvailableSlots = state.availableSlots - 1;

			let newWinner = null;
			const filledSlots = initialState.availableSlots - newAvailableSlots;

			// check winner iff there are more than 6 cell filled
			if (filledSlots > 6) {
				newWinner = newAvailableSlots === 0 ? DRAW : checkwinner(newBoard);
			}

			return {
				player: newPlayer,
				availableSlots: newAvailableSlots,
				winner: newWinner,
				board: newBoard
			};
		case RESTART:
			return initialState;
		default:
			return state;
	}
};

export default playGame;