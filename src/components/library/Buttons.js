import styled, { css } from "styled-components";

// first approach
export const StyledButton = styled.button`
  border: none;
  border-radius: 5px;
  max-width: ${({ variant }) =>
    variant === "secondary"
      ? "250px"
      : variant === "tertiary"
      ? "150px"
      : "300px"};

  padding: ${({ variant }) =>
    variant === "secondary"
      ? "10px 15px"
      : variant === "tertiary"
      ? "5px 10px"
      : "15px 20px"};

  background-color: ${({ variant }) =>
    variant === "secondary"
      ? "lightblue"
      : variant === "tertiary"
      ? "#ed7042"
      : "#e6ac27"};

  font-size: ${({ variant }) =>
    variant === "secondary"
      ? "1rem"
      : variant === "tertiary"
      ? "0.8rem"
      : "1.2rem"};

  font-weight: ${({ variant }) =>
    variant === "secondary" || variant === "tertiary" ? "400" : "600"};

  opacity: 0.8;
  transition: opacity 200ms ease-in-out;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

// second approach
export const StyledBtn = styled.button`
  border: none;
  border-radius: 5px;

  ${({ variant }) =>
    variant === "secondary"
      ? css`
          max-width: 250px;
          padding: 10px 15px;
          background-color: lightblue;
          font-weight: 400;
          font-size: 1rem;
        `
      : variant === "tertiary"
      ? css`
          max-width: 150px;
          padding: 5px 10px;
          background-color: #ed7042;
          font-weight: 400;
          font-size: 0.8rem;
        `
      : css`
          max-width: 300px;
          padding: 15px 20px;
          background-color: #e6ac27;
          font-size: 1.2rem;
          font-weight: 600;
        `}

  opacity: 0.8;
  transition: opacity 200ms ease-in-out;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;
