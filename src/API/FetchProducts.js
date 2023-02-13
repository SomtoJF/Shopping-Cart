import { createClient } from "pexels";
import API from "./config";

const client = createClient(`${API.key}`);
const query = "Grey";

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
			alt: product.alt,
			src: product.src.landscape,
			url: product.url,
			color: product.avg_color,
		};
	});
	return products;
}

export default fetchProducts;
