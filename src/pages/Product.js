import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAProduct } from "../API/FetchProducts";
import Item from "../Components/products/Item";
import "../styles/product/product.sass";

const Product = () => {
	const { id } = useParams();
	const [product, setProduct] = useState({});
	useEffect(() => {
		fetchAProduct(id).then((response) => {
			setProduct(response);
			console.log(response);
		});
	}, []);
	return (
		<div id="product-page">
			<Item product={product} breakdown={false} />
		</div>
	);
};

export default Product;
