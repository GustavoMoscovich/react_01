import  React, { createContext, useState, useEffect } from "react";
//import axios from "axios";

// Firebase
// FIRBASE - FIRESTORE
import { collection, query, getDocs, where, documentId } from "firebase/firestore";
import { db } from "../components/Firebase/FirebaseConfig"


// 1 - CREAMOS EL CONTEXTO UTILIZANDO EL HOOK createContext
// 2 - CREAR EL COMPONENTE PROVIDER
// 3 - RETONAR NUESTRO CONTEXT CON UN .PROVIDER
/* 4 - PROPS.CHILDREN O BIEN CHILDREN */

export const ProductList = createContext([]);

export const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState([]); // estado que almacena toda la lista de productos

/*    
    const Listaproducts = (brand) => {

      const urlbrand = (brand === undefined? "*" :  brand)
      const url = `https://641f0c51f228f1a83eaf6212.mockapi.io/mi-ecommerce/v1/articles/?brand=${urlbrand}`

      useEffect(() => {
          axios(url).then((res) =>
          setProd(res.data)
          );
        }, [url]);

    }
*/
    const Listaproducts = (brand) => {

      useEffect(() => {
        const loadProducts = async () => {
          const q = ( brand === undefined || brand === "*" ? query(collection(db, "productos")) : query(collection(db, "productos"), where("item.brand", "==", brand) )  )
          const docs = [];
          const querySnapshot = await getDocs(q);
          //console.log('DATA:', querySnapshot);
          querySnapshot.forEach((doc) => {
            // console.log('DATA:', doc.data(), 'ID:', doc.id);
            docs.push({ ...doc.data(), id: doc.id });
          });
          // console.log("docs: ",docs);
          setProducts(docs);
        };
        loadProducts();
      }, [brand]);

    }


    return (
      <ProductList.Provider value={{
        products,
        Listaproducts
      }}
      
      >
        {children}
      </ProductList.Provider>
    );
  };