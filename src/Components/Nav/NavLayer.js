import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/NavLayer.sass";

const NavLayer = () => {
	return (
		<aside id="layer">
			<ul>
				<li>
					<Link to="/">HOME</Link>
				</li>
				<li>
					<Link to="/products">PRODUCTS</Link>
				</li>
				<li>
					<Link to="/cart">CART</Link>
				</li>
			</ul>
		</aside>
	);
};
export default NavLayer;
