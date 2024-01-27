import { configureStore, combineReducers } from '@reduxjs/toolkit';
import ProductsSlice from '@/storage/slices/ProductsSlice';
import FilterSlice from '@/storage/slices/FilterSlice';

const RootReducer = combineReducers({
    Products: ProductsSlice,
    Filter: FilterSlice
});

export const store = configureStore({
    reducer: RootReducer,
});

export type RootState = ReturnType<typeof RootReducer>;
export type AppDispatch = typeof store.dispatch;
