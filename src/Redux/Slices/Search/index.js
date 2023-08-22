import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { moviesApi } from "../../../Apis/Api";
import { moviesApiKeys } from "../../../Apis/ApiKeys";
export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies",
    async (keyword) => {
        try {
            const response = await axios({
                method: "GET",
                url: moviesApi + "?s="+keyword+"&apikey="+moviesApiKeys,
            });
            console.log("movies fetch api response slice", response.data.Search);
            //console.log("user fetch api headers", headers);
            if(response.data.Response){
            return response.data.Search;
        }
        else{
            return response.data.Error;
        }
        } catch (err) {
            if (!err.response) {
                throw err;
            }

        }
    }
);
export const fetchAsyncMoviesById = createAsyncThunk(
    "movies/fetchAsyncMoviesById",
    async (id) => {
        try {
            const response = await axios({
                method: "GET",
                url: moviesApi + "?apikey="+moviesApiKeys+"&i="+id,
            });
            console.log("movies fetch by id api response slice", response.data);
            //console.log("user fetch api headers", headers);
            
            return response.data;
        
        } catch (err) {
            if (!err.response) {
                throw err;
            }

        }
    }
);
const initialState = {
    loading: false,
    moviesload: false,
    moviedetail: null,
    moviesdata: null,
    error: null,
    succesmsg: null,
};
const serachSlice=createSlice({
    name:"search",
    initialState,
    reducers:{
        clearSearchedData: (state, action) => {
            state.moviesdata = null;
            state.moviedetail = null;
            state.loading = false;
            state.moviesload = false;
            state.error = null;
            state.succesmsg = null;
        },

    },
    extraReducers: {
        [fetchAsyncMovies.pending]: (state, {}) => {
            console.log("Movie fetch pending");
            state.moviesdata = null;
            state.loading = true;
            state.moviesload = false;
            state.error = null;
            state.succesmsg = null;
        },
        [fetchAsyncMovies.fulfilled]: (state, action) => {
            console.log("Movie fetch fulfilled", action.payload);
            state.loading = false;
            state.moviesload = true;
            state.moviesdata = action.payload;
            state.error = null;
            state.succesmsg = "Loading...";
            return state;
        },
        [fetchAsyncMovies.rejected]: (state, action) => {
            console.log("Movie fetch rejected", action.payload);
            state.moviesdata = null;
            state.loading = false;
            state.moviesload = false;
            state.error = action.payload;
            state.succesmsg = null;
            return state;
        },
        [fetchAsyncMoviesById.fulfilled]: (state, action) => {
            console.log("Movie fetch by id fulfilled", action.payload);
            
            return {...state,moviedetail:action.payload};
        },
    },
});

//1.name of slice,2.initial state,3.reducer,4.extra reducer
export const { clearSearchedData } = serachSlice.actions;
export const getMovies = (state) => state.searchReducer; //state.slicename of reducer.property of state
export const getMoviesById = (state) => state.searchReducer; //state.slicename.property of state
export default serachSlice.reducer;