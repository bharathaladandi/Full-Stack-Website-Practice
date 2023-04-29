import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    items:[], 
    status:null
};


export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    
    async () => {
     const responce =   await axios.get(`https://blossombackend.onrender.com/products/SelfCare`)
     return responce?.data
    }
    )
const productsSlice = createSlice({
    name:"products",
    initialState,
    reducers: {},
    extraReducers: {
        [productsFetch.pending] : (state, action) => {
            state.status = "pending"
        },
        [productsFetch.fulfilled] : (state, action) => {
            state.status = "success"
            state.items = action.payload
        },
        [productsFetch.rejected] : (state, action) => {
            state.status = "rejected"
        }
    }
});

export default productsSlice.reducer