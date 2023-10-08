import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts, getProduct } from "./action";

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        loading: false,
        entities: [],
        entity: {},
        error: null
    },
    extraReducers: (builder) => 
    builder
    .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
    })
    .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.entities = action.payload;
    })
    .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
    })
    // Detail
    .addCase(getProduct.pending, (state) => {
        state.loading = true;
    })
    .addCase(getProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.entity = action.payload;
    })
    .addCase(getProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
    })
})

export default productSlice.reducer;