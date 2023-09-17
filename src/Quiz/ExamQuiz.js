import { useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useData } from "./getQuestions";
import {
  StyledListButton,
  Wrapper,
  Heading,
  Buttons,
  Container,
} from "./styled";
import { Loader } from "../Loader/styled";
import { StyledButton } from "../Button/styled";
import { Motion } from "../Motion";

export const ExamQuiz = ({ setMode }) => {
  const data = useData();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [active, setActive] = useState([]);
  const [score, setScore] = useState(0);
  const { questions, status } = data;
  const board = useAnimation();
  const heading = useAnimation();

  const handleAnswerClick = (isTrue, index) => {
    if (isTrue && !active.includes(index)) {
      setScore(score + 1);
    } else if (isTrue && active.includes(index)) {
      setScore(score - 1);
    } else if (!isTrue && !active.includes(index)) {
      setScore(score - 0.25);
    } else if (!isTrue && active.includes(index)) {
      setScore(score + 0.25);
    }

    if (active.includes(index)) {
      setActive(active.filter((item) => item !== index));
    } else {
      setActive([...active, index]);
    }
  };

  const handleNextClick = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setActive([]);
      board.set({ y: 20, opacity: 0, scale: 1.05 });
      board.start({ y: 0, opacity: 1, scale: 1 });
      heading.set({ opacity: 0, x: -20 });
      heading.start({ opacity: 1, x: 0 });
    } else {
      setShowResult(true);
    }
  };

  const handleResetClick = () => {
    setCurrentQuestion(0);
    setShowResult(false);
    setActive([]);
    setScore(0);
    setMode(null);
  };

  const initialValue = 0;
  const countTrue =
    questions &&
    questions.reduce((totalTrue, question) => {
      const filterTrue = question.options.filter((option) => option.isTrue);
      return totalTrue + filterTrue.length;
    }, initialValue);

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
            <Container>
              <Heading>
                You scored
                <br />
                {`${score > 0 ? score : "0"} / ${countTrue}`} points!
              </Heading>
              <h3>It's {score > 0 ? (score * 100) / countTrue : "0"} %!</h3>
              <StyledButton restart onClick={handleResetClick}>
                Try again
              </StyledButton>
            </Container>
          }
        />
      ) : (
        <>
          <motion.div animate={heading}>
            <Heading>{questions[currentQuestion].question}</Heading>
          </motion.div>
          {questions[currentQuestion].options.map((option, index) => (
            <motion.div key={index} animate={board}>
              <StyledListButton
                key={index}
                className={active.includes(index) ? "active " : ""}
                onClick={() => handleAnswerClick(option.isTrue, index)}
              >
                {option.text}
              </StyledListButton>
            </motion.div>
          ))}
          <Buttons examMode>
            <StyledButton
              examMode
              disabled={active.length === 0}
              onClick={handleNextClick}
            >
              Next
            </StyledButton>
          </Buttons>
        </>
      )}
    </Wrapper>
  );
};
