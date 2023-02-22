import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/NavLayer.sass";

const NavLayer = ({ cartItems }) => {
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
					{cartItems > 0 ? (
						<Link to="/cart">CART - {cartItems}</Link>
					) : (
						<Link to="/cart">CART</Link>
					)}
				</li>
			</ul>
		</aside>
	);
};
export default NavLayer;
