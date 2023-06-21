import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
  background-color: #f6f7f9;
  border-radius: 10px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.08);
  width: 900px;
  max-width: 80%;
  margin: 20px;

  @media (max-width: 960px) {
    width: 650px;
  }
  @media (max-width: 696px) {
    width: 500px;
  }

  @media (max-width: 550px) {
    width: 250px;
  }
`;

export const Heading = styled.h2`
  margin: 25px auto;
`;

export const Container = styled.div`
  margin: 25px auto;
  width: 400px;

  @media (max-width: 696px) {
    width: 280px;
  }
`;

export const StyledListButton = styled.button`
  width: 80%;
  margin-top: 20px;
  padding: 14px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  font-size: 16px;
  color: #404756;
  background-color: white;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    transition: border 0.5s, scale 0.5s;
    outline: 2px solid #087ea4;
    cursor: pointer;
    scale: 1.03;
  }

  &:focus-visible {
    transition: scale 0.5s;
    outline: 2px solid #087ea4;
  }

  &.active {
    transition: scale 0.5s;
    outline: 3px solid #087ea4;
    cursor: pointer;
  }

  &.correct {
    color: green;
  }

  &.incorrect {
    color: red;
  }
`;

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 10px;
  padding: 15px;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(3, auto);
    grid-template-rows: 1fr 1fr;
  }
  
  ${({ section }) =>
    section &&
    css`
      @media (max-width: 960px) {
        flex-direction: row;
      }
      @media (max-width: 696px) {
        flex-direction: column;
      }
    `}
`;
