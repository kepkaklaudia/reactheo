import { useState } from "react";
import { MainWrapper } from "./MainWrapper/styled";
import { Background } from "./Background";
import { StyledButton } from "./Button/styled";
import { Header } from "./styled";

function App() {
  const [mode, setMode] = useState(null);

  const handleTrainingModeClick = () => {
    setMode("training");
  };

  const handleExamModeClick = () => {
    setMode("exam");
  };

  const renderQuiz = () => {
    return (
      <>
        <StyledButton start="true" onClick={handleTrainingModeClick}>
          Training mode
        </StyledButton>
        <StyledButton start="true" onClick={handleExamModeClick}>
          Exam mode
        </StyledButton>
      </>
    );
  };

  return (
    <>
      <Background />
      <Header>Reactheo</Header>
      <MainWrapper>{renderQuiz()}</MainWrapper>
    </>
  );
}

export default App;
