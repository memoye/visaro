import CartItems from '../components/CartItems';
import NavBar from '../components/NavBar';
import OrderSummary from '../components/OrderSummary';
import { selectCartItems } from '../redux/cart/cart.slice';
import { useAppSelector } from '../redux/store';

function Cart() {
	const cartItems = useAppSelector(selectCartItems);
	return (
		<div className="">
			<NavBar />
			<div className="text-7xl flex justify-center items-center font-jersey h-[30rem] bg-gray-300">
				Your Cart
			</div>
			<div className='flex justify-between px-12 gap-7 mt-4'>
				<div className="w-[74%] ">
					<div className='grid grid-cols-cart_container py-4 border-b border-b-slate-300 [&>p]:text-[.8rem] [&>p]:text-gray-500'>
						<p>PRODUCT</p>
						<p>PRICE</p>
						<p>QUANTITY</p>
						<p>TOTAL</p>
					</div>
					{cartItems.map((item) => (
						<CartItems {...item} />
					))}
				</div>
				<OrderSummary />
			</div>
		</div>
	);
}
export default Cart;
