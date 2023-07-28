import { useState } from "react";
import { useData } from "./getQuestions";
import { Buttons } from "./styled";
import { Loader } from "../Loader/styled";
import { StyledButton } from "../Button/styled";

export const TestQuiz = () => {
  const data = useData();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [active, setActive] = useState([]);
  const { questions, status } = data;

  const handleClick = (index) => {
    if (!answersChecked) {
      if (active.includes(index)) {
        setActive(active.filter((item) => item !== index));
      } else {
        setActive([...active, index]);
      }
    }
  };

  const handleNextClick = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setActive([]);
      setAnswersChecked(false);
    } else {
      setShowResult(true);
    }
  };

  const [answersChecked, setAnswersChecked] = useState(false);
  if (status === "loading") {
    return <Loader />;
  }

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
