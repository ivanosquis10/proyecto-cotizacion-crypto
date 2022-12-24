import { useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`;

const Select = styled.select`
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  padding: 14px;
  border-radius: 15px;
  margin-bottom: 20px;
  background-color: #232946;
  border: 1px solid #fff;
  outline: none;
  box-shadow: -1px 10px 24px -2px rgba(0,0,0,0.75);
  }
`;

const useSelectMoneda = (label, opciones) => {
  const [state, setState] = useState('');
  const SelectMoneda = () => (
    <>
      <Label>{label}</Label>
      <Select value={state} onChange={(e) => setState(e.target.value)}>
        <option value="">-- Seleccione --</option>
        {
          // aqui vamos a iterar sobre todas las monedas y criptmonedas, gracias al customHook
          opciones.map((opcion) => (
            <option key={opcion.id} value={opcion.id}>
              {opcion.nombre}
            </option>
          ))
        }
      </Select>
    </>
  );
  // y retornamos, pd: devuelve por el indice, no por el nombre
  return [state, SelectMoneda];
};

export default useSelectMoneda;
