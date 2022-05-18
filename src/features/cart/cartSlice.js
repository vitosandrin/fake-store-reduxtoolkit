import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
    totalQuantity: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cart.find((item) => item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItem) {
                state.cart.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    title: newItem.title,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.cart.find((item) => item.id === id);
            state.totalQuantity--;
            if (existingItem.quantity === 1) {
                state.cart = state.cart.filter((item) => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        },
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const getAllDataCart = (state) => state.cart.cart;

export default cartSlice.reducer;
