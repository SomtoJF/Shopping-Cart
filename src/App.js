import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.sass";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
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
