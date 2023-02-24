import { Link } from "react-router-dom";
import "../styles/Home.sass";

const Home = () => {
	return (
		<main id="home-main">
			<h1 id="logo">OUT SPOKEN</h1>
			<figure id="homepage-image" alt="image">
				<figcaption>
					<a href="https://www.pexels.com/@anastasiia-chaikovska-206547003/">
						Anastasiia Chaikovska
					</a>
				</figcaption>
			</figure>
			<article id="intro-text">
				<b>AWOKEN | UNBROKEN | OUTSPOKEN</b> - this is what we believe in. Since
				2016, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
				tristique ipsum eu blandit pharetra. Praesent a ornare neque. Duis
				laoreet magna id pretium finibus. Vestibulum ut urna volutpat, mollis
				nunc eu, varius augue. Etiam imperdiet, arcu vitae cursus commodo, purus
				enim imperdiet massa, quis faucibus nisi quam vel enim. Vestibulum.
			</article>
			<div id="buttons">
				<Link to="/Shopping-Cart/products">Shop Now</Link>
				<Link to="/Shopping-Cart/cart">Your Cart</Link>
			</div>
		</main>
	);
};

export default Home;
