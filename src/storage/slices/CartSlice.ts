import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '@/components/global/Cart/CartItemCard/CartItemCard.types';
import { getTotalItemsCount, getTotalItemsPrice } from '@/components/global/Cart/Cart.utils';

type InitialState = {
    cartItems: CartItem[];
    totalItemsCount: number;
    totalItemsPrice: number;
};

const CartSlice = createSlice({
    name: 'Cart',
    initialState: {
        cartItems: [],
        totalItemsCount: 0,
        totalItemsPrice: 0,
    },
    reducers: {
        setCartItems: (state: InitialState, action: PayloadAction<CartItem[]>) => {
            state.cartItems = action.payload;
        },
        addCartItem: (state: InitialState, action: PayloadAction<CartItem>) => {
            const newItems = {
                ...state.cartItems,
                [action.payload.id]: !state.cartItems[action.payload.id]
                    ? [action.payload]
                    : [...state.cartItems[action.payload.id], action.payload]
            };

            state.cartItems = newItems;
            state.totalItemsCount = getTotalItemsCount(state.cartItems);
            state.totalItemsPrice = getTotalItemsPrice(state.cartItems);
        },
        increaseByOne: (state: InitialState, action: PayloadAction<number>) => {
            const newItemsIncreased = {
                ...state.cartItems,
            }
            for (let array in newItemsIncreased) {
                if (Number(array) === action.payload) {
                    //@ts-ignore
                    newItemsIncreased[array].push(newItemsIncreased[array][0]);
                }
            }
            state.cartItems = newItemsIncreased;
            state.totalItemsCount = getTotalItemsCount(newItemsIncreased);
            state.totalItemsPrice = getTotalItemsPrice(newItemsIncreased);
        },
        decreaseByOne: (state: InitialState, action: PayloadAction<number>) => {
            const newItemsDecreased = {
                ...state.cartItems,
            }
            for (let array in newItemsDecreased) {
                if (Number(array) === action.payload) {
                    // @ts-ignore
                    if (newItemsDecreased[array].length > 1) {
                        // @ts-ignore
                        newItemsDecreased[array].pop();
                    }
                }
            }
            state.cartItems = newItemsDecreased;
            state.totalItemsCount = getTotalItemsCount(newItemsDecreased);
            state.totalItemsPrice = getTotalItemsPrice(newItemsDecreased);
        },
        removeCartItem: (state: InitialState, action: PayloadAction<number>) => {
            const newItemsRemoved = {
                ...state.cartItems,
            }
            for (let array in newItemsRemoved) {
                if (Number(array) === action.payload) {
                    // @ts-ignore
                    newItemsRemoved[array].length = 0;
                }
            }
            state.totalItemsCount = getTotalItemsCount(newItemsRemoved);
            state.totalItemsPrice = getTotalItemsPrice(newItemsRemoved);
        },
    }
});

export default CartSlice.reducer;
export const { setCartItems, addCartItem, increaseByOne, decreaseByOne, removeCartItem } = CartSlice.actions;
