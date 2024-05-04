import {  selectCartTotalPrice } from "../redux/cart/cart.slice"
import { useAppSelector } from "../redux/store"

function OrderSummary() {
   const cartItemTotalPrice = useAppSelector(selectCartTotalPrice);

  return (
    <div className="w-[26%]  sticky top-[10vh] h-fit" >
      <h1 className="bg-gray-200 font-bold text-xl py-4 border-b border-b-gray-300 px-4 text-gray-500">Order Summary</h1>
      <div className="[&>div]:mb-3 [&>div]:text-sm [&>div]:px-4 py-5 bg-gray-200">
         <div className="flex justify-between items-center">
            <p>Subtotal</p>
            <p className="">${cartItemTotalPrice}</p>
         </div>
         <div className="flex justify-between items-center">
            <p>Shipping</p>
            <p className="">$00</p>
         </div>
         <div className="flex justify-between items-center">
            <p  className="text-green-500">Discount</p>
            <p className="text-green-500">$00</p>
         </div>
      </div>
      <div className="flex justify-between items-center px-4 py-3 bg-gray-300">
         <h2 className="font-bold">Total</h2>
         <h2 className="font-bold">${cartItemTotalPrice}</h2>
      </div>
      <button className="py-3 text-center w-full bg-blue-500 mt-4 font-bold text-white">Checkout</button>
    </div>
  )
}
export default OrderSummary