import React from 'react'
import {  Button, TextField } from '@mui/material';
import "./Contact.css"

const Contact = () => {
  return (
    <div >
        <h1>Formulario de Contacto</h1>
        <form className='contactform'  >
            <TextField
              placeholder="Nombre"
              style={{ margin: 10, width: 500 }}
              name="name"
              required="true"
              helperText="(Requerido)"
            />
            <TextField
              placeholder="Apellido"
              style={{ margin: 10, width: 500 }}
              name="lastName"
              required="true"
              helperText="(Requerido)"
            />
            <TextField
              placeholder="Email"
              style={{ margin: 10, width: 500 }}
              name="email"
              required="true"
              helperText="(Requerido)"
              type="email"
            />
            <TextField
                style={{ margin: 10, width: 500 }}
                id="standard-multiline-static"
                label="Comentario"
                multiline
                rows={5}
                variant="standard"
                required="true"
                helperText="(Requerido)"
            />            
            <Button sx={{  margin: 1  }} variant="contained" >
              Enviar
            </Button>
          </form>
      
    </div>
  )
}

export default Contact
