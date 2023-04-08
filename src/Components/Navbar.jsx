import React from 'react'
import { Link } from 'react-router-dom'
import { themes } from '../App';
import { useState } from 'react';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  

  return (
    
      // {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      // {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
    
    <nav>
      <Link to="/home"> Home </Link>
      <Link to="/contact"> Contacto </Link>
      <Link to="/favs"> Favoritos </Link>
    <button>Change theme</button>

</nav>
  )
}

export default Navbar