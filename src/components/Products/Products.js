import React, {useState, useEffect} from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import "./Products.css";
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { shadows } from '@mui/system';
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: 'center',
  alignContent: 'center',
  color: theme.palette.text.secondary,
}));


const cardStyle = {
  display: 'block',
  height: '450px'
}


const Products = (props) => {

  const url = `https://641f0c51f228f1a83eaf6212.mockapi.io/mi-ecommerce/v1/articles/?brand=${props.brand}`

  const [prod, setProd] = useState([]);

    useEffect(() => {
        axios(url).then((res) =>
        setProd(res.data)
        );
      }, []);

    return ( 
          prod.map((prodItem) => {           
            return (
              <Grid xs={3} sm={4} md={4} key={prodItem.id} >
                <Item>
                  <div  >
                    <Link to={`/ProdDetail/${prodItem.id}`}>
                      <Card sx={{ maxWidth: 345, boxShadow: 10 }} style={cardStyle} >
                        <CardActionArea >
                          <CardMedia
                            component="img"
                            image={prodItem.image}
                          />
                          <CardContent  >
                            <Typography gutterBottom variant="h5" component="div">
                              {prodItem.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <p className='prodprice'> $ {prodItem.price} </p>
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Link>
                  </div>
                </Item>
              </Grid>
            )
          } )
      )
  };

export default Products;
