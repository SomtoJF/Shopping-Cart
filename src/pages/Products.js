import ProductsHeader from "../Components/Header";
import Item from "../Components/products/Item";
import "../styles/products/Products.sass";

const Products = ({ products }) => {
	return (
		<div id="products-page">
			<ProductsHeader text="MINIMALIST COLLECTIONS" />
			<ol id="products">
				{products.map((item) => (
					<Item product={item} key={item.sn} />
				))}
			</ol>
		</div>
	);
};

export default Products;
