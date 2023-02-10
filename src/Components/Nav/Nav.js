import "../../styles/Nav.sass";

const Nav = (props) => {
	const isExpanded = props.navIsExpanded;
	const setIsExpanded = props.setNavIsExpanded;
	return (
		<button
			className="nav-button"
			onClick={() => {
				const navOverlay = document.getElementById("layer");
				if (isExpanded) {
					setIsExpanded(false);
					navOverlay.style.left = "-80vw";
				} else {
					setIsExpanded(true);
					navOverlay.style.left = "0vw";
				}
			}}
		>
			{isExpanded ? "CLOSE" : "MENU"}
		</button>
	);
};
export default Nav;
