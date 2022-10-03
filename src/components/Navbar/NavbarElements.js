import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

// import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
  background: #ffff00;
  height: 70px;
  margin-top: -80px;
  display: flex;
  // justify-content:center;
  align-items: center;
  font-size: 22px;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }

  // font-size: 18px;
  // position: sticky;
  // top: 0;
  // z-index: 999;
  // height: 80px;
  // background-color: rgba(0, 0, 0, 0.5);
  // /* box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5); */
  // box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  // display: flex;
  // justify-content: center;
  // align-items: center;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  z-index: 1;
  width: 100%;
  padding: 0 25px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #000000;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 35px;
  // margin-top: 10px
  display: flex;
  font-family: "Orbitron", sans-serif;
  align-items: center;
  // margin-left:50px;
  // font-weight:bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and(max-width: 960px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  // height:80px;
  // align-items:left;
  font-family: "Jura", sans-serif;
`;

export const NavLinkS = styled(LinkS)`
  color: #000000;
  dislpay: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #000000;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  font-family: "Jura", sans-serif;
  font-weight: bold;

  @media screen and(max-width:768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #000000;
  white-space: nowrap;
  padding: 10px 22px;
  color: #ffff00;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
