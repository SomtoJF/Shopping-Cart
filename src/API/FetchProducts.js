import { createClient } from "pexels";
import API from "./config";

const client = createClient(`${API.key}`);
const query = "Fashion";

async function fetchProducts() {
	let products = await client.photos.search({ query });
	products = await products.photos.map((product, index) => {
		return {
			sn: index + 1,
			id: product.id,
			price: product.height,
			photographer: product.photographer,
			photographer_url: product.photographer_url,
			poster_size: `${product.width} x ${product.height}`,
		};
	});
	return products;
}

export default fetchProducts;
