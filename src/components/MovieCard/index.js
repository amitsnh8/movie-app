import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cardimage from "../../assets/images/cards/contemplative-reptile.jpg"
import { Link } from '@mui/material';

 const MovieCard=(props) =>{
    const ListItem=props.data;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={ListItem.Poster}
        title={ListItem.Title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {ListItem.Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/moviedetail/${ListItem.imdbID}`} underline="none" size="small">Share</Link>
        <Link size="small">Learn More</Link>
      </CardActions>
    </Card>
  );
}
export default MovieCard;