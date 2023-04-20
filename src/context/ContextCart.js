import  React, { createContext, useState, } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContextCart = createContext([]);

export const CartServices = ({children}) => {

    const [cartproducts, setCartproducts ] = useState([])

    // Función que devuelve la suma de unidades del carrito
    const totalUnidCart = () => cartproducts.reduce((suma,itm)=> suma+itm.unids ,0)

    // Función para limpiar todo el carrito
    const DeleteAllCart = () =>       setCartproducts([])

    // Función que indica si un ID ya está en el carrito
    const productInCart = (id) => {
          return cartproducts.find(product => product.id === id )? true : false;
    }

    // Función que borra un determinado ID del carrito
    const deleteProductCart = (id) => {
        setCartproducts(cartproducts.filter(product => product.id !== id))
        toast.info( "Producto Eliminado.." , {position: toast.POSITION.TOP_LEFT , toastId: id, containerId: 'short'})
    }

    // Función que agrega productos al carrito - detecta si el ID existe para sumar la cantidad a lo que ya tenía antes
    const addProductCart = (pr , qty) => {

      const { unids = 0} = cartproducts.find(prod => prod.id === pr.item.id) || {}
      const newcar = cartproducts.filter(prod => prod.id !== pr.item.id)
      newcar.push({...pr.item, unids: unids+ (qty===0? 1 : qty)}) // si hiceron click en botón Lo Quiero sin informar unidades tomo por defecto 1
      setCartproducts(newcar)

      toast.success( `${pr.item.name} agregado al carrito..` , {position: toast.POSITION.TOP_LEFT , toastId: pr.item.id, containerId: 'short' })
    } 

    return (
        <ContextCart.Provider value={{
          totalUnidCart,
          DeleteAllCart,
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
