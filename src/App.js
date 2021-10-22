import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { About } from "./About";
import { Portfolio } from "./Portfolio";
import { Settings } from "./Settings";

const FixWrapper = styled.div`
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
`;
const lightTheme = {
  backgroundImage: 'url("./images/clouds.jpg")',
  mainColor: "black",
  secondaryColor: "#0d21b0",
  portfolioBackground: "#4B9AFF",
  portfolioItemBackground: "white",
};
const darkTheme = {
  backgroundImage: 'url("./images/stars.jpg")',
  mainColor: "white",
  secondaryColor: "rgb(247, 250, 61)",
  portfolioBackground: "#0F233D",
  portfolioItemBackground: "black",
};

function App() {
  const [mode, changeMode] = useState("day");

  return (
    <ThemeProvider theme={mode === "day" ? lightTheme : darkTheme}>
      <FixWrapper>
        <MainWrapper>
          <Settings changeMode={changeMode} mode={mode}></Settings>
          <About mode={mode}></About>
          <Portfolio mode={mode}></Portfolio>
        </MainWrapper>
      </FixWrapper>
    </ThemeProvider>
  );
}

export default App;
