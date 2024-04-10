import styled, { css } from "styled-components";

export const test = 42;
export const test2 = 42;
export const test3 = 42;

export default styled.button`
  border: none;
  cursor: pointer;
  padding: 1rem;
  color: white;
  border-radius: 4px;
  background-color: ${(props) =>
    props.$color === "danger" ? "var(--color-danger)" : "var(--color-primary)"};

  ${(props) =>
    props.$variant === "text" &&
    css`
      background-color: transparent;
      color: var(--color-primary);
    `}

  ${(props) =>
    props.$variant === "outlined" &&
    css`
      background-color: transparent;
      color: var(--color-primary);
      border: solid 2px var(--color-primary);
    `};

  ${({ $variant }) =>
    $variant === "contained" &&
    css`
      background-color: var(--color-primary);
      color: white;
    `};

  &:hover {
    color: var(--color-primary);
    background-color: var(--color-secondary);
  }
`;
