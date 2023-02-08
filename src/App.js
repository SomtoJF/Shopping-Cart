import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.sass";
import Nav from "./Components/Nav/Nav";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { useState } from "react";
import NavLayer from "./Components/Nav/NavLayer";

function App() {
	const [navIsExpanded, setNavIsExpanded] = useState(false);
	return (
		<div className="App">
			<BrowserRouter>
				<Nav
					navIsExpanded={navIsExpanded}
					setNavIsExpanded={setNavIsExpanded}
				/>
				<NavLayer navIsExpanded={navIsExpanded} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
