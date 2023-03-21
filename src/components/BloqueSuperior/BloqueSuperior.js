import React from 'react';
import "./BloqueSuperior.css";
import Header from '../Header/Header';
import ListContainer from '../ListContainer/ListContainer';


const BloqueSuperior = (props) => {
  return (
    <div className='Bloque'>
      <ListContainer Mensaje="Bienvenido al Ecommerce donde encontrarás todo lo referente a Pockemon!!" />;
      <Header tituloPrinc={props.tituloPrinc} tituloSecund={props.tituloSecund}/>;
    </div>
  )
}

export default BloqueSuperior
