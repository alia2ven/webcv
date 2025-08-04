import React from 'react';
import HeaderComponent from '../components/HeaderComponent'; // Importar el componente
import BienvenidaComponent from '../components/BienvenidaComponent'; // Importar el componente


function Bienvenida() {
  return (
    <div>
      <BienvenidaComponent /> {BienvenidaComponent}
      <h1>BienVenidos</h1>
      <p>This is the about page.</p>
    </div>
  );
}

export default Bienvenida;

