import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom"; // optional
import userEvent from "@testing-library/user-event";
import Item from "../../Components/products/Item";
import App from "../../App";

describe("Item Component in 'products' page", () => {
	it("properly breaksdown/summarizes a product", () => {
		const anItem = {
			src: "www.somto.me/something.jpg",
			alt: "reach for the moon, aim for the stars",
			photographer: "SomtoJF",
			price: 1000,
		};

		const { container } = render(<Item product={anItem} breakdown={true} />, {
			wrapper: MemoryRouter,
		});

		expect(container).toMatchSnapshot();
	});
});

// These set of tests below test the component in the 'Product' (not Products) page
// See '/src/pages' folder
describe("Item Component in the 'product' page", () => {
	it("expands a product when the breakdown prop is false", () => {
		const setCart = jest.fn();
		const anItem = {
			src: "www.somto.me/something.jpg",
			alt: "reach for the moon, aim for the stars",
			photographer: "SomtoJF",
			price: 1000,
			poster_size: "1000 x 1000",
			color: "#FFFFFF",
		};

		const { container } = render(
			<Item product={anItem} breakdown={false} cart={[]} setCart={setCart} />,
			{
				wrapper: MemoryRouter,
			}
		);

		expect(container).toMatchSnapshot();
	});

	it("calls setCart when 'add to cart' button is clicked", () => {
		const setCart = jest.fn();
		const anItem = {
			src: "www.somto.me/something.jpg",
			alt: "reach for the moon, aim for the stars",
			photographer: "SomtoJF",
			price: 1000,
			poster_size: "1000 x 1000",
			color: "#FFFFFF",
		};

		render(
			<Item product={anItem} breakdown={false} cart={[]} setCart={setCart} />
		);
		const addToCart = screen.getByRole("button", { name: /add to cart/i });
		userEvent.click(addToCart);

		expect(setCart).toHaveBeenCalled();
		expect(setCart).toHaveBeenCalledWith([{ quantity: 1, ...anItem }]);
	});

	it("calls setCart with the proper quantity when 'add to cart' button is clicked", () => {
		const setCart = jest.fn();
		const anItem = {
			src: "www.somto.me/something.jpg",
			alt: "reach for the moon, aim for the stars",
			photographer: "SomtoJF",
			price: 1000,
			poster_size: "1000 x 1000",
			color: "#FFFFFF",
		};

		render(
			<Item product={anItem} breakdown={false} cart={[]} setCart={setCart} />
		);
		const addToCart = screen.getByRole("button", { name: /add to cart/i });
		const incrementQuantity = screen.getByRole("button", { name: /\+/i });

		userEvent.click(incrementQuantity);
		userEvent.click(incrementQuantity);
		userEvent.click(addToCart);

		expect(setCart).toHaveBeenCalledWith([{ quantity: 3, ...anItem }]);
	});
});
