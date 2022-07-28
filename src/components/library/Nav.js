import styled from "styled-components";

export const NavBar = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: lightgray;
`;

export const MenuContainter = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 50%;
  list-style: none;

  li {
    font-size: 1.2rem;
    color: #3e3e3e;

    &:hover {
      cursor: pointer;
      color: black;
    }
  }
`;
