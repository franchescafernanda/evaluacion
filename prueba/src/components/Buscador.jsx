import React, { useState } from 'react';

function Buscador({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Buscar feriado"
    />
  );
}

export default Buscador;