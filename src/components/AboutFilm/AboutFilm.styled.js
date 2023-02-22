import styled from 'styled-components';

export const About = styled.div`
  padding: 10px 10px;
  outline: 1px solid rgb(66, 6, 150);
  box-shadow: 2px 4px 4px rgb(184, 203, 243);
  border-radius: 10px;
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 800px;
  padding: 10px;
  margin-bottom: 20px;
  text-shadow: 1px 1px 1px rgb(66, 6, 150);
  background-color: rgb(164, 176, 248);
  border-radius: 10px;
  color: rgb(66, 6, 150);
  text-shadow: 1px 2px 2px rgb(246, 238, 240);
  box-shadow: 2px 4px 4px rgb(184, 203, 243);
`;

export const SecondaryTitle = styled.h2`
  /* text-align: center; */
  padding: 10px;
  margin-bottom: 15px;
  color: rgb(246, 238, 240);
  text-shadow: 1px 1px 1px rgb(66, 6, 150);
  background-color: rgb(164, 176, 248);
  border-radius: 5px;
  box-shadow: 2px 4px 4px rgb(184, 203, 243);
`;

export const Paragraph = styled.p`
  margin-bottom: 20px;
  color: rgb(3, 13, 68);
`;

export const Genres = styled.ul`
  display: flex;
  gap: 20px;
  color: rgb(66, 6, 150);
  /* justify-content: center; */
`;

export const UserScore = styled.p`
  margin-bottom: 10px;
  color: rgb(66, 6, 150);
  font-size: 18px;
  /* text-align: center; */
`;
