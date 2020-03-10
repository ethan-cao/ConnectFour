import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Grid from "./Grid";
import { initialState, COLUMN_SIZE, ROW_SIZE, PLAYER1_NAME } from "../state/store";
import * as actions from "../actions";

afterEach(cleanup);

test("Grid renders with initial board", () => {
	const { container, asFragment } = render(<Grid board={initialState.board}/>);
	const grid = container.firstChild;
	
	expect(asFragment()).toMatchSnapshot();

	expect(grid).toBeInTheDocument();
	expect(grid).toHaveClass("grid");

	const columns = grid.querySelectorAll(".column");
	expect(columns.length).toBe(COLUMN_SIZE);
});

test("Grid can be filled", () => {
	const {container} = render(<Grid board={initialState.board} player fillCell={actions.fillCell} />);
	const grid = container.firstChild;
	
	const columns = grid.querySelectorAll(".column");
	const firstColumn = columns[0];

	fireEvent.click(firstColumn);

	const filledCell = grid.querySelectorAll(`.${PLAYER1_NAME}`);
});