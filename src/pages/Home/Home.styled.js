import styled from 'styled-components';

export const Section = styled.section`
  margin: 20px 20px;
`;

export const Title = styled.h2`
  margin-left: 20px;
  margin-bottom: 20px;
  text-shadow: 1px 1px 1px rgb(66, 6, 150);
  background-color: rgb(164, 176, 248);
  border-radius: 10px;
  color: rgb(66, 6, 150);
  text-shadow: 1px 2px 2px rgb(246, 238, 240);
  padding: 10px;
  box-shadow: 2px 4px 4px rgb(184, 203, 243);
`;

export const FilmsList = styled.ol`
  margin-left: 50px;
  margin-bottom: 15px;
`;

export const FilmsItem = styled.li`
  margin-bottom: 5px;

  :hover,
  :focus {
    color: rgb(164, 176, 248);
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 20px;
`;
