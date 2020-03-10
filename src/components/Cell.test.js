import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Cell from "./Cell";
import { PLAYER1_NAME, PLAYER2_NAME, PLAYER1, PLAYER2 } from "../state/store";

test("Cell renders without player", () => {
	const { getByTestId, asFragment } = render(<Cell />);
	const cell = getByTestId("cell");
	
	expect(asFragment()).toMatchSnapshot();

	expect(cell).toBeInTheDocument();
	expect(cell).toHaveClass('cell')
	expect(cell).not.toHaveClass(PLAYER1_NAME);
	expect(cell).not.toHaveClass(PLAYER2_NAME);
});

test("Cell renders with player1", () => {
	const { getByTestId } = render(<Cell player={PLAYER1}/>);
	const cell = getByTestId("cell");

	expect(cell).toBeInTheDocument();
	expect(cell).toHaveClass('cell', PLAYER1_NAME);
});

test("Cell renders with player2", () => {
	const { getByTestId } = render(<Cell player={PLAYER2}/>);
	const cell = getByTestId("cell");

	expect(cell).toBeInTheDocument();
	expect(cell).toHaveClass('cell', PLAYER2_NAME);
});