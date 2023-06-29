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
  box-shadow: 0 2px 3px 0px grey;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
    transform: scale(1.05);
  }

  @media (max-width: 696px) {
    margin-top: 0px;
    font-size: 12px;
    width: 80px;
    height: 40px;
  }

  @media (max-width: 550px) {
    height: 35px;
  }

  ${({ start }) =>
    start &&
    css`
      font-size: 22px;
      width: 200px;
      height: 60px;

      @media (max-width: 696px) {
        width: 110px;
      }
    `}

  ${({ smaller }) =>
    smaller &&
    css`
      font-size: 14px;
      height: 40px;
      background-color: white;
      color: black;
      display: inline-block;
      border: 3px solid #087ea4;
      cursor: pointer;
      position: relative;
      background-color: transparent;
      text-decoration: none;
      overflow: hidden;
      z-index: 1;
      font-family: inherit;
      box-shadow: none;

      &: hover {
        opacity: 1;
        transform: scale(1);
        color: white;
      }
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #087ea4;
        transform: translateX(-100%);
        transition: all 0.3s;
        z-index: -1;
      }

      &:hover::before {
        transform: translateX(0);
      }
    `}

    ${({ restart }) =>
    restart &&
    css`
      margin-top: 40px;
      width: 150px;
    `}
`;
