import { configureStore } from "@reduxjs/toolkit";

import cartReducer, { cartproductsFetch } from './cartSlice';

const  store = configureStore({

    reducer:{

        cart: cartReducer,

    },
});


store.dispatch(cartproductsFetch())

export default store;