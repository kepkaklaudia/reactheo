import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  font-size: 18px;
  background-color: #087ea4;
  color: #fff;
  transition: opacity 0.2s ease-out, transform 0.2s ease-out;
  width: 120px;
  height: 50px;
  border: none;
  font-weight: 500;
  border-radius: 30px;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
    transform: scale(1.05);
  }

  ${({ start }) =>
    start &&
    css`
      font-size: 22px;
      width: 200px;
      height: 60px;
    `}

  ${({ smaller }) =>
    smaller &&
    css`
    font-size: 14px;
    height: 40px;
    background-color: white;
    color: black;
    display: inline-block;
    border: 3px solid  #087ea4;
    cursor: pointer;
    position: relative;
    background-color: transparent;
    text-decoration: none;
    overflow: hidden;
    z-index: 1;
    font-family: inherit;
    `}

    ${({ restart }) =>
    restart &&
    css`
      margin-top: 40px;
      width: 150px;
    `}

    @media (max-width: 696px) {
      margin-top: 30px;
    }
`;
