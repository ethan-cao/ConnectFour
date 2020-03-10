import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import Board from "./Board";

afterEach(cleanup);

test("Board renders ", () => {
	const { container, asFragment } = render(<Board />);
	const board = container.firstChild;
	
	// expect(asFragment()).toMatchSnapshot();

	expect(board).toBeInTheDocument();
	expect(board).toHaveClass("board");
});
