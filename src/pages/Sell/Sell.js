import React, { useState, useContext } from "react";
import {  Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Sell.css"

// Context
import { ContextCart} from "../../context/ContextCart"

// Firebase
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../../components/Firebase/FirebaseConfig";

import TextField from "@mui/material/TextField";

const styles = {
  containerSell: {
    textAlign: "center",
    paddingTop: 20,
  },
};

const initialState = {
  name: "",
  lastName: "",
  email: "",
};


const Sell = () => {

  const {cartproducts} = useContext(ContextCart) // Le pido al context que me devuelva los productos del carrito 
  const {deleteAllCart} = useContext(ContextCart) // habilito la función para borrar todo el carrito

    const [values, setValues] = useState(initialState);

    // Este estado está destinado a guardar el id de la compra
    const [purchaseOrderID, setPurchaseOrderID] = useState("");
  
    const onChange = (e) => {
      const { value, name } = e.target;
      setValues({ ...values, [name]: value });
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();
      // Se agrega un nuevo documento generando un ID -- Esto sería la cabecera de a compra
      const docRef = await addDoc(collection(db, "orderscab"), {
        values,
      });

      // tomo del contexto los productos del carrito y los convierto en objeto porque vienen con formato de array
      const objeto = cartproducts.reduce(function(acc, cur, i) {
        acc[i] = cur;
        return acc;
      }, {});

      // Uso el ID obtenido al crear la "cabecera" y lo uso para agregar todo el detalle de la compra -tomando el objeto creado en el paso anterior-
      await setDoc(doc(db, "ordersdet", docRef.id), objeto);

      setPurchaseOrderID(docRef.id);
      setValues(initialState);
      deleteAllCart() // Borro todo el carrito de compras

    };
  
    return (
      <div style={styles.containerSell}>
        <h1>Datos para Confirmar la Compra</h1>
        <form className="Container" onSubmit={onSubmit}>
          <TextField
            placeholder="Nombre"
            style={{ margin: 10, width: 500 }}
            name="name"
            value={values.name}
            onChange={onChange}
          />
          <TextField
            placeholder="Apellido"
            style={{ margin: 10, width: 500 }}
            name="lastName"
            value={values.lastName}
            onChange={onChange}
          />
          <TextField
            placeholder="Email"
            style={{ margin: 10, width: 500 }}
            name="email"
            value={values.email}
            onChange={onChange}
          />
          <Button sx={{  margin: 1  }} variant="contained" className="btnASendAction" type="submit">
            Confirmar Compra
          </Button>
        </form>
        <ToastContainer autoClose={1000} theme="colored" />
        {purchaseOrderID.length ? toast.info( `La compra ${purchaseOrderID} se ha cargado correctamente` , {position: toast.POSITION.TOP_LEFT }) : null}
      </div>
    );
  }

export default Sell
