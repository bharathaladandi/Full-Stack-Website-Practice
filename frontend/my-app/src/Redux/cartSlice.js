import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const cartproductsFetch = createAsyncThunk(
    "cart/cartproductsFetch", 
    async () => {
    const response = await axios.get("https://blossombackend.onrender.com/products/Sale")
    return response?.data;
    }
); 


const cartSlice = createSlice({

    name: 'cart',

    initialState: [],

    reducers:{

        add(state, action){

            state.push(action.payload);
        },

        remove(state, action){

            return state = state.filter((item) => item._id !== action.payload);
        },
    }, 
    
    extraReducers: {
        [cartproductsFetch.pending] : (state, action) => {

            state.status = "pending" 
        },

        [cartproductsFetch.fulfilled] : (state, action) => {

            state.status = "success" 
            state.push(action.payload);
        },
        [cartproductsFetch.rejected] : (state, action) => {

            state.status = "rejected" 
        }
    }

});


export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;