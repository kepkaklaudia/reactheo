import { useState } from "react";
import { useData } from "./getQuestions";
import { StyledListButton, Wrapper, Heading, Buttons } from "./styled";
import { Loader } from "../Loader/styled";
import { StyledButton } from "../Button/styled";

export const Quiz = () => {
  const data = useData();
  const [active, setActive] = useState([]);
  const { questions, status } = data;
  console.log(questions, status);

  const handleClick = (index) => {
    if (!answersChecked) {
      if (active.includes(index)) {
        setActive(active.filter((item) => item !== index));
      } else {
        setActive([...active, index]);
      }
    }
  };
  const [answersChecked, setAnswersChecked] = useState(false);

  return status === "loading" ? (
    <Loader />
  ) : (
    <Wrapper>
      <Heading>{questions && questions[0].question}</Heading>
      {questions &&
        questions[0].options.map((option, index) => (
          <StyledListButton
            key={index}
            className={
              (active.includes(index) ? "active " : "") +
              (answersChecked ? (option.isTrue ? "correct" : "incorrect") : "")
            }
            onClick={() => handleClick(index)}
          >
            {option.text}
          </StyledListButton>
        ))}
      <Buttons>
        <StyledButton>Previous</StyledButton>
        <Buttons section>
          <StyledButton
            width="true"
            onClick={() => {
              setAnswersChecked(true);
            }}
          >
            Show Answers
          </StyledButton>
          <StyledButton
            width="true"
            onClick={() => {
              setAnswersChecked(false);
            }}
          >
            Hide Answers
          </StyledButton>
          <StyledButton
            width="true"
            onClick={() => {
              setActive([]);
            }}
          >
            Clear Selections
          </StyledButton>
        </Buttons>
        <StyledButton>Next</StyledButton>
      </Buttons>
    </Wrapper>
  );
};
