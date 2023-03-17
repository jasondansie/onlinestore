import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"



const api = 'https://fakestoreapi.com/products'

interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number,
    },
    quantity?: number, //this is optional 
}

const initialState = {
    products: [] as Product[] // this states this is an empty array that will be filled with product objects.

}

export const fetchProducts = createAsyncThunk(
    'products/products',
    async () => {
        const response = await axios.get<Product[]>(api)
        console.log("fetch");
        return response.data;
    }
)

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload
        })
    }
})

export default productSlice.reducer;