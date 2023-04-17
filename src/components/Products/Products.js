import React, { useContext} from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Stack,
  Button,
  Input

} from "@mui/material";

import "./Products.css";
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
//import { shadows } from '@mui/system';
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import InputSpinner from 'react-bootstrap-input-spinner'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Context
import {ProductList} from "../../context/ContextProd"
import { ContextCart} from "../../context/ContextCart"

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
  height: '550px'
}


const Products = () => {

    const {addProductCart} = useContext(ContextCart) // Habilito la función del context del carrito para adicionar artículos al mismo

    const {products} = useContext(ProductList) // Le pido al context que me devuelva la lista de productos

    // Esto lo uso una sola vez para pasar todos los productos de la API que venía usando a firebase
    //prod.map((item) => { return(  addDoc(collection(db, "productos"), { item    }))})
    //
    //const addToCart = ((prodItem)=>{addProductCart({prodItem})})

    return ( 
      products.map((prodItem) => {      
          //console.log("Proditem: ",prodItem)     
            return (
              <Grid xs={3} sm={4} md={4} key={prodItem.id} >
                <Item>
                  <div  >
                      <Card sx={{ maxWidth: 345, boxShadow: 10 }} style={cardStyle} >
                        <div >
                          <Link to={`/ItemDetailContainer/${prodItem.id}`}>

                          <CardMedia
                            component="img"
                            image={prodItem.item.image}
                          />
                         
                          <CardContent  >
                            <Typography >
                              <p className='prodname'> {prodItem.item.name} </p>
                            </Typography>
                            <Typography >
                                <p className='prodprice'> $ {prodItem.item.price} </p>
                            </Typography>
                          </CardContent>
                          </Link >

                          <CardActions disableSpacing >
                            <Stack spacing={2} direction="row" justifyContent="center" alignItems="center">
                              <Button variant="contained" onClick={() => addProductCart(prodItem,Number(document.getElementById(prodItem.id).value))} >Lo Quiero!</Button>
                              <Input className="cantidad" type="number"  min="1" max="9" id={prodItem.id} ></Input>
                            </Stack>
                            <ToastContainer autoClose={1500} theme="colored" />

                          </CardActions>
                        </div>
                      </Card>
                  </div>
                </Item>
              </Grid>
            )
          } )
      )
  };

export default Products;
