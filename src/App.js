import { MainWrapper } from "./MainWrapper/styled";
import { Background } from "./Background";
import { Header } from "./styled";

function App() {
  return (
    <>
      <Background />
      <Header>Reactheo</Header>
      <MainWrapper></MainWrapper>
    </>
  );
}

export default App;