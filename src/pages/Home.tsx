import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { fetchProducts } from '../redux/products/product.request';
import ProductCard from '../components/ProductCard';

function Home() {
	const dispatch = useAppDispatch();
	const { status, products } = useAppSelector((state) => state.products);

	useEffect(() => {
		if (status == 'idle') {
			dispatch(fetchProducts());
		}
	}, []);
	return (
		<section className="grid grid-cols-product_container gap-x-8 gap-y-20 px-4 mt-6 bg-gray-100">
			{products.map((product) => (
				<ProductCard {...product} />
			))}
		</section>
	);
}
export default Home;
