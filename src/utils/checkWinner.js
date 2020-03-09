import { PLAYER1, PLAYER2, COLUMN_SIZE, ROW_SIZE } from "../state/store";

let winning = [];

/**
 * 
 * @param {*} board 
 * @param {*} column 
 * @param {*} row 
 */
const checkHorizontalCell = (board, column, row) => {
	const player = board[column][row];

	if (column + 3 < COLUMN_SIZE &&
		player === board[column + 1][row] &&
		player === board[column + 2][row] &&
		player === board[column + 3][row]) {
		console.log([column, row], [column+1, row], [column+2, row], [column+3, row]);
		return player;
	}

	return null;
};

const checkVerticalCell = (board, column, row) => {
	const player = board[column][row];

	if (row + 3 < ROW_SIZE &&
		player === board[column][row + 1] &&
		player === board[column][row + 2] &&
		player === board[column][row + 3]) {
		console.log([column, row], [column, row+1], [column, row+2], [column, row+3]);
		return player;
	}

	return null;
}

const checkAscendingDiagonalCell = (board, column, row) => {
	const player = board[column][row];

	if (column + 3 < COLUMN_SIZE && 
		player === board[column + 1][row - 1] &&
		player === board[column + 2][row - 2] &&
		player === board[column + 3][row - 3]) {
		console.log([column, row], [column+1, row-1], [column+2, row-2], [column+3, row-3]);
		return player;
	}

	return  null;
}

const checkDescendingDiagonalCell = (board, column, row) => {
	const player = board[column][row];

	if (column + 3 < COLUMN_SIZE &&
		row + 3 < ROW_SIZE &&
		player === board[column + 1][row + 1] &&
		player === board[column + 2][row + 2] &&
		player === board[column + 3][row + 3]) {
		console.log([column, row], [column+1, row+1], [column+2, row+2], [column+3, row+3]);
		return player;
	}

	return null;
}

const checkwinner = (board) => {
	let winner = null;
	const t1 = performance.now();

	for (let column = 0; column < board.length; ++column) {
		for (let row = 0; row < board[0].length; ++row) {

			if (board[column][row] === null) {
				continue;
			}

			winner = checkHorizontalCell(board, column, row) ;
			if (winner !== null) {
				return winner
			}

			winner = checkVerticalCell(board, column, row) ;
			if (winner !== null) {
				return winner
			}
			
			winner = checkAscendingDiagonalCell(board, column, row) ;
			if (winner !== null) {
				return winner
			}

			winner = checkDescendingDiagonalCell(board, column, row) ;
			if (winner !== null) {
				return winner
			}
		}
	}


	const t2 = performance.now();
	console.log("time spent on checkwinner() : ", t2 - t1);

	return winner;
};

export default checkwinner;

