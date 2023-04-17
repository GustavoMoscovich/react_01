import React from 'react';
import "./Header.css";
import logo_marca from "./Multimedia/imagen.PNG"

const Header = (props) => {

  return (
    <div className='Header'>

      <img src={logo_marca} alt='logo_marca' />
    </div>
  )
}

export default Header
