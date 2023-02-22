import styled from 'styled-components';

export const AdditionalTitle = styled.h3`
  margin-left: 20px;
  margin-bottom: 15px;
  margin-top: 15px;
  margin-right: 20px;
  text-shadow: 1px 1px 1px rgb(66, 6, 150);
  background-color: rgb(164, 176, 248);
  border-radius: 10px;
  color: rgb(66, 6, 150);
  text-shadow: 1px 2px 2px rgb(246, 238, 240);
  padding: 10px;
  box-shadow: 2px 4px 4px rgb(184, 203, 243);
`;

export const AdditionalList = styled.ul`
  margin-left: 50px;
  margin-bottom: 15px;
  list-style-type: disc;
`;

export const AdditionalItem = styled.li`
  margin-bottom: 5px;
  font-size: 18px;
  color: rgb(66, 6, 150);

  :hover,
  :focus {
    color: rgb(246, 238, 240);
    text-shadow: 1px 1px 1px rgb(66, 6, 150);
  }
`;
