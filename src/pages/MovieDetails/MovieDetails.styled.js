import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  /* margin: 20px; */

  border-bottom: 2px solid blue;
`;
export const WrapperDetails = styled.div`
  padding: 10px;
  display: flex;
  gap: 30px;
`;

export const LinkBack = styled(Link)`
  display: block;
  width: 180px;
  margin-left: 43px;
  text-align: center;
  padding: 10px;

  text-decoration: none;
  background-color: rgb(164, 176, 248);
  box-shadow: 2px 4px 4px rgb(184, 203, 243);
  border-radius: 10px;
  color: rgb(246, 238, 240);
  text-shadow: 1px 2px 2px rgb(66, 6, 150);

  :hover,
  :focus {
    background-color: rgb(66, 6, 150);
    text-shadow: 1px 2px 2px rgb(164, 176, 248);
  }
`;
