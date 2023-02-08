import "../styles/Nav.sass";

const Nav = (props) => {
	const isExpanded = props.navIsExpanded;
	const setIsExpanded = props.setNavIsExpanded;
	return (
		<button
			className="nav-button"
			onClick={() => {
				isExpanded ? setIsExpanded(false) : setIsExpanded(true);
			}}
		>
			{isExpanded ? "CLOSE" : "MENU"}
		</button>
	);
};
export default Nav;
