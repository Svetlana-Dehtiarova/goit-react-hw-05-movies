import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
`;
export const Input = styled.input`
  padding: 6px 12px;
  width: 250px;
  border-radius: 10px;
  border: 2px solid rgb(164, 176, 248);
  border-right: none;
  outline: none;
  margin-right: 20px;
  font-size: 16px;
  color: rgb(66, 6, 150);

  &:hover,
  &:focus {
    border-color: rgb(66, 6, 150);
  }
`;

export const Button = styled.button`
  padding: 6px 12px;
  border-radius: 0px 6px 6px 0px;
  outline: none;
  background-color: rgb(164, 176, 248);
  box-shadow: 2px 4px 4px rgb(184, 203, 243);
  border-radius: 10px;
  color: rgb(246, 238, 240);
  text-shadow: 1px 2px 2px rgb(66, 6, 150);
  font-size: 16px;

  &:hover,
  &:focus {
    background-color: rgb(66, 6, 150);
  }
`;
