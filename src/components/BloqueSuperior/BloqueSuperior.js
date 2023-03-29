import React from 'react';
import "./BloqueSuperior.css";
import Header from '../Header/Header';

const BloqueSuperior = (props) => {
  return (
    <div className='Bloque'>
      <Header tituloPrinc={props.tituloPrinc}/>;
    </div>
  )
}

export default BloqueSuperior
