import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductDetailed from "../../components/ProductDetailed/ProductDetailed";

const ProdDetail = () => {

  const [prod, setProd] = useState({});

  let { id } = useParams();

  useEffect(() => {
    axios(`https://641f0c51f228f1a83eaf6212.mockapi.io/mi-ecommerce/v1/articles/${id}`).then((res) =>
      setProd(res.data)
    );
  }, [id]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "cente",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ProductDetailed data={prod} />
    </div>
  );
};

export default ProdDetail;
