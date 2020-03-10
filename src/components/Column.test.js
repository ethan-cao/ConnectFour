import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import Column from "./Column";
import { initialState, COLUMN_SIZE, ROW_SIZE } from "../state/store";

afterEach(cleanup);

test("Grid renders with initial board", () => {
	const { container, asFragment } = render(<Column rows={initialState.board[0]} />);
	const column = container.firstChild;

	expect(asFragment()).toMatchSnapshot();

	expect(column).toBeInTheDocument();
	expect(column).toHaveClass("column");

	const cells = column.querySelectorAll(".cell");
	expect(cells.length).toBe(ROW_SIZE);
});
