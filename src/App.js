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
      <div>
        <StyledButton>Training mode</StyledButton>
        <StyledButton>Exam mode</StyledButton>
      </div>
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
