import checkwinner from "./checkWinner";
import { initialState, PLAYER1, PLAYER2 } from "../state/store";

test("check winner test for initialState", () => {
	expect(checkwinner(initialState.board)).toBe(null);
});

test("check winner test for vertical case", () => {
	const board = [
		[null, null, null, null, null, null],
		[null, null, null, null, null, null],
		[null, null, null, null, null, null],
		[null, null, PLAYER1, PLAYER1, PLAYER1, PLAYER1],
		[null, null, null, null, null, null],
		[null, null, null, null, null, null],
		[null, null, null, null, null, null],
	];
	expect(checkwinner(board)).toEqual(PLAYER1);
});

test("check winner test for horizontal case", () => {
	const board = [
		[null, null, null, null, null, null],
		[null, null, null, null, null, null],
		[null, null, PLAYER1, null, null, null],
		[null, null, PLAYER1, null, null, null],
		[null, null, PLAYER1, null, null, null],
		[null, null, PLAYER1, null, null, null],
		[null, null, null, null, null, null],
	];
	expect(checkwinner(board)).toEqual(PLAYER1);
});

test("check winner test for diagonal case", () => {
	const board = [
		[null, null, null, null, null, null],
		[null, null, null, null, null, null],
		[null, null, PLAYER2, null, null, null],
		[null, null, null, PLAYER2, null, null],
		[null, null, null, null, PLAYER2, null],
		[null, null, null, null, null, PLAYER2],
		[null, null, null, null, null, null],
	];
	expect(checkwinner(board)).toEqual(PLAYER2);
});