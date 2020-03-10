import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import Cell from "./Cell";
import { PLAYER1_NAME, PLAYER2_NAME, PLAYER1, PLAYER2 } from "../state/store";

afterEach(cleanup);

test("Cell renders without player", () => {
	const { container, asFragment } = render(<Cell />);
	const cell = container.firstChild;
	
	expect(asFragment()).toMatchSnapshot();

	expect(cell).toBeInTheDocument();
	expect(cell).toHaveClass('cell')
	expect(cell).not.toHaveClass(PLAYER1_NAME);
	expect(cell).not.toHaveClass(PLAYER2_NAME);
});

test("Cell renders with player1", () => {
	const { container} = render(<Cell player={PLAYER1}/>);
	const cell = container.firstChild;

	expect(cell).toBeInTheDocument();
	expect(cell).toHaveClass('cell', PLAYER1_NAME);
});

test("Cell renders with player2", () => {
	const { container} = render(<Cell player={PLAYER2}/>);
	const cell = container.firstChild;

	expect(cell).toBeInTheDocument();
	expect(cell).toHaveClass('cell', PLAYER2_NAME);
});
