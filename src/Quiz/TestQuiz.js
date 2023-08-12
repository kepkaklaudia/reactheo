import { useState } from "react";
import { useData } from "./getQuestions";
import { StyledListButton, Wrapper, Heading, Buttons } from "./styled";
import { Loader } from "../Loader/styled";
import { StyledButton } from "../Button/styled";
import { useAnimation } from "framer-motion";

export const TestQuiz = () => {
  const data = useData();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [active, setActive] = useState([]);
  const { questions, status } = data;
  const board = useAnimation();

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
      board.set({ y: 20, opacity: 0, scale: 1.05 });
      board.start({ y: 0, opacity: 1, scale: 1 });
    } else {
      setShowResult(true);
    }
  };

  const handlePreviousClick = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setActive([]);
      board.set({ y: -20, scale: 1.05 });
      board.start({ y: 0, scale: 1 });
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
          <>
            <Heading>{questions[currentQuestion].question}</Heading>
            {questions[currentQuestion].options.map((option, index) => (
              <StyledListButton
                className={
                  (active.includes(index) ? "active " : "") +
                  (answersChecked
                    ? option.isTrue
                      ? "correct"
                      : "incorrect"
                    : "")
                }
              >
                {option.text}
              </StyledListButton>
            ))}
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
          </>
        )}
      </Wrapper>
    </>
  );
};
