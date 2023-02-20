import API from "./config";
const query = "pop culture";

async function fetchProducts() {
	let response = await fetch(
		`https://api.pexels.com/v1/search?query=${query}`,
		{
			headers: {
				Authorization: `${API.key}`,
			},
		}
	);

	response = await response.json();
	const products = response.photos.map((product, index) => {
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
