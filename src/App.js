import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.sass";
import Nav from "./Components/Nav/Nav";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { useState, useEffect } from "react";
import NavLayer from "./Components/Nav/NavLayer";
import fetchedProducts from "./API/FetchProducts";

function App() {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		async function initializeProducts() {
			const myProducts = await fetchedProducts();
			setProducts(myProducts);
		}
		initializeProducts();
	}, []);
	return (
		<div className="App">
			<BrowserRouter>
				<Nav />
				<NavLayer />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<Products products={products} />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
