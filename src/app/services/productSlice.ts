// productSlice.ts

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

type Review = {
    customer: string;
    review: string;
    score: number;
};

type Sale = {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
}

type Product = {
    id: string;
    title: string;
    image: string;
    subtitle: string;
    brand: string;
    reviews: Review[];
    retailer: string;
    details: string[];
    tags: string[];
    sales: Sale[]
};

interface ProductState {
    products: Product[];
    currentProductIndex: number;
    loading: boolean;
    error: string | null;
}

const initialState: ProductState = {
    products: [],
    currentProductIndex: 0,
    loading: false,
    error: null,
};

export const fetchProducts = createAsyncThunk<Product[], void>('products/fetchProducts', async () => {
    try {
        const response = await fetch('/products.json');
        const products = await response.json();
        return products as Product[];
    } catch (error) {
        throw new Error('Failed to fetch products');
    }
});

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        incrementProductIndex(state) {
            state.currentProductIndex += 1;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.loading = false;
                state.error = 'Failed to fetch products';
            });
    },
});

export const { incrementProductIndex } = productSlice.actions;
export default productSlice.reducer;