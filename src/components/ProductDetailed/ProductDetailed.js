import React from 'react'
import "./ProductDetailed.css"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share'; 

const ProductDetailed = ({item} ) => {

return (
  <Card sx={{ maxWidth: 600 }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          R
        </Avatar>
      }

      title={item.length === 0? "" : item[0].item.name}
      subheader={`$ ${item.length === 0? "" : item[0].item.price}`}
      
    />
    <CardMedia
      component="img"
      image={item.length === 0? "" : item[0].item.image}
    />
    <CardContent>
      <Typography >
        {item.length === 0? "" : item[0].item.description}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
    </CardActions>
  </Card>
);

}

export default ProductDetailed


