import { useState } from "react";
import { Buttons } from "./styled";
import { StyledButton } from "../Button/styled";

export const TestQuiz = () => {
const [active, setActive] = useState([]);

const [answersChecked, setAnswersChecked] = useState(false);

  return (
    <>
      <Buttons>
        <StyledButton orderPrevious="true">Previous</StyledButton>
        <StyledButton smaller="true">Show Answers</StyledButton>
        <StyledButton smaller="true">Hide Answers</StyledButton>
        <StyledButton smaller="true" span="true">
          Clear Selections
        </StyledButton>
        <StyledButton orderNext="true">Next</StyledButton>
      </Buttons>
    </>
  );
};
