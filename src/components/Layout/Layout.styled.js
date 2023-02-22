import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyled = styled(NavLink)`
  padding: 18px 20px;
  background-color: rgb(66, 6, 150);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 28px;
  line-height: 24px;
  font-style: normal;
  font-weight: 600;
  min-width: 180px;
  max-width: 200px;
  color: rgb(246, 238, 240);
  text-shadow: 1px 2px 2px rgb(164, 176, 248);
  box-shadow: 2px 4px 4px #fff;
  border-radius: 10px;
  margin: 0px;

  /* &.active {
    color: black;
  } */

  /* :hover:not(:active),
  :focus-visible:not(:active) {
    color: #2196f3;
  } */

  :not(:last-child) {
    margin-right: 20px;
  }
  :hover,
  :focus {
    color: rgb(66, 6, 150);
    font-weight: 800;
    background-color: #fff;
    text-shadow: 1px 2px 2px rgb(164, 176, 248);
    box-shadow: 2px 4px 4px rgb(66, 6, 150);
  }
`;

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: block;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: rgb(164, 176, 248);
  box-shadow: 2px 4px 4px rgb(184, 203, 243);
  border-radius: 10px;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 10px;
`;

export const Navigation = styled.nav`
  padding: 4px 4px;
`;
