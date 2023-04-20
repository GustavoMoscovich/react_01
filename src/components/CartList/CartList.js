import React, {useContext} from 'react'
import Card from '@mui/material/Card';
import {  Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import "./CartList.css"

// Context
import { ContextCart} from "../../context/ContextCart"

const CartList = () => {
    const {deleteProductCart} = useContext(ContextCart) // Habilito la función para borrar productos del carrito
    const {cartproducts} = useContext(ContextCart) // Le pido al context que me devuelva los productos del carrito
  
    return (
      cartproducts.map((prod) => { 
          return (
            <Card sx={{ maxWidth: 800, boxShadow: 10,  border: 1,  margin: 1  }}  >
              <div className='tarjetas' key={prod.id} >
                  <div >
                  <img className="tarjetas-img" src={prod.image} alt="" />
                  </div>
                  <div className='tarjetas-txt'>
                    <p>{prod.name}</p>
                    <p>Precio: $ {prod.price}</p>
                    <p>Cant: {prod.unids} </p>
                  </div>                  
                  <div>
                    <Button variant="contained" startIcon={<DeleteIcon />} onClick={() => deleteProductCart(prod.id)} >Eliminar</Button>
                  </div>
              </div>
            </Card>
          )
        }
      )
    );
  }

export default CartList
