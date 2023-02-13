import ProductsHeader from "../Components/Header";
import Item from "../Components/products/Item";
import "../styles/products/Products.sass";

const Products = ({ products }) => {
	const items = products.map((item) => <Item product={item} key={item.sn} />);

	return (
		<div id="products-page">
			<ProductsHeader text="MINIMALIST COLLECTIONS" />
			<ol id="products">{items}</ol>
		</div>
	);
};

export default Products;
