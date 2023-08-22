import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../Slices/Search";
export const store=configureStore({
    reducer:{
        searchReducer:searchReducer,
    }
})