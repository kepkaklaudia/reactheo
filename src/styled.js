import styled from "styled-components";

export const ButtonWrapper = styled.div`
  padding: 50px;
  background-color: #f6f7f9;
  border-radius: 10px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.08);
  margin: 50px;
  gap: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 696px) {
    gap: 60px;
  }

  @media (max-width: 550px) {
    flex-wrap: wrap;
    flex-direction: column;
    gap: 30px;
  }
`;

export const Icon = styled.p`
  font-size: 60px;
  margin: 20px;

  @media (max-width: 696px) {
    margin: 0;
    font-size: 50px;
    margin-bottom: 15px;
  }
`;

export const Header = styled.h1`
  font-size: 60px;
  margin: 60px auto 20px auto;

  @media (max-width: 696px) {
    font-size: 50px;
    margin-bottom: 15px;
  }

  @media (max-width: 550px) {
    font-size: 40px;
    margin-top: 50px;
    margin-bottom: 10px;
  }
`;
