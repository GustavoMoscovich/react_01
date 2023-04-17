import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ProductDetailed from "../../components/ProductDetailed/ProductDetailed";

// FIRBASE - FIRESTORE
import { collection, query, getDocs, where, documentId } from "firebase/firestore";
import { db } from "../../components/Firebase/FirebaseConfig"

const ItemDetailContainer = () => {

  let { id } = useParams();

  const [selectedprod, setSelectedprod] = useState([]); // estado que almacena un producto específico según ID

  useEffect(() => { 
  const loadProd = async () => {
    const q = (  query(collection(db, "productos"), where(documentId(), "==", id) ) )
    const docs = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setSelectedprod(docs);
  };
  loadProd();
  },[id])

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "cente",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ProductDetailed item={selectedprod} />
    </div>
  );
};

export default ItemDetailContainer;
