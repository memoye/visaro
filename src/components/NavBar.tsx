import { NavLink, useParams } from 'react-router-dom';
import {
	selectCategories,
	selectProductsStatus,
} from '../redux/products/products.slice';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { useEffect } from 'react';
import { fetchProducts } from '../redux/products/product.request';
import { selectCartItems } from '../redux/cart/cart.slice';

const activeClassNames = "before:absolute 	before:-bottom-1 before:left-0 before:h-[2px] bp before:w-full before:bg-white"



function NavBar() {
	const categories = useAppSelector(selectCategories);
	const dispatch = useAppDispatch();
	const cartItems = useAppSelector(selectCartItems)
	const productStatus = useAppSelector(selectProductsStatus);
	const { category:currentCategory } = useParams();


	useEffect(() => {
		if (productStatus == 'idle') {
			dispatch(fetchProducts());
		}
	}, []);
	return (
		<nav className=" flex justify-between items-center fixed top-0 left-0 w-full to[] h-[10vh] px-5 z-10">
			<NavLink to="/" className="flex justify-between gap-1 items-center">
				<img className="w-6 invert brightness-200" src="/logo.svg" alt="" />
				<h2 className="font-jersey  text-white text-2xl">Visaro</h2>
			</NavLink>
			<div className="flex justify-center items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
				{categories.map((category, index) => (
					<NavLink
						key={index}
						className={`capitalize relative ${currentCategory == category &&  activeClassNames}  text-white`}
						to={`/home/${category}`}
					>
						{category}
					</NavLink>
				))}
			</div>
			<NavLink to="/cart" className="relative flex justify-center items-center">
				<img className="invert w-8 brightness-200" src="/cart.svg" alt="" />
				<span className="rounded-full w-5 h-5 bg-blue-400 text-sm  font-semibold flex justify-center items-center top-0 -right-2 absolute text-white -translate-y-1/2	">
					{cartItems.length}
				</span>
			</NavLink>
		</nav>
	);
}
export default NavBar;
