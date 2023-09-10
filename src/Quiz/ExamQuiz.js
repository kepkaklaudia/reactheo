import { useState } from "react";
import { useData } from "./getQuestions";
import { Wrapper, Heading } from "./styled";
import { Loader } from "../Loader/styled";

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

  return status === "loading" ? (
    <Loader />
  ) : (
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
          <Heading>{questions[currentQuestion].question}</Heading>
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
