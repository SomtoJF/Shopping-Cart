import "../../styles/cart/CartItem.sass";

const CartItem = ({ product, setCart, cart }) => {
	return (
		<article className="cart-item">
			<div className="cart-image-container">
				<img src={product.src} alt={product.alt} />
			</div>
			<div>{product.photographer}</div>
			<div>{product.quantity} Units</div>
			<div>{product.alt}</div>
			<div>Total Price: ${product.price * product.quantity}</div>
			<button
				onClick={() => {
					setCart(cart.filter((item) => item.id !== product.id));
				}}
			>
				REMOVE
			</button>
		</article>
	);
};

export default CartItem;
