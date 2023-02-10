import "../../styles/Nav.sass";
import { useState } from "react";

const Nav = () => {
	const [navIsExpanded, setNavIsExpanded] = useState(false);
	return (
		<button
			className="nav-button"
			onClick={() => {
				const navOverlay = document.getElementById("layer");
				if (navIsExpanded) {
					setNavIsExpanded(false);
					navOverlay.style.left = "-80vw";
				} else {
					setNavIsExpanded(true);
					navOverlay.style.left = "0vw";
				}
			}}
		>
			{navIsExpanded ? "CLOSE" : "MENU"}
		</button>
	);
};
export default Nav;
