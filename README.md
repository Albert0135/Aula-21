# Exercício Aula 21 - Componente Contador

## Estrutura do Componente

O componente `Contador` é uma função que utiliza o Hook `useState` do React para manter o estado do contador.

### Bloco 1: Importação do React e useState

```jsx
import React, { useState } from 'react';
```

 - React: Importa a biblioteca principal do React.
 - useState: Hook utilizado para declarar e atualizar o estado no componente funcional.

---

### Bloco 2: Declaração do Componente

```jsx
const Contador = () => {
  const [contador, setContador] = useState(0);
```

 - Contador: O componente funcional que será renderizado na interface.
 - useState(0): Inicializa o estado do contador com o valor 0. O primeiro valor (contador) representa o valor atual do estado, enquanto o segundo valor (setContador) é a função usada para atualizar o estado.

---

### Bloco 3: Funções de Ação

```jsx
const aumentar = () => {
  setContador(contador + 1);
};

const diminuir = () => {
  setContador(contador - 1);
};
```

 - aumentar: Função que aumenta o valor do contador em 1 ao chamar setContador.
 - diminuir: Função que diminui o valor do contador em 1 ao chamar setContador.

---

### Bloco 4: Renderização

```jsx
return (
  <div>
    <h1>Contador: {contador}</h1>
    <button onClick={aumentar}>Aumentar</button>
    <button onClick={diminuir}>Diminuir</button>
  </div>
);
```

 - Renderização do contador: Exibe o valor atual do contador dentro de uma tag `<h1>`.
 - Botões: Cada botão possui um evento onClick que chama uma das funções (aumentar ou diminuir) para atualizar o estado do contador.