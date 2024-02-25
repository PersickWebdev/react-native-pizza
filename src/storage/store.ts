import { configureStore, combineReducers } from '@reduxjs/toolkit';
import ProductsSlice from '@/storage/slices/ProductsSlice';
import FilterSlice from '@/storage/slices/FilterSlice';
import FeedbacksSlice from '@/storage/slices/FeedbacksSlice';
import CartSlice from '@/storage/slices/CartSlice';

const RootReducer = combineReducers({
    Products: ProductsSlice,
    Filter: FilterSlice,
    Feedbacks: FeedbacksSlice,
    Cart: CartSlice,
});

export const store = configureStore({
    reducer: RootReducer,
});

export type RootState = ReturnType<typeof RootReducer>;
export type AppDispatch = typeof store.dispatch;
