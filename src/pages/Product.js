import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAProduct } from "../API/FetchProducts";

const Product = () => {
	const { id } = useParams();
	const [product, setProduct] = useState({});
	useEffect(() => {
		fetchAProduct(id).then((response) => {
			setProduct(response);
		});
	}, []);
	return <h1>hello {product.photographer}</h1>;
};

export default Product;
