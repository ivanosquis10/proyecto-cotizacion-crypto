import styled from '@emotion/styled';

const Contenedor = styled.div`
  color: #FFF;
  font-family: 'Lato', sans-serif;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 10px;
  padding: 10px;
  box-shadow: -1px 7px 19px 0px rgba(0,0,0,0.75);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Imagen = styled.img`
  width: 130px;
  display: block;
  margin-bottom:10px;
`;

const Texto = styled.p`
  font-size: 20px;
  span {
    font-weight: 800;
  }
`;

const Precio = styled.div`
  font-size: 25px;
  text-transform: uppercase;
  font-weight: 400;
  span {
    font-weight: 900;
  }
`;

const Cotizacion = ({ cotizacion }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    cotizacion;
  return (
    <Contenedor>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} />
      <div>
        <Precio>
          El precio es de: <span>{PRICE}</span>
        </Precio>
        <Texto>
          - El precio más alto del dia: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          - El precio más bajo del día: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          - Variación últimas 24h: <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          - Última actualización: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Contenedor>
  );
};

export default Cotizacion;
