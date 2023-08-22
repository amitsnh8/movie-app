import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card,CardMedia,Box,Typography,CardContent, Container, Alert, CircularProgress } from "@mui/material";
import { useDispatch,useSelector } from "react-redux";
import { fetchAsyncMoviesById, getMoviesById } from "../../Redux/Slices/Search";
import MovieList from "../MovieList";


const MovieDetail=()=>{
    const {id}=useParams();
    const moviesDetails=useSelector(getMoviesById);
    const dispatch=useDispatch();
    useEffect(()=>{
dispatch(fetchAsyncMoviesById(id));
    },[dispatch,id])
    return(
        <>
    <Container maxWidth="false">
    
    <Box 
                sx={{
                    m:"30px auto 0 auto",
                    display: "flex",
                    alignItems: "center",width:"100%"
                    
                }}>
                    {moviesDetails.moviedetail!==null?(moviesDetails.moviedetail.Error?(<Alert severity="error">{moviesDetails.moviedetail.Error}</Alert>):(<Card sx={{ display: 'flex' }}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={moviesDetails.moviedetail.Poster}
          alt={moviesDetails.moviedetail.Title}
        />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {moviesDetails.moviedetail.Title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {moviesDetails.moviedetail.Plot}
          </Typography>
        </CardContent>
        
      </Box>
    </Card>)):(
      <CircularProgress />)}
        
    </Box>
    </Container>
    <MovieList />
    </>
    )
}
export default MovieDetail;