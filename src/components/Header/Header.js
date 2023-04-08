import React from 'react';
import "./Header.css";
import logo_marca from "./Multimedia/imagen.PNG"

const Header = (props) => {
  return (
    <div className='Header'>

      <img src={logo_marca} alt='logo_marca' />
      <h1>{props.tituloPrinc}</h1>
      <h2>{props.tituloSecund}</h2>
    </div>
  )
}

export default Header
