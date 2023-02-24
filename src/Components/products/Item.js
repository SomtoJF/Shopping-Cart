import { Link } from "react-router-dom";
import "../../styles/products/Item.sass";
import { useState } from "react";

const Item = (props) => {
	const product = props.product;
	const breakdown = props.breakdown;
	const setCart = props.setCart;
	const cart = props.cart;
	if (breakdown === true) {
		return <BrokenDownItem item={product} />;
	} else {
		return <ExpandedItem item={product} setCart={setCart} cart={cart} />;
	}
};

export default Item;

const BrokenDownItem = (props) => {
	const product = props.item;
	return (
		<li className="product-item">
			<img src={product.src} alt={product.alt} />
			<details>
				<summary>Product Information</summary>
				<ul>
					<li>
						<div>Product</div>
						<div>{product.alt}</div>
					</li>
					<li>
						<div>Photographer</div>
						<div>{product.photographer}</div>
					</li>
					<li>
						<div>Price</div>
						<div>${product.price}</div>
					</li>
					<li>
						<Link to={"/Shopping-Cart/products/" + product.id}>More Information</Link>
					</li>
				</ul>
			</details>
		</li>
	);
};

const ExpandedItem = (props) => {
	const product = props.item;
	const setCart = props.setCart;
	const cart = props.cart;
	const [quantity, setQuantity] = useState(1);
	const addToCart = (item, quantity) => {
		item = { quantity: quantity, ...item };
		let newCart = cart
			.filter((cartItem) => cartItem.id !== item.id)
			.concat(item);
		setCart(newCart);
	};
	return (
		<main id="a-product">
			<img src={product.src} alt={product.alt} />
			<section>
				<ul>
					<li>
						<div>Product</div>
						<div>{product.alt}</div>
					</li>
					<li>
						<div>Photographer</div>
						<a href={product.photographer_url}>{product.photographer}</a>
					</li>

					<li>
						<div>Price</div>
						<div>${product.price}</div>
					</li>
					<li>
						<div>Poster Size</div>
						<div>{product.poster_size} cm</div>
					</li>
					<li>
						<div>Color</div>
						<div
							style={{
								backgroundColor: `${product.color}`,
							}}
						>
							{product.color}
						</div>
					</li>
					<li>
						<button
							type="button"
							onClick={() => {
								addToCart(product, quantity);
							}}
						>
							Add to Cart
						</button>

						<div id="quantity-controls">
							<button
								type="button"
								onClick={() => {
									setQuantity(quantity - 1);
								}}
								disabled={quantity <= 1 ? true : false}
							>
								-
							</button>
							<span> Qty {quantity} </span>
							<button
								type="button"
								onClick={() => {
									setQuantity(quantity + 1);
								}}
							>
								+
							</button>
						</div>
					</li>
				</ul>
			</section>
		</main>
	);
};
