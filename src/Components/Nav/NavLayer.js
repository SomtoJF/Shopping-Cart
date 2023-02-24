import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/NavLayer.sass";

const NavLayer = ({ cartItems }) => {
	return (
		<aside id="layer">
			<ul>
				<li>
					<Link to="/Shopping-Cart/">HOME</Link>
				</li>
				<li>
					<Link to="/Shopping-Cart/products">PRODUCTS</Link>
				</li>
				<li>
					{cartItems > 0 ? (
						<Link to="/Shopping-Cart/cart">CART - {cartItems}</Link>
					) : (
						<Link to="/Shopping-Cart/cart">CART</Link>
					)}
				</li>
			</ul>
		</aside>
	);
};
export default NavLayer;
