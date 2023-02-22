import API from "./config";

export default async function fetchProducts() {
	let response = await fetch(`https://api.pexels.com/v1/curated`, {
		headers: {
			Authorization: `${API.key}`,
		},
	});

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

async function fetchAProduct(id) {
	let response = await fetch(`https://api.pexels.com/v1/photos/${id}`, {
		headers: {
			Authorization: `${API.key}`,
		},
	});

	response = await response.json();
	return {
		id: response.id,
		price: response.height,
		photographer: response.photographer,
		photographer_url: response.photographer_url,
		poster_size: `${response.width} x ${response.height}`,
		alt: response.alt,
		src: response.src.landscape,
		url: response.url,
		color: response.avg_color,
	};
}

export { fetchAProduct };
