import { useData } from "./getQuestions";
import { Wrapper } from "./styled";
import { Loader } from "../Loader/styled";
export const ExamQuiz = ({ setMode }) => {
  const data = useData();
  const { questions, status } = data;

  return status === "loading" ? <Loader /> : <Wrapper></Wrapper>;
};
