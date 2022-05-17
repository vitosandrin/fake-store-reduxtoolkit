import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
    amount: 0,
    total: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,

})

