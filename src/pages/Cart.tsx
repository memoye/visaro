import CartItems from "../components/CartItems";
import NavBar from "../components/NavBar";
import OrderSummary from "../components/OrderSummary";
import { selectCartItems } from "../redux/cart/cart.slice";
import { useAppSelector } from "../redux/store";

function Cart() {
  const cartItems = useAppSelector(selectCartItems);
  return (
    <div>
      <NavBar />
      <h1 className="flex h-[30rem] items-center justify-center bg-gray-300 font-jersey text-5xl md:text-7xl">
        Your Cart
      </h1>
      <div className="mt-4 justify-between gap-7 px-4 pb-7 md:flex md:px-12">
        <div className=" md:w-[74%] ">
          <div className="grid grid-cols-cart_container_sm border-b border-b-slate-300 py-4 md:grid-cols-cart_container_md [&>p]:text-[.8rem] [&>p]:text-gray-500">
            <p>PRODUCT</p>
            <p className="hidden md:block">PRICE</p>
            <p className="hidden md:block">QUANTITY</p>
            <p>TOTAL</p>
          </div>
          {cartItems.map((item) => (
            <CartItems key={item.id} {...item} />
          ))}
        </div>
        <OrderSummary />
      </div>
    </div>
  );
}
export default Cart;
