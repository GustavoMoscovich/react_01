import React, { useContext} from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";

// Context
import { ContextCart} from "../../context/ContextCart"

const CartIcon = () => {

  const {totalUnidCart} = useContext(ContextCart)

  return (
    <div>
      <Link className="Link" to="/Cart">
        <ShoppingCartIcon sx={{color: "white"}}/>
        <span style={{color: "white"}}>{totalUnidCart()}</span>
      </Link>
    </div>
  )
}

export default CartIcon
