import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
  background-color: #f6f7f9;
  border-radius: 10px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.08);
  max-width: 1000px;
  margin: 0 20px;
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
  padding: 16px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  font-size: 20px;
  color: #404756;
  background-color: white;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    transition: border 0.5s, scale 0.5s;
    border: 2px solid #087ea4;
    cursor: pointer;
    scale: 1.03;
  }
  
  &:focus-visible {
    transition: scale 0.5s;
    border: 2px solid #087ea4;
    outline: none;
  }
  
  &.active {
    transition: scale 0.5s;
    border: 3px solid #087ea4;
    cursor: pointer;
  }

  &.correct {
    color: green;
  }

  &.incorrect {
    color: red;
  }
`;