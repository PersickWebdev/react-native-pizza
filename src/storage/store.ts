import { configureStore, combineReducers } from '@reduxjs/toolkit';
import ProductsSlice from '@/storage/slices/ProductsSlice';

const RootReducer = combineReducers({
    Products: ProductsSlice,
});

export const store = configureStore({
    reducer: RootReducer,
});

export type RootState = ReturnType<typeof RootReducer>;
export type AppDispatch = typeof store.dispatch;
