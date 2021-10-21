import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { About } from "./About";
import { Portfolio } from "./Portfolio";
import { Settings } from "./Settings";

const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow-x: hidden;
  position: relative;
`;

const lightTheme = {
  backgroundImage: 'url("./images/clouds.jpg")',
  mainColor: "black",
  secondaryColor: "#0d21b0",
};
const darkTheme = {
  backgroundImage: 'url("./images/stars.jpg")',
  mainColor: "white",
  secondaryColor: "rgb(247, 250, 61)",
};

function App() {
  const [mode, changeMode] = useState("day");

  return (
    <ThemeProvider theme={mode === "day" ? lightTheme : darkTheme}>
      <MainWrapper>
        <Settings changeMode={changeMode} mode={mode}></Settings>
        <About mode={mode}></About>
        <Portfolio></Portfolio>
      </MainWrapper>
    </ThemeProvider>
  );
}

export default App;
