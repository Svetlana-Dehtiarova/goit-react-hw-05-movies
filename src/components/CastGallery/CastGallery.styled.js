import styled from 'styled-components';

export const CastList = styled.ul`
  grid-gap: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  margin: 0 auto;
  max-width: calc(100vw - 48px);
  border-radius: 10px;
  color: rgb(66, 6, 150);
  text-shadow: 1px 2px 2px rgb(246, 238, 240);
  padding: 10px;
  box-shadow: 2px 4px 4px rgb(184, 203, 243);
`;

export const CastItem = styled.li`
  padding-bottom: 5px;
  box-shadow: 2px 4px 4px rgb(184, 203, 243);
  border-radius: 10px;
`;

export const Paragraph = styled.p`
  padding: 5px 10px;
  color: rgb(66, 6, 150);
  font-size: 16px;
  text-align: center;
`;
