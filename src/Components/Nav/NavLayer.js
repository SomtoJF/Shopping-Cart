import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/NavLayer.sass";

const NavLayer = (props) => {
	const isExpanded = props.navIsExpanded;

	useEffect(() => {
		const layer = document.getElementById("layer");
		isExpanded
			? layer.classList.add("expand")
			: layer.classList.remove("expand");
	}, [isExpanded]);

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
