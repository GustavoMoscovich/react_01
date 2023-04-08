import React from "react";
import { useParams } from "react-router-dom";

// Components
import ProdList from "../../components/ProdList/ProdList";

const Home = () => {

  let { brand } = useParams();

  return (
    <div>
      <ProdList brand={ brand }/>
    </div>

  );
};

export default Home;
