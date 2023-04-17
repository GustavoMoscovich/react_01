import  React, { createContext, useState, } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContextCart = createContext([]);

export const CartServices = ({children}) => {

    const [cartproducts, setCartproducts ] = useState([])

    console.log("Cartproducts: ",cartproducts)

    // Función que devuelve la suma de unidades del carrito
    const totalUnidCart = () => cartproducts.reduce((suma,itm)=> suma+itm.unids ,0)

    // Función para limpiar todo el carrito
    const deleteAllCart = () => {
      setCartproducts([]);
      toast.info( "Carrito Eliminado.." , {position: toast.POSITION.TOP_LEFT })
    }

    // Función que indica si un ID ya está en el carrito
    const productInCart = (id) => {
          return cartproducts.find(product => product.id === id )? true : false;
    }

    // Función que borra un determinado ID del carrito
    const deleteProductCart = (id) => {
        setCartproducts(cartproducts.filter(product => product.id !== id))
        toast.info( "Producto Eliminado.." , {position: toast.POSITION.TOP_LEFT })
    }

    // Función que agrega productos al carrito - detecta si el ID existe para sumar la cantidad a lo que ya tenía antes
    const addProductCart = (pr , qty) => {

      //console.log("item en addProductCart: ",item.prodItem)
      //console.log("qty en addProd.. : ",qty)

      const { unids = 0} = cartproducts.find(prod => prod.id === pr.item.id) || {}
      const newcar = cartproducts.filter(prod => prod.id !== pr.item.id)
      newcar.push({...pr.item, unids: unids+ (qty===0? 1 : qty)}) // si hiceron click en botón Lo Quiero sin informar unidades tomo por defecto 1
      setCartproducts(newcar)
      let msg = `${pr.item.name} agregado al carrito..`
      toast.success( msg , {position: toast.POSITION.TOP_LEFT })
      //console.log("newcar: ",newcar)
      //console.log("Cartproducts: ",cartproducts)
    } 

    return (
        <ContextCart.Provider value={{
          totalUnidCart,
          deleteAllCart,
          productInCart,
          deleteProductCart,
          addProductCart,
          cartproducts
        }}
        
        >
          {children}
        </ContextCart.Provider>
      );
}
