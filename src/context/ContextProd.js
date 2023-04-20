import  React, { createContext, useState, useEffect } from "react";

// FIRBASE - FIRESTORE
import { collection, query, getDocs, where, documentId } from "firebase/firestore";
import { db } from "../components/Firebase/FirebaseConfig"

export const ProductList = createContext([]);

export const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState([]); // estado que almacena toda la lista de productos

    const Listaproducts = (brand) => {

      useEffect(() => {
        const loadProducts = async () => {
          const q = ( brand === undefined || brand === "*" ? query(collection(db, "productos")) : query(collection(db, "productos"), where("item.brand", "==", brand) )  )
          const docs = [];
          const querySnapshot = await getDocs(q);

          querySnapshot.forEach((doc) => {

            docs.push({ ...doc.data(), id: doc.id });
          });

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