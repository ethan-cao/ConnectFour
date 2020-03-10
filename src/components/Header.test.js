import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "./Header";
import { PLAYER1, PLAYER1_NAME, PLAYER1_COLOR } from "../state/store";

afterEach(cleanup);

test("Header renders with player1", () => {
	const { container} = render(<Header player={PLAYER1} winner={null}/>);
	const header = container.firstChild;

	expect(header).toBeInTheDocument();
	expect(header).toHaveClass("header");

	const msg = header.querySelector(".header__messager");
	expect(msg).toBeInTheDocument();
	expect(msg).toHaveTextContent(`Current player: ${PLAYER1_NAME} ${PLAYER1_COLOR}`); 
});

test("Header renders with working reset button", () => {
	const restart = jest.fn();
	const { container, getByText } = render(<Header player={PLAYER1} winner={null} restart={restart}/>);
	const header = container.firstChild;
	const restartButton = header.querySelector("button");

	expect(restartButton).toBeInTheDocument();
	expect(restartButton).toHaveClass("header__restart");
	expect(restartButton).toHaveTextContent("Restart");

	fireEvent.click(restartButton);
	expect(restart).toBeCalledTimes(1);
});