import { configureStore } from "@reduxjs/toolkit";

import cartReducer, { cartproductsFetch } from './cartSlice';

import productsReducer, { productsFetch } from "./providerSlice";
const  store = configureStore({

    reducer:{

        cart: cartReducer,
        products: productsReducer,
    },
});


store.dispatch(productsFetch())

export default store;