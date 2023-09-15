import { useState } from "react";
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
                {score > 0 ? `${score} / ${countTrue}` : "0"} points!
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
            <StyledListButton
              key={index}
              className={active.includes(index) ? "active " : ""}
              onClick={() => handleAnswerClick(option.isTrue, index)}
            >
              {option.text}
            </StyledListButton>
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
