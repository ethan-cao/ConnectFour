import { FILL } from "../actions";
import { initialState, ROW_SIZE, COLUMN_SIZE } from "../state/store";
import checkwinner from "../utils/checkWinner";

const playGame = (state = initialState, action) => {
	if (state.winner !== null) {
		return state;
	}

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


			const newPlayer = !state.player;
			const newAvailableSlots = state.availableSlots - 1;

			const filledSlots = ROW_SIZE * COLUMN_SIZE - newAvailableSlots;

			const winner = newAvailableSlots === 0 ? "Draw" : checkwinner(newBoard);


			return {
				player: newPlayer,
				availableSlots: newAvailableSlots,
				winner: winner,
				board: newBoard
			};
		default:
			return state;
	}
};

export default playGame;