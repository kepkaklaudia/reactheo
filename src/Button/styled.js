import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: 18px;
  background-color: #087ea4;
  color: #fff;
  transition: opacity 0.2s ease-out;
  width: 120px;
  height: 50px;
  border: none;
  font-weight: 500;
  border-radius: 30px;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
