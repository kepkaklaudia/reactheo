import { useState } from "react";
import { Buttons } from "./styled";
import { StyledButton } from "../Button/styled";

export const TestQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [active, setActive] = useState([]);

  const handleClick = (index) => {
    if (!answersChecked) {
      if (active.includes(index)) {
        setActive(active.filter((item) => item !== index));
      } else {
        setActive([...active, index]);
      }
    }
  };

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
