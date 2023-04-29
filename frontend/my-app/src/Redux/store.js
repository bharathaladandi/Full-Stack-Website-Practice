import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import cartReducer, { cartproductsFetch } from './cartSlice';

import productsReducer, { productsFetch } from "./providerSlice";

import { productsApi } from "./productapi";


const  store = configureStore({

    reducer:{

        cart: cartReducer,
        products: productsReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(productsApi.middleware),
    
});


store.dispatch(productsFetch())

export default store;