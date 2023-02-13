import "../../styles/products/Item.sass";

const Item = (props) => {
	const product = props.product;
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
					<li>More Information...</li>
				</ul>
			</details>
		</li>
	);
};

export default Item;
