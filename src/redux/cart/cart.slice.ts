import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Product = {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	quantity: number;
	rating: {
		rate: number;
		count: number;
	};
};

const initialState = {
	cartItems: [] as Product[],
};
const updateCartItem = (
	state: typeof initialState,
	id: Product['id'],
	updateFn: (item: Product) => Product
) => {
	const updatedCartItems = state.cartItems.map((item: Product) =>
		item.id === id ? updateFn(item) : item
	);
	state.cartItems = updatedCartItems;
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<Product>) => {
			const existingCartItem = state.cartItems.find(
				(item: Product) => item.id === action.payload.id
			);
			if (existingCartItem) {
				updateCartItem(state, action.payload.id, (item) => ({
					...item,
					quantity: item.quantity + 1,
				}));
			} else {
				state.cartItems.push({ ...action.payload, quantity: 1 });
			}
		},
		removeFromCart: (state, action: PayloadAction<Product['id']>) => {
			state.cartItems = state.cartItems.filter(
				(item: Product) => item.id !== action.payload
			);
		},
		increaseQuantity: (state, action: PayloadAction<Product['id']>) => {
			updateCartItem(state, action.payload, (item) => ({
				...item,
				quantity: item.quantity + 1,
			}));
		},
		decreaseQuantity: (state, action: PayloadAction<Product['id']>) => {
			updateCartItem(state, action.payload, (item) => ({
				...item,
				quantity: item.quantity > 1 ? item.quantity - 1 : 1,
			}));
		},
	},
});

export default cartSlice.reducer;
