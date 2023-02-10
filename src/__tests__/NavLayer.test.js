import React from "react";
import { render, screen } from "@testing-library/react";
// import { MemoryRouter } from "react-router-dom";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom"; // optional
import NavLayer from "../Components/Nav/NavLayer";

describe("Nav Overlay", () => {
	it("Matches Snapshot", () => {
		const { container } = render(<NavLayer />, { wrapper: MemoryRouter });
		expect(container).toMatchSnapshot();
	});
});
