import checkwinner from "./checkWinner";
import { initialState } from "../state/store";

test("check winner test for initialState", () => {
	expect(checkwinner(initialState.board)).toBe(null);
});

test("check winner test for vertical case", () => {
	const board = [

	];
	expect(checkwinner(board)).toEqual(null);
});