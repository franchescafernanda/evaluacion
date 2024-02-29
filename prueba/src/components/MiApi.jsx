import React, { useEffect, useState } from 'react';

function MiApi({ feriados }) {
  const [feriadosState, setFeriadosState] = useState([]);

  useEffect(() => {
    setFeriadosState(feriados);
  }, [feriados]);

  return (
    <div>
      {feriadosState.map(feriado => (
        <div key={feriado.date}>
          <h3>{feriado.title}</h3>
          <p>Type: {feriado.type}</p>
          <p>Inalienable: {feriado.inalienable ? 'Yes' : 'No'}</p>
          <p>Extra: {feriado.extra}</p>
        </div>
      ))}
    </div>
  );
}

export default MiApi;