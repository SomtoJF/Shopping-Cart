import { useEffect, useState } from "react";
import CartItem from "../Components/cart/CartItem";
import "../styles/cart/Cart.sass";

const Cart = ({ setCart, cart }) => {
	const [paymentAmount, setPaymentAmount] = useState(0);
	useEffect(() => {
		setPaymentAmount(cart.reduce(getAmount, 0));
		function getAmount(total, item) {
			return total + item.price * item.quantity;
		}
	}, [cart]);
	return (
		<div id="cart-page">
			<h2>
				<div>PAYMENT AMOUNT:</div>
				<div>${paymentAmount}</div>
			</h2>

			{cart.map((item, index) => (
				<CartItem
					product={item}
					setCart={setCart}
					cart={cart}
					key={index + 100000}
				/>
			))}
		</div>
	);
};

export default Cart;
