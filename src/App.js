import { MainWrapper } from "./MainWrapper/styled";
import { Background } from "./Background";
import { Header } from "./styled";

function App() {
  const renderQuiz = () => {
    return <div>Training mode Exam mode</div>;
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
