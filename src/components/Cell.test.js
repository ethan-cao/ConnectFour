import React from "react";
import { render } from "@testing-library/react";
import Cell from "./Cell";

test("Cell renders", () => {
	const { getByText } = render(<Cell />);
	const linkElement = getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
