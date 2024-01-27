import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/components/sections/ProductList/ProductCard/ProductCard.types';

type InitialState = {
    products: Product[],
};

const ProductsSlice = createSlice({
    name: 'Products',
    initialState: {
        products: [],
    },
    reducers: {
        setProducts: (state: InitialState, action: PayloadAction<Product[]>) => {
            state.products = action.payload;
        },
    },
});

export default ProductsSlice.reducer;
export const { setProducts } = ProductsSlice.actions;
