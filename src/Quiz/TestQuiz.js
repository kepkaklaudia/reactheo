import { Buttons } from "./styled";
import { StyledButton } from "../Button/styled";

export const TestQuiz = () => {
  return (
    <>
      <Buttons>
        <StyledButton>Previous</StyledButton>
        <StyledButton>Show Answers</StyledButton>
        <StyledButton>Hide Answers</StyledButton>
        <StyledButton>Clear Selections</StyledButton>
        <StyledButton>Next</StyledButton>
      </Buttons>
    </>
  );
};