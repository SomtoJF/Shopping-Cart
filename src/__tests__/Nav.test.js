import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom"; // optional
import userEvent from "@testing-library/user-event";
import Nav from "../Components/Nav/Nav";
import NavLayer from "../Components/Nav/NavLayer";

describe("Menu Button Component", () => {
	it("changes it's textContent onclick", () => {
		render(<NavLayer />, { wrapper: MemoryRouter });
		const { getByRole } = render(<Nav />);
		userEvent.click(getByRole("button", { name: /menu/i }));

		expect(getByRole("button").textContent).toMatch(/close/i);
	});

	it("expand the navLayer onClick", () => {
		render(<NavLayer />, { wrapper: MemoryRouter });
		const { getByRole } = render(<Nav />);
		const aside = screen.getByRole("complementary");
		userEvent.click(getByRole("button", { name: /menu/i }));

		expect(aside).toHaveStyle({ left: "0vw" });
	});
});
