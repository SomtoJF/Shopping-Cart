import { Link } from "react-router-dom";
import "../Components/styles/Home.sass";

const Home = () => {
	return (
		<main id="home-main">
			<p id="logo">SQUAD</p>
			<div id="homepage-image" />
			<p id="intro-text">
				<b>COME AS YOU ARE</b> - this is what we believe in. Since 2016, Lorem
				ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique ipsum
				eu blandit pharetra. Praesent a ornare neque. Duis laoreet magna id
				pretium finibus. Vestibulum ut urna volutpat, mollis nunc eu, varius
				augue. Etiam imperdiet, arcu vitae cursus commodo, purus enim imperdiet
				massa, quis faucibus nisi quam vel enim. Vestibulum.
			</p>
			<div id="buttons">
				<Link to="/products">Shop Now</Link>
				<Link to="/cart">Your Cart</Link>
			</div>
		</main>
	);
};

export default Home;
