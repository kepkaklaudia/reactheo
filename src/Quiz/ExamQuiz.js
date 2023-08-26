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
  };

  return status === "loading" ? <Loader /> : <Wrapper></Wrapper>;
};
