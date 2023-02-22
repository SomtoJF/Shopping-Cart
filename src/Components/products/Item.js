import { Link } from "react-router-dom";
import "../../styles/products/Item.sass";

const Item = (props) => {
	const product = props.product;
	const breakdown = props.breakdown;
	if (breakdown === true) {
		return <BrokenDownItem item={product} />;
	} else {
		return <ExpandedItem item={product} />;
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
						<Link to={"/products/" + product.id}>More Information</Link>
					</li>
				</ul>
			</details>
		</li>
	);
};

const ExpandedItem = (props) => {
	const product = props.item;
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
						<button>Add to Cart</button>
					</li>
				</ul>
			</section>
		</main>
	);
};
