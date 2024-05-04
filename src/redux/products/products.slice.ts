import { createSlice } from '@reduxjs/toolkit';
import { Product } from './product.request';
import { fetchProducts } from './product.request';

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

