import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './ducks/products';
import selectedProductReducer from './ducks/selectProduct';
import cartReducer from './ducks/cart';

const store = configureStore({
    reducer: {
        products: productsReducer,
        product: selectedProductReducer,
        cart: cartReducer
    },
});

export default store;
