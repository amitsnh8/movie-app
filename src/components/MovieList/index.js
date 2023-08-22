import React, { useEffect } from "react";
import { Box,Container,Grid,CircularProgress } from "@mui/material";
import { useDispatch,useSelector } from "react-redux";
import MovieCard from "../MovieCard";
import { getMovies,fetchAsyncMovies,clearSearchedData } from "../../Redux/Slices/Search";

const MovieList=()=>{
    const moviesList=useSelector(getMovies);
    const dispatch=useDispatch();
    console.log("movies data list",moviesList.moviesdata);
    useEffect(()=>{
        dispatch(fetchAsyncMovies("Dil"));
    },[])
    
return(
    
    <Container maxWidth="false">
    
    <Box 
                sx={{
                    m:"30px auto 0 auto",
                    display: "flex",
                    alignItems: "center",width:"100%"
                    
                }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {/*
       {moviesList.moviesdata((item,index)=>{
            return(
                <Grid item xs={3} key={index}><MovieCard data={item} />
            </Grid>
            )
        })}
        */}
      {moviesList.succesmsg==="Loading..." && moviesList.moviesload===true && moviesList.error===null?(<>
      { moviesList.moviesdata!==null && moviesList.moviesdata!==undefined?(<>{moviesList.moviesdata.map((item,index)=>{
            return(
                <Grid item xs={3} key={index}><MovieCard data={item} />
            </Grid>
            )
        })}
        </>):(<p>Movies not found!</p>)}
      </>):(<Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>)}
      
      </Grid>
    </Box>
    </Container>
)
}
export default MovieList