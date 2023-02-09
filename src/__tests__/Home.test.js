import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom"; // optional
import userEvent from "@testing-library/user-event";
import Home from "../pages/Home";

describe("Home Component", () => {
	it("renders correctly", () => {
		const { container } = render(<Home />, { wrapper: MemoryRouter });
		expect(container).toMatchSnapshot();
	});
});
