import React, { useState, useEffect } from 'react';
import MiApi from './components/MiApi';
import Buscador from './components/Buscador';

function App() {
  const [feriados, setFeriados] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    fetch('https://api.victorsanmartin.com/feriados/en.json')
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          setFeriados(data.data);
          setBusqueda('');
        } else {
          console.error('Unexpected API response format:', data);
        }
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };

  const filtrarFeriados = () => {
    if (busqueda === '') {
      return feriados;
    } else {
      return feriados.filter(feriado =>
        feriado.title.toLowerCase().includes(busqueda.toLowerCase())
      );
    }
  };

  return (
    <div className="App">
      <h1>Feriados en Chile</h1>
      <Buscador value={busqueda} onChange={handleChange} />
      <MiApi feriados={filtrarFeriados()} />
    </div>
  );
}

export default App;