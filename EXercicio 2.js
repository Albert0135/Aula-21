import React, { useState, useRef } from 'react';

const Cronometro = () => {
  const [segundos, setSegundos] = useState(0);
  const intervaloRef = useRef(null);

  const iniciar = () => {
    if (intervaloRef.current) return;
    intervaloRef.current = setInterval(() => {
      setSegundos((prevSegundos) => prevSegundos + 1);
    }, 1000);
  };

  const pausar = () => {
    clearInterval(intervaloRef.current);
    intervaloRef.current = null;
  };

  const resetar = () => {
    clearInterval(intervaloRef.current);
    intervaloRef.current = null;
    setSegundos(0);
  };

  return (
    <div>
      <h1>{segundos} segundos</h1>
      <button onClick={iniciar}>Iniciar</button>
      <button onClick={pausar}>Pausar</button>
      <button onClick={resetar}>Resetar</button>
    </div>
  );
};

export default Cronometro;