import { Product } from "../redux/products/product.request";

function ProductCard(props: Product) {
	return (
		<div>
			<div className="h-80 p-4 flex justify-center items-center">
				<img className="h-full  w-full block object-cover object-top" src={props.image} alt={props.description} />
			</div>
		</div> 
	);
}
export default ProductCard;
