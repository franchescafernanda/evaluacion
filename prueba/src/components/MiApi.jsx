import React, { useEffect, useState } from 'react';

function MiApi({ feriados }) {
  const [feriadosState, setFeriadosState] = useState([]);

  useEffect(() => {
    setFeriadosState(feriados);
  }, [feriados]);

  return (
    <div className="feriados-container">
      {feriadosState.map((feriado) => (
        <div key={feriado.date} className="feriado-card">
          <h3 className="title">{feriado.title}</h3>
          <p>Date: {feriado.date}</p>
          <p>Type: {feriado.type}</p>
          <p>Inalienable: {feriado.inalienable ? 'Yes' : 'No'}</p>
          <p>Extra: {feriado.extra ? 'Yes' : 'No'}</p>
        </div>
      ))}
    </div>
  );
}

export default MiApi;