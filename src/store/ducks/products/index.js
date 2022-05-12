import { createAction, createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = [];

export const setProducts = createAction('SET_PRODUCTS');

export default createReducer(INITIAL_STATE, {
    [setProducts.type]: (state, action) => [...state, ...action.payload],
});


