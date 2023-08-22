import React, { useEffect } from "react";
import MovieList from "../MovieList";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "../../Redux/Slices/Search";

const Home=()=>{
    const dispatch=useDispatch();
//     useEffect(()=>{
// dispatch(fetchAsyncMovies());
//     },[dispatch])
    return(
        <>
        <MovieList />
        </>
    )
}
export default Home;