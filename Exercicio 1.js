import React, { useRef } from 'react';

const FocoInput = () => {
  const inputRef = useRef(null);

  const darFoco = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Clique no botão para focar aqui" />
      <button onClick={darFoco}>Focar no Input</button>
    </div>
  );
};

export default FocoInput;