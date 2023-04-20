import React, { useContext} from 'react'
import "./ProductDetailed.css"
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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./ProductDetailed.css"

// Context
import { ContextCart} from "../../context/ContextCart"

const ProductDetailed = ({item} ) => {

const {addProductCart} = useContext(ContextCart) // Habilito la función del context del carrito para adicionar artículos al mismo

  return (
  <>
   {item.length !== 0? 
      (
        <Card sx={{ maxWidth: 700, borderRadius: 3, boxShadow: 10, mb: 5  }}>
          <p className='titulo'>{item.length === 0? "" : item[0].item.name}</p>
          <p className='subtitulo'>{`$ ${item.length === 0? "" : item[0].item.price}`}</p>
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

            <Stack spacing={2} direction="row" justifyContent="center" alignItems="center">
              <Button variant="contained" onClick={() => addProductCart(item[0],Number(document.getElementById("IDCant").value))} >Lo Quiero!</Button>
              <Input className="cantidad" type="number"  min="1" max="9" id="IDCant" ></Input>
            </Stack>
            <ToastContainer autoClose={1500} theme="colored" />

          </CardActions>
        </Card>
      ) : (
            <div>
              <h2>Ha ocurrido un error</h2>
              <p>ID del producto es incorrecto....</p>
            </div>
          )
    }
  </>
  );

}

export default ProductDetailed


