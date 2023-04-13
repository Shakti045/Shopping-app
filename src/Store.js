import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./Cartslice";
let Store =configureStore({
    reducer:{
        Cart:Cartslice
    }
})

export default Store;