import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newData = action.payload;
            const existingData = state.cart.find((data) => data.id === newData.id);
            if (!existingData) {
                state.cart.push({
                    id: newData.id,
                    price: newData.price,
                    quantity: 1,
                    totalPrice: newData.price,
                    title: newData.title,
                    description: newData.description,
                });
            }
        },
        removeFromCart(state, action) {
            const id = action.payload;
            const existingData = state.cart.find((data) => data.id === id);
            if (existingData) {
                state.cart = state.cart.filter((data) => data.id !== id);
            }
        },
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const getAllDataCart = (state) => state.cart.cart;

export default cartSlice.reducer;
