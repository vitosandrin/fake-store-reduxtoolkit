import { createReducer, createAction } from "@reduxjs/toolkit"

const INITIAL_STATE = [];

export const selectedProduct = createAction('SELECTED_PRODUCT')

export default createReducer(INITIAL_STATE, {
    [selectedProduct.type]: (state, action) => [...state, action.payload]
});