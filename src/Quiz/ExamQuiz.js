import { useState } from "react";
import { useData } from "./getQuestions";
import { Wrapper } from "./styled";
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

  return status === "loading" ? <Loader /> : <Wrapper></Wrapper>;
};
