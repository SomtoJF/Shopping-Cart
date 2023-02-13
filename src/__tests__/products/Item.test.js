import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom"; // optional
import userEvent from "@testing-library/user-event";
import Item from "../../Components/products/Item";

describe("Item Component", () => {
	it("displays an item accurately", () => {
		const anItem = {
			src: "www.somto.me/something.jpg",
			alt: "reach for the moon, aim for the stars",
			photographer: "SomtoJF",
		};

		const { container } = render(<Item product={anItem} />, {
			wrapper: MemoryRouter,
		});

		expect(container).toMatchSnapshot();
	});
});
