import React, {useContext} from "react";
import { useParams } from "react-router-dom";

// Components
import ProdList from "../../components/ProdList/ProdList";

// Context
import { ProductList} from "../../context/ContextProd"


const ItemListContainer = () => {

  let { brand } = useParams();
  const { Listaproducts } = useContext(ProductList)
  Listaproducts(brand)  // Filtro la lista de productos a los que invoca la API

  return (
    <div>
      <ProdList brand={ brand }/>
    </div>

  );
};

export default ItemListContainer;
