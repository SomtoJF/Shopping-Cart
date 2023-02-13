import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductsHeader from "../../Components/Header";

describe("Products Heading", () => {
	it("displays accurate text", () => {
		const text = "Hi, Im Somto";

		const { getByRole } = render(<ProductsHeader text={text} />);

		expect(getByRole("heading").textContent).toMatch(text);
	});
});
