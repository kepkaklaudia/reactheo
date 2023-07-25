import { useState } from "react";
import { MainWrapper } from "./MainWrapper/styled";
import { Background } from "./Background";
import { StyledButton } from "./Button/styled";
import { TestQuiz } from "./Quiz/TestQuiz";
import { ButtonWrapper, Header, Icon } from "./styled";
import { Motion } from "./Motion";

function App() {
  const [mode, setMode] = useState(null);

  const handleTrainingModeClick = () => {
    setMode("training");
  };

  const handleExamModeClick = () => {
    setMode("exam");
  };

  const renderQuiz = () => {
    if (mode === "training") {
      return <TestQuiz setMode={setMode} />;
    } else {
      return (
        <Motion
          animatedElement={
            <ButtonWrapper>
              <div>
                <Icon>🏋️‍♂️</Icon>
                <StyledButton start="true" onClick={handleTrainingModeClick}>
                  Training mode
                </StyledButton>
              </div>
              <div>
                <Icon>🎓</Icon>
                <StyledButton start="true" onClick={handleExamModeClick}>
                  Exam mode
                </StyledButton>
              </div>
            </ButtonWrapper>
          }
        />
      );
    }
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
