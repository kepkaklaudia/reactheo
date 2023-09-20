import { useState } from "react";
import { useData } from "./getQuestions";
import { StyledListButton, Wrapper, Heading, Buttons } from "./styled";
import { Loader } from "../Loader/styled";
import { StyledButton } from "../Button/styled";
import { useAnimation, motion } from "framer-motion";
import { Motion } from "../Motion";

export const TestQuiz = ({ setMode }) => {
  const data = useData();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [active, setActive] = useState([]);
  const { questions, status } = data;
  const board = useAnimation();
  const heading = useAnimation();

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
      heading.set({ opacity: 0, x: -20 });
      heading.start({ opacity: 1, x: 0 });
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
      heading.set({ opacity: 0, x: 20 });
      heading.start({ opacity: 1, x: 0 });
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
  if (status === "error") {
    return (
      <Wrapper>
        <h2>Wystąpił błąd!</h2>
        <p>Spróbuj jeszcze raz</p>
        <StyledButton onClick={handleResetClick}>Go to start</StyledButton>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {showResult ? (
        <Motion
          animatedElement={
            <div>
              <h2>No more questions!</h2>
              <StyledButton onClick={handleResetClick}>Try again</StyledButton>
            </div>
          }
        />
      ) : (
        <>
          <span>
            Question {currentQuestion + 1} / {questions.length}
          </span>
          <motion.div animate={heading}>
            <Heading>{questions[currentQuestion].question}</Heading>
          </motion.div>
          {questions[currentQuestion].options.map((option, index) => (
            <motion.div key={index} animate={board}>
              <StyledListButton
                className={
                  (active.includes(index) ? "active " : "") +
                  (answersChecked
                    ? option.isTrue
                      ? "correct"
                      : "incorrect"
                    : "")
                }
                onClick={() => handleClick(index)}
              >
                {option.text}
              </StyledListButton>
            </motion.div>
          ))}
          <Buttons>
            <StyledButton
              orderPrevious="true"
              disabled={currentQuestion === 0}
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
            <StyledButton
              disabled={active.length === 0}
              orderNext="true"
              onClick={() => handleNextClick()}
            >
              Next
            </StyledButton>
          </Buttons>
        </>
      )}
    </Wrapper>
  );
};
