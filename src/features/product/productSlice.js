import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../services/api';

export const fetchAsyncProducts = createAsyncThunk(
    'products/fetchAsyncProducts',
    async () => {
        const response = await api.get('/products')
        return response.data
    }
)

export const fetchAsyncProduct = createAsyncThunk(
    'products/fetchAsyncProduct',
    async (id) => {
        const response = await api.get(`/products/${id}`);
        return response.data
    }
);

const initialState = {
    products: [],
    product: {},
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        removeSingleProduct: (state) => {
            state.product = {};
        },
    },

    extraReducers: {
        [fetchAsyncProducts.pending]: () => {
            console.log("Pending");
        },
        [fetchAsyncProducts.fulfilled]: (state, action) => {
            console.log("Fetched Successfully!");
            return { ...state, products: action.payload };
        },
        [fetchAsyncProducts.rejected]: () => {
            console.log("Rejected!");
        },
        [fetchAsyncProduct.pending]: () => {
            console.log("Pending");
        },
        [fetchAsyncProduct.fulfilled]: (state, action) => {
            console.log("Fetched Successfully!");
            return { ...state, product: action.payload };
        },
        [fetchAsyncProduct.rejected]: () => {
            console.log("Rejected!");
        },
    }
});

export const { removeSingleProduct } = productSlice.actions;

export const getAllProducts = (state) => state.products.products;
export const getSingleProduct = (state) => state.products.product;

export default productSlice.reducer;