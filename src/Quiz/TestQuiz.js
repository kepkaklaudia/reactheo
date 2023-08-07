import { useState } from "react";
import { useData } from "./getQuestions";
import { StyledListButton, Wrapper, Buttons } from "./styled";
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

  const handlePreviousClick = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setActive([]);
    }
  };

  const handleResetClick = () => {
    setCurrentQuestion(0);
    setShowResult(false);
    setActive([]);
    setMode(null);
  };

  const [answersChecked, setAnswersChecked] = useState(false);
  if (status === "loading") {
    return <Loader />;
  }

  return (
    <>
      <Wrapper>
        {showResult ? (
          <div>
            <h2>No more questions!</h2>
            <StyledButton onClick={handleResetClick}>Try again</StyledButton>
          </div>
        ) : (
          <Buttons>
            <StyledButton
              orderPrevious="true"
              onClick={() => handlePreviousClick()}
            >
              Previous
            </StyledButton>
            <StyledButton
              smaller="true"
              onClick={() => {
                setAnswersChecked(true);
              }}
            >
              Show Answers
            </StyledButton>
            <StyledButton
              smaller="true"
              onClick={() => {
                setAnswersChecked(false);
              }}
            >
              Hide Answers
            </StyledButton>
            <StyledButton
              smaller="true"
              span="true"
              onClick={() => {
                setActive([]);
              }}
            >
              Clear Selections
            </StyledButton>

            <StyledButton orderNext="true" onClick={() => handleNextClick()}>
              Next
            </StyledButton>
          </Buttons>
        )}
      </Wrapper>
    </>
  );
};
