import styled from '@emotion/styled';

const Error = styled.p`
  color: #fff;
  font-size: 22px;
  font-family: 'Lato', sans-serif;
  text-align: center;
  font-weight: 800;
  padding: 15px;
  background-color: #d31237d1;
  border: 1px solid #fffffff0;
  text-transform: uppercase;
  border-radius: 10px;
`;

const MensajeError = ({ children }) => <Error>{children}</Error>;

export default MensajeError;
