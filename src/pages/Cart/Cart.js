import React, {useContext, useState} from 'react'
import {  Button, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import "./Cart.css"
import CartList from '../../components/CartList/CartList';
import Spinner from "../../components/Spinner/Spinner";

// Context
import { ContextCart} from "../../context/ContextCart"

// Firebase
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../../components/Firebase/FirebaseConfig";

const initialState = {
  name: "",
  lastName: "",
  email: "",
  checkemail:""
};

const Cart = () => {

  const navigate = useNavigate();
  const {cartproducts} = useContext(ContextCart) // Le pido al context que me devuelva los productos del carrito 
  const {DeleteAllCart} = useContext(ContextCart)
  const {totalUnidCart} = useContext(ContextCart) // Unidades totales del carrito

  const [customerInfo, setCustomerInfo] = useState(initialState);

  const [isLoading, setIsLoading] = useState(false);

  // Este estado está destinado a guardar el id de la compra
  const [purchaseOrderID, setPurchaseOrderID] = useState("");

  const totQty = cartproducts.reduce((prev, next) => prev + next.unids, 0); // Calculo el total de unidades del carrito
  const totSell = cartproducts.reduce((prev, next) => prev + (next.unids*next.price), 0); // Calculo el importe total del carrito

  
  const onChange = (e) => {
    const { value, name } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  const onSubmit = async (e) => {

    e.preventDefault();

    setIsLoading(true);

    const now = new Date();
    const today = now.toLocaleDateString('es-ES');
    const status = "generada"
  
    setTimeout(() => {
      setIsLoading(false);
      navigate("/")
    }, 5000);

    // Se agrega un nuevo documento generando un ID -- Esto sería la cabecera de a compra
    const docRef = await addDoc(collection(db, "orderscab"), {
      customerInfo, totSell, today,status
    });

    // tomo del contexto los productos del carrito y los convierto en objeto porque vienen con formato de array
    const objeto = cartproducts.reduce(function(acc, cur, i) {
      acc[i] = cur;
      return acc;
    }, {});

    // Uso el ID obtenido al crear la "cabecera" y lo uso para agregar todo el detalle de la compra -tomando el objeto creado en el paso anterior-
      await setDoc(doc(db, "ordersdet", docRef.id), objeto);

      setPurchaseOrderID(docRef.id);
      setCustomerInfo(initialState);
      DeleteAllCart() // Borro todo el carrito de compras
  };

  return (
    <div>
      <ToastContainer autoClose={3000} theme="colored" />
      <div>
        <Button sx={{  margin: 2  }} variant="contained" startIcon={<DeleteIcon />} onClick={() => DeleteAllCart()} >Borrar Todo el Carrito</Button>
      </div>
      <div className='CartMainContainer' >
        <div className='CartProductList' >
          <CartList />
        </div>
        <div className='CartCustomerData'  >
          {isLoading ? (
          <div className="Spinner">
            <Spinner />
          </div>
            ) : null}

          <h1>Datos para Confirmar la Compra</h1>
          <form className="Container"  onSubmit={onSubmit}>
            <TextField
              placeholder="Nombre"
              style={{ margin: 10, width: 500 }}
              name="name"
              value={customerInfo.name}
              onChange={onChange}
              required="true"
              helperText="(Requerido)"
            />
            <TextField
              placeholder="Apellido"
              style={{ margin: 10, width: 500 }}
              name="lastName"
              value={customerInfo.lastName}
              onChange={onChange}
              required="true"
              helperText="(Requerido)"
            />
            <TextField
              placeholder="Email"
              style={{ margin: 10, width: 500 }}
              name="email"
              value={customerInfo.email}
              onChange={onChange}
              required="true"
              helperText="(Requerido)"
              type="email"
            />
            <TextField
              placeholder="Repita su Email"
              style={{ margin: 10, width: 500 }}
              name="checkemail"
              value={customerInfo.checkemail}
              onChange={onChange}
              required="true"
              helperText="(Requerido)"
              type="email"
            />
            <Button sx={{  margin: 1  }} variant="contained" className="btnASendAction" type="submit"  disabled={totalUnidCart()===0 ||  customerInfo.name==="" || customerInfo.lastname==="" || customerInfo.email==="" || customerInfo.email!==customerInfo.checkemail?true:false} >
              Confirmar Compra
            </Button>
          </form>
          {purchaseOrderID.length ? toast.info( `La compra ${purchaseOrderID} se ha cargado correctamente` , {position: toast.POSITION.TOP_LEFT, toastId: purchaseOrderID, containerId: 'long' }) : null  }

          <div className='totaldata'>
            <p>Unidades de la compra: {totQty}</p>
            <p>Total de la compra: $ {totSell}</p>
          </div>
        </div>  
      </div>
    </div>
   
  );
}

export default Cart


