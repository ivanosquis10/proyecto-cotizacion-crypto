import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import useSelectMoneda from '../hooks/useSelectMoneda';

import MensajeError from './MensajeError';
import { monedas } from '../../data/monedas';

const Input = styled.input`
  background-color: #6246ea;
  border: none;
  width: 100%;
  padding: 15px;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color .3s ease;
  margin-top: 20px;
  &:hover {
    background-color: #7a66da;
  }
`;

const Formulario = ({ setMonedas }) => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);

  const [moneda, SelectMonedas] = useSelectMoneda('Elige una moneda', monedas);
  const [criptomoneda, SelectCriptomoneda] = useSelectMoneda(
    'Elige una criptomoneda',
    criptos
  );

  useEffect(() => {
    const consultarAPI = async () => {
      const URL =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const response = await fetch(URL);
      const result = await response.json();

      const arrayCriptos = result.Data.map((cripto) => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };
        return objeto;
      });
      setCriptos(arrayCriptos);
    };
    consultarAPI();
  }, []);

  // funcion que manejara el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacion
    if ([moneda, criptomoneda].includes('')) {
      setError(true);
      return;
    }
    setError(false);
    setMonedas({
      moneda,
      criptomoneda,
    });
  };

  return (
    <>
      {error && <MensajeError> todos los campos son obligatorios</MensajeError>}
      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCriptomoneda />
        <Input type="submit" value="cotizar" />
      </form>
    </>
  );
};

export default Formulario;
