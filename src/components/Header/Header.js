import React from 'react';
import "./Header.css";
import logo_marca from "./Multimedia/International_Pokémon_logo.svg.png"

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
