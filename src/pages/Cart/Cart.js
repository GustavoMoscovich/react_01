import React, {useContext} from 'react'
import {  Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartList from '../../components/CartList/CartList';
import Sell from '../Sell/Sell';

// Context
import { ContextCart} from "../../context/ContextCart"

const Cart = () => {

  const {deleteAllCart} = useContext(ContextCart)

  return (
    <div>
      <div>
        <Button sx={{  margin: 1, height: 10  }} as={Link} to="/Sell" variant="contained" >Confirmar Compra</Button>
        <Button sx={{  margin: 1, height: 27  }} variant="contained" startIcon={<DeleteIcon />} onClick={() => deleteAllCart()} >Borrar Todo el Carrito</Button>
      </div>
      <CartList />
      <ToastContainer autoClose={1000} theme="colored" />
    </div>
   
  );
}

export default Cart


