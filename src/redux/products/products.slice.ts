import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../cart/cart.request';
import { fetchProducts } from '../cart/cart.request';

const initialState = {
	products: [] as Product[],
	status: 'idle' as 'idle' | 'success' | 'failed',
};

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			state.products = action.payload;
			state.status = 'success';
		});
	},
});

export default productSlice.reducer;

const products = [
	{
		id: 'men-1',
		name: 'Classic White Shirt',
		price: 29.99,
		description: 'A timeless white dress shirt, perfect for any occasion.',
		category: "Men's Shirts",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780427/visaro/mens/men-6_yskqy7.jpg',
		quantity: 0,
	},
	{
		id: 'men-2',
		name: 'Slim Fit Navy Shirt',
		price: 39.99,
		description: 'A modern slim fit navy shirt with a subtle pattern.',
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780424/visaro/mens/men-5_hicchp.jpg',
		quantity: 0,
	},
	{
		id: 'men-3',
		name: 'Casual Chambray Shirt',
		price: 24.99,
		description: 'A relaxed and comfortable chambray shirt for casual wear.',
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780421/visaro/mens/men-3_yetfvo.jpg',
		quantity: 0,
	},
	{
		id: 'men-4',
		name: 'Striped Oxford Shirt',
		price: 34.99,
		description: 'A classic Oxford shirt with a modern striped pattern.',
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780420/visaro/mens/men-2_bgo3t4.jpg',
		quantity: 0,
	},
	{
		id: 'men-5',
		name: 'Linen Short-Sleeve Shirt',
		price: 29.99,
		description:
			'A lightweight and breathable linen shirt for warmer weather.',
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780417/visaro/mens/men-1_cc3tyg.jpg',
		quantity: 0,
	},
	{
		id: 'men-6',
		name: 'Flannel Plaid Shirt',
		price: 39.99,
		description:
			'A cozy and stylish flannel shirt with a classic plaid pattern.',
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780415/visaro/mens/men-14_etjvih.jpg',
		quantity: 0,
	},
	{
		id: 'men-7',
		name: 'Denim Western Shirt',
		price: 44.99,
		description:
			'A rugged and stylish denim shirt with a Western-inspired design.',
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780412/visaro/mens/men-13_c58a7x.jpg',
		quantity: 0,
	},
	{
		id: 'men-8',
		name: 'Printed Hawaiian Shirt',
		price: 29.99,
		description: 'A vibrant and fun Hawaiian shirt with a tropical print.',
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780411/visaro/mens/men-12_pnc3bo.jpg',
		quantity: 0,
	},
	{
		id: 'men-9',
		name: 'Corduroy Button-Down Shirt',
		price: 39.99,
		description: 'A warm and cozy corduroy shirt with a button-down collar.',
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780409/visaro/mens/men-11_fik1i8.jpg',
		quantity: 0,
	},
	{
		id: 'men-10',
		name: 'Polo Shirt with Contrast Collar',
		price: 24.99,
		description:
			'A classic polo shirt with a contrasting collar for a pop of style.',
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780407/visaro/mens/men-10_xvm6jg.jpg',
		quantity: 0,
	},
	{
		id: 'men-11',
		name: 'Casual Henley Shirt',
		price: 29.99,
		description:
			'A relaxed and comfortable Henley shirt for a laid-back look.',
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780405/visaro/mens/men-9_mp44nb.jpg',
		quantity: 0,
	},
	{
		id: 'men-12',
		name: 'Checked Flannel Shirt',
		price: 34.99,
		description:
			'A warm and stylish flannel shirt with a classic checked pattern.',
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780403/visaro/mens/men-8_mmte2w.jpg',
		quantity: 0,
	},
	{
		id: 'men-13',
		name: 'Denim Shirt Jacket',
		price: 49.99,
		description:
			'A versatile denim shirt jacket that can be worn as a shirt or light jacket.',
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780401/visaro/mens/men-7_rluux8.jpg',
		quantity: 0,
	},
	{
		id: 'men-14',
		name: 'Linen Blend Casual Shirt',
		price: 29.99,
		description:
			'A lightweight and breathable linen blend shirt for casual occasions.',
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780399/visaro/mens/men-4_rdlnfa.jpg',
		quantity: 0,
	},

	{
		id: 'hat-1',
		name: 'Classic Baseball Cap',
		price: 14.99,
		description:
			'A timeless baseball cap with a curved visor and adjustable strap.',
		category: 'Hats',
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780487/visaro/hats/hat-1_pupkpx.jpg',
		quantity: 0,
	},
	{
		id: 'hat-2',
		name: 'Fedora Hat',
		price: 29.99,
		description: 'A stylish fedora hat with a classic vintage look.',
		category: 'Hats',
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780485/visaro/hats/hat-6_yd44l0.jpg',
		quantity: 0,
	},
	{
		id: 'hat-3',
		name: 'Bucket Hat',
		price: 19.99,
		description: 'A trendy and practical bucket hat for outdoor activities.',
		category: 'Hats',
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780482/visaro/hats/hat-5_rc81sp.jpg',
		quantity: 0,
	},
	{
		id: 'hat-4',
		name: 'Beanie Hat',
		price: 12.99,
		description: 'A cozy and warm beanie hat for cold weather.',
		category: 'Hats',
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780479/visaro/hats/hat-4_qppzue.jpg',
		quantity: 0,
	},
	{
		id: 'hat-5',
		name: 'Sun Visor',
		price: 9.99,
		description:
			'A lightweight and breathable sun visor for outdoor activities.',
		category: 'Hats',
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780477/visaro/hats/hat-3_fiquhe.jpg',
		quantity: 0,
	},
	{
		id: 'hat-6',
		name: 'Cowboy Hat',
		price: 39.99,
		description: 'A classic cowboy hat with a wide brim and a stylish look.',
		category: 'Hats',
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780474/visaro/hats/hat-2_qushdx.jpg',
		quantity: 0,
	},

	{
		id: 'glass-1',
		name: 'Classic Aviator Sunglasses',
		price: 49.99,
		description:
			'Timeless aviator-style sunglasses with a sleek metal frame.',
		category: 'Glasses',
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780257/visaro/glass/glass-3_q5ztvv.jpg',
		quantity: 0,
	},
	{
		id: 'glass-2',
		name: 'Retro Round Eyeglasses',
		price: 39.99,
		description: 'Vintage-inspired round eyeglasses with a trendy style.',
		category: 'Glasses',
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780256/visaro/glass/glass-1_b2tfaf.jpg',
		quantity: 0,
	},
	{
		id: 'glass-3',
		name: 'Blue Light Blocking Glasses',
		price: 24.99,
		description:
			'Stylish and functional glasses that block blue light from digital screens.',
		category: 'Glasses',
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780256/visaro/glass/glass-5_rpbnf7.jpg',
		quantity: 0,
	},
	{
		id: 'glass-4',
		name: 'Rectangular Tortoiseshell Eyeglasses',
		price: 59.99,
		description:
			'Classic rectangular frames with a timeless tortoiseshell pattern.',
		category: 'Glasses',
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780256/visaro/glass/glass-4_cttorm.jpg',
		quantity: 0,
	},
	{
		id: 'glass-5',
		name: 'Oversized Cat-Eye Sunglasses',
		price: 44.99,
		description:
			'Bold and stylish oversized cat-eye sunglasses for a retro look.',
		category: 'Glasses',
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780256/visaro/glass/glass-6_poc0te.jpg',
		quantity: 0,
	},
	{
		id: 'glass-6',
		name: 'Rimless Titanium Eyeglasses',
		price: 79.99,
		description:
			'Lightweight and durable rimless titanium eyeglasses for a modern look.',
		category: 'Glasses',
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780256/visaro/glass/glass-2_mcocag.jpg',
		quantity: 0,
	},

	{
		id: 'women-1',
		name: 'Floral Print Blouse',
		price: 34.99,
		description:
			'A lightweight and feminine blouse with a beautiful floral print.',
		category: "Women's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714782130/visaro/womens/women-2_u8mqlb.jpg',
		quantity: 0,
	},
	{
		id: 'women-2',
		name: 'Striped Button-Down Shirt',
		price: 39.99,
		description: 'A classic striped button-down shirt with a modern twist.',
		category: "Women's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714782126/visaro/womens/women-1_y7acpc.jpg',
		quantity: 0,
	},
	{
		id: 'women-3',
		name: 'Off-Shoulder Top',
		price: 29.99,
		description:
			'A trendy and flirty off-shoulder top with a fitted silhouette.',
		category: "Women's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714782122/visaro/womens/women-11_mwt8ml.jpg',
		quantity: 0,
	},
	{
		id: 'women-4',
		name: 'Oversized Chambray Shirt',
		price: 44.99,
		description:
			'A relaxed and effortless oversized chambray shirt with a casual vibe.',
		category: "Women's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714782119/visaro/womens/women-10_kd0un8.jpg',
		quantity: 0,
	},
	{
		id: 'women-5',
		name: 'Lace Tank Top',
		price: 24.99,
		description:
			'A delicate and feminine lace tank top, perfect for layering.',
		category: "Women's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714782116/visaro/womens/women-9_p6ljom.jpg',
		quantity: 0,
	},
	{
		id: 'women-6',
		name: 'Graphic Tee',
		price: 19.99,
		description: 'A fun and trendy graphic tee with a bold print or slogan.',
		category: "Women's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714782112/visaro/womens/women-8_ucioqt.jpg',
		quantity: 0,
	},
	{
		id: 'women-7',
		name: 'Wrap Blouse',
		price: 49.99,
		description: 'An elegant and flattering wrap blouse with a tie waist.',
		category: "Women's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714782108/visaro/womens/women-7_ievff9.jpg',
		quantity: 0,
	},
	{
		id: 'women-8',
		name: 'Denim Shirt',
		price: 39.99,
		description:
			'A classic and versatile denim shirt that never goes out of style.',
		category: "Women's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714782105/visaro/womens/women-6_t5gwkl.jpg',
		quantity: 0,
	},
	{
		id: 'women-9',
		name: 'Satin Camisole',
		price: 29.99,
		description:
			'A luxurious and silky satin camisole for a touch of elegance.',
		category: "Women's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714782102/visaro/womens/women-5_o3vlzv.jpg',
		quantity: 0,
	},
	{
		id: 'women-10',
		name: 'Boho Peasant Blouse',
		price: 34.99,
		description:
			'A bohemian-inspired peasant blouse with a romantic and free-spirited vibe.',
		category: "Women's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714782099/visaro/womens/women-4_dyjiyh.jpg',
		quantity: 0,
	},
	{
		id: 'women-11',
		name: 'Linen Button-Down Shirt',
		price: 44.99,
		description:
			'A breathable and lightweight linen button-down shirt for warm weather.',
		category: "Women's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714782097/visaro/womens/women-3_glqpeg.jpg',
		quantity: 0,
	},
];

const menShirts: Product[] = [
	{
		id: 'men-1',
		name: 'Classic White Shirt',
		price: 29.99,
		description: 'A timeless white dress shirt, perfect for any occasion.',
		category: "Men's Shirts",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780427/visaro/mens/men-6_yskqy7.jpg',
		quantity: 0,
	},
	{
		id: 'men-2',
		name: 'Slim Fit Navy Shirt',
		price: 39.99,
		description: 'A modern slim fit navy shirt with a subtle pattern.',
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780424/visaro/mens/men-5_hicchp.jpg',
		quantity: 0,
	},
	{
		id: 'men-3',
		name: 'Casual Chambray Shirt',
		price: 24.99,
		description: 'A relaxed and comfortable chambray shirt for casual wear.',
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780421/visaro/mens/men-3_yetfvo.jpg',
		quantity: 0,
	},
	{
		id: 'men-4',
		name: 'Striped Oxford Shirt',
		price: 34.99,
		description: 'A classic Oxford shirt with a modern striped pattern.',
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780420/visaro/mens/men-2_bgo3t4.jpg',
		quantity: 0,
	},
	{
		id: 'men-5',
		name: 'Linen Short-Sleeve Shirt',
		price: 29.99,
		description:
			'A lightweight and breathable linen shirt for warmer weather.',
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780417/visaro/mens/men-1_cc3tyg.jpg',
		quantity: 0,
	},
	{
		id: 'men-6',
		name: 'Flannel Plaid Shirt',
		price: 39.99,
		description:
			'A cozy and stylish flannel shirt with a classic plaid pattern.',
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780415/visaro/mens/men-14_etjvih.jpg',
		quantity: 0,
	},
	{
		id: 'men-7',
		name: 'Denim Western Shirt',
		price: 44.99,
		description:
			'A rugged and stylish denim shirt with a Western-inspired design.',
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780412/visaro/mens/men-13_c58a7x.jpg',
		quantity: 0,
	},
	{
		id: 'men-8',
		name: 'Printed Hawaiian Shirt',
		price: 29.99,
		description: 'A vibrant and fun Hawaiian shirt with a tropical print.',
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780411/visaro/mens/men-12_pnc3bo.jpg',
		quantity: 0,
	},
	{
		id: 'men-9',
		name: 'Corduroy Button-Down Shirt',
		price: 39.99,
		description: 'A warm and cozy corduroy shirt with a button-down collar.',
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780409/visaro/mens/men-11_fik1i8.jpg',
		quantity: 0,
	},
	{
		id: 'men-10',
		name: 'Polo Shirt with Contrast Collar',
		price: 24.99,
		description:
			'A classic polo shirt with a contrasting collar for a pop of style.',
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780407/visaro/mens/men-10_xvm6jg.jpg',
		quantity: 0,
	},
	{
		id: 'men-11',
		name: 'Casual Henley Shirt',
		price: 29.99,
		description:
			'A relaxed and comfortable Henley shirt for a laid-back look.',
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780405/visaro/mens/men-9_mp44nb.jpg',
		quantity: 0,
	},
	{
		id: 'men-12',
		name: 'Checked Flannel Shirt',
		price: 34.99,
		description:
			'A warm and stylish flannel shirt with a classic checked pattern.',
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780403/visaro/mens/men-8_mmte2w.jpg',
		quantity: 0,
	},
	{
		id: 'men-13',
		name: 'Denim Shirt Jacket',
		price: 49.99,
		description:
			'A versatile denim shirt jacket that can be worn as a shirt or light jacket.',
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780401/visaro/mens/men-7_rluux8.jpg',
		quantity: 0,
	},
	{
		id: 'men-14',
		name: 'Linen Blend Casual Shirt',
		price: 29.99,
		description:
			'A lightweight and breathable linen blend shirt for casual occasions.',
		category: "Men's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780399/visaro/mens/men-4_rdlnfa.jpg',
		quantity: 0,
	},
];

const hats: Product[] = [
	{
		id: 'hat-1',
		name: 'Classic Baseball Cap',
		price: 14.99,
		description:
			'A timeless baseball cap with a curved visor and adjustable strap.',
		category: 'Hats',
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780487/visaro/hats/hat-1_pupkpx.jpg',
		quantity: 0,
	},
	{
		id: 'hat-2',
		name: 'Fedora Hat',
		price: 29.99,
		description: 'A stylish fedora hat with a classic vintage look.',
		category: 'Hats',
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780485/visaro/hats/hat-6_yd44l0.jpg',
		quantity: 0,
	},
	{
		id: 'hat-3',
		name: 'Bucket Hat',
		price: 19.99,
		description: 'A trendy and practical bucket hat for outdoor activities.',
		category: 'Hats',
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780482/visaro/hats/hat-5_rc81sp.jpg',
		quantity: 0,
	},
	{
		id: 'hat-4',
		name: 'Beanie Hat',
		price: 12.99,
		description: 'A cozy and warm beanie hat for cold weather.',
		category: 'Hats',
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780479/visaro/hats/hat-4_qppzue.jpg',
		quantity: 0,
	},
	{
		id: 'hat-5',
		name: 'Sun Visor',
		price: 9.99,
		description:
			'A lightweight and breathable sun visor for outdoor activities.',
		category: 'Hats',
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780477/visaro/hats/hat-3_fiquhe.jpg',
		quantity: 0,
	},
	{
		id: 'hat-6',
		name: 'Cowboy Hat',
		price: 39.99,
		description: 'A classic cowboy hat with a wide brim and a stylish look.',
		category: 'Hats',
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780474/visaro/hats/hat-2_qushdx.jpg',
		quantity: 0,
	},
];

const eyeglasses: Product[] = [
	{
		id: 'glass-1',
		name: 'Classic Aviator Sunglasses',
		price: 49.99,
		description:
			'Timeless aviator-style sunglasses with a sleek metal frame.',
		category: 'Glasses',
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780257/visaro/glass/glass-3_q5ztvv.jpg',
		quantity: 0,
	},
	{
		id: 'glass-2',
		name: 'Retro Round Eyeglasses',
		price: 39.99,
		description: 'Vintage-inspired round eyeglasses with a trendy style.',
		category: 'Glasses',
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780256/visaro/glass/glass-1_b2tfaf.jpg',
		quantity: 0,
	},
	{
		id: 'glass-3',
		name: 'Blue Light Blocking Glasses',
		price: 24.99,
		description:
			'Stylish and functional glasses that block blue light from digital screens.',
		category: 'Glasses',
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780256/visaro/glass/glass-5_rpbnf7.jpg',
		quantity: 0,
	},
	{
		id: 'glass-4',
		name: 'Rectangular Tortoiseshell Eyeglasses',
		price: 59.99,
		description:
			'Classic rectangular frames with a timeless tortoiseshell pattern.',
		category: 'Glasses',
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780256/visaro/glass/glass-4_cttorm.jpg',
		quantity: 0,
	},
	{
		id: 'glass-5',
		name: 'Oversized Cat-Eye Sunglasses',
		price: 44.99,
		description:
			'Bold and stylish oversized cat-eye sunglasses for a retro look.',
		category: 'Glasses',
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780256/visaro/glass/glass-6_poc0te.jpg',
		quantity: 0,
	},
	{
		id: 'glass-6',
		name: 'Rimless Titanium Eyeglasses',
		price: 79.99,
		description:
			'Lightweight and durable rimless titanium eyeglasses for a modern look.',
		category: 'Glasses',
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714780256/visaro/glass/glass-2_mcocag.jpg',
		quantity: 0,
	},
];

const womensShirts: Product[] = [
	{
		id: 'women-1',
		name: 'Floral Print Blouse',
		price: 34.99,
		description:
			'A lightweight and feminine blouse with a beautiful floral print.',
		category: "Women's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714782130/visaro/womens/women-2_u8mqlb.jpg',
		quantity: 0,
	},
	{
		id: 'women-2',
		name: 'Striped Button-Down Shirt',
		price: 39.99,
		description: 'A classic striped button-down shirt with a modern twist.',
		category: "Women's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714782126/visaro/womens/women-1_y7acpc.jpg',
		quantity: 0,
	},
	{
		id: 'women-3',
		name: 'Off-Shoulder Top',
		price: 29.99,
		description:
			'A trendy and flirty off-shoulder top with a fitted silhouette.',
		category: "Women's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714782122/visaro/womens/women-11_mwt8ml.jpg',
		quantity: 0,
	},
	{
		id: 'women-4',
		name: 'Oversized Chambray Shirt',
		price: 44.99,
		description:
			'A relaxed and effortless oversized chambray shirt with a casual vibe.',
		category: "Women's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714782119/visaro/womens/women-10_kd0un8.jpg',
		quantity: 0,
	},
	{
		id: 'women-5',
		name: 'Lace Tank Top',
		price: 24.99,
		description:
			'A delicate and feminine lace tank top, perfect for layering.',
		category: "Women's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714782116/visaro/womens/women-9_p6ljom.jpg',
		quantity: 0,
	},
	{
		id: 'women-6',
		name: 'Graphic Tee',
		price: 19.99,
		description: 'A fun and trendy graphic tee with a bold print or slogan.',
		category: "Women's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714782112/visaro/womens/women-8_ucioqt.jpg',
		quantity: 0,
	},
	{
		id: 'women-7',
		name: 'Wrap Blouse',
		price: 49.99,
		description: 'An elegant and flattering wrap blouse with a tie waist.',
		category: "Women's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714782108/visaro/womens/women-7_ievff9.jpg',
		quantity: 0,
	},
	{
		id: 'women-8',
		name: 'Denim Shirt',
		price: 39.99,
		description:
			'A classic and versatile denim shirt that never goes out of style.',
		category: "Women's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714782105/visaro/womens/women-6_t5gwkl.jpg',
		quantity: 0,
	},
	{
		id: 'women-9',
		name: 'Satin Camisole',
		price: 29.99,
		description:
			'A luxurious and silky satin camisole for a touch of elegance.',
		category: "Women's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714782102/visaro/womens/women-5_o3vlzv.jpg',
		quantity: 0,
	},
	{
		id: 'women-10',
		name: 'Boho Peasant Blouse',
		price: 34.99,
		description:
			'A bohemian-inspired peasant blouse with a romantic and free-spirited vibe.',
		category: "Women's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714782099/visaro/womens/women-4_dyjiyh.jpg',
		quantity: 0,
	},
	{
		id: 'women-11',
		name: 'Linen Button-Down Shirt',
		price: 44.99,
		description:
			'A breathable and lightweight linen button-down shirt for warm weather.',
		category: "Women's",
		image: 'https://res.cloudinary.com/dtmsuzqqq/image/upload/v1714782097/visaro/womens/women-3_glqpeg.jpg',
		quantity: 0,
	},
];

fetch('https://sheetdb.io/api/v1/msqpf7ram4g24', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        data: products
    })
})
  .then((response) => response.json())
  .then((data) => console.log(data));