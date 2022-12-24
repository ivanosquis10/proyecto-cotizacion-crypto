import { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 400px;
  width: 100%;
  margin: 100px auto 0 auto;
  display: block;
`;

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  font-weight: 900;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 160px;
    height: 6px;
    background-color: #6246ea;
    display: block;
    margin: 10px auto 0 auto;
    border-radius: 10px;
  }
`;

function App() {
  const [monedas, setMonedas] = useState({});
  const [cotizacion, setCotizacion] = useState({});
  const [cargando, setCargando] = useState(false);

  // useffect que se va a encargar de realizar el llamado a la API en caso de que el usuario cotice
  useEffect(() => {
    // validacion para verificar que hay algo en el objeto para que asi ejecute, caso contrario, no se ejecuta
    if (Object.keys(monedas).length > 0) {
      const cotizarCripto = async () => {
        setCargando(true);
        setCotizacion({});

        const { moneda, criptomoneda } = monedas;

        const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

        const response = await fetch(URL);
        const result = await response.json();

        setCotizacion(result.DISPLAY[criptomoneda][moneda]);
        setCargando(false);
      };
      cotizarCripto();
    }
  }, [monedas]);

  // const imagenCripto = 'https://i.ibb.co/dpMDWBF/imagen-criptos.png';
  const imagenCripto =
    'https://cdn-icons-png.flaticon.com/512/1808/1808306.png';
  return (
    <Contenedor>
      <Imagen src={imagenCripto} alt="imagen-criptos" />
      <div>
        <Heading>Cotizador de Criptomonedas al Instante</Heading>
        <Formulario setMonedas={setMonedas} />
        {cargando && <Spinner />}
        {cotizacion.PRICE && <Cotizacion cotizacion={cotizacion} />}
      </div>
    </Contenedor>
  );
}

export default App;
