import { PLAYER1, PLAYER2, COLUMN_SIZE, ROW_SIZE } from "../state/store";

const WINNING_CONDITION = 4;

const move = (board, cache, column, row, player, targetCount) => {
	if (column >= board.length || column < 0 || row >= board[0].length || row < 0 ) {
		return false;
	}

	if (cache[column][row]) {
		return false;
	}

	cache[column][row] = true;

	const newTargetCount = board[column][row] === player ? targetCount - 1 : targetCount;

	if (newTargetCount === 0) {
		return true;
	}

	return (
		move(board, column + 0, row + 1, player, newTargetCount) ||
		move(board, column + 1, row + 0, player, newTargetCount) ||
		move(board, column + 1, row + 1, player, newTargetCount) || 
		move(board, column + 1, row - 1, player, newTargetCount) || 
		move(board, column - 1, row - 1, player, newTargetCount) || 
		move(board, column - 1, row + 1, player, newTargetCount) 
	);
};

const checkwinner = (board) => {
	return null;

	const t1 = performance.now();

	const cache = Array(ROW_SIZE).fill(false).map(x => Array(COLUMN_SIZE).fill(false));

	for (let column = 0; column < board.length; ++column) {
		for (let row = 0; row < board[0].length; ++row) {

			if (board[column][row] === null) {
				continue;
			}

			console.log(`checking: ${column} - ${row}`)

			let winner = move(board, cahce, column, row, PLAYER1, WINNING_CONDITION);
			if (winner === true) {
				console.log("winner is 1");
				return PLAYER1;
			}

			winner = move(board, cache, column, row, PLAYER2, WINNING_CONDITION);
			if (winner === true) {
				console.log("winner is 2");
				return PLAYER2;
			}
		}
	}

	const t2 = performance.now();
	console.log("time spent ", t2 - t1);

	return null;
};

export default checkwinner;
