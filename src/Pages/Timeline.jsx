import React from 'react';
import HeaderComponent from '../components/HeaderComponent'; // Importar el componente
import timelineComponent from '../components/timelineComponent'; // Importar el componente


function timeline() {
  return (
    <div>
      <timelineComponent /> {timelineComponent}
      <h1>Time</h1>
      <p>This is the about page.</p>
    </div>
  );
}

export default timeline;