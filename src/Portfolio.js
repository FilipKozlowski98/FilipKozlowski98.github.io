import styled from "styled-components";

const PortfolioWrapper = styled.div`
  width: 100%;
  border-top: 5px solid ${(props) => props.theme.secondaryColor};
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.portfolioBackground};
`;

const PortfolioItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  width: 30%;
  min-width: 300px;
  margin: 30px;
  border: 2px solid ${(props) => props.theme.secondaryColor};
  background-color: ${(props) => props.theme.portfolioItemBackground};
  color: ${(props) => props.theme.mainColor};
  box-shadow: -5px 5px 22px 5px #000000;
`;
const PortfolioTitle = styled.h3`
  font-size: 40px;
  letter-spacing: 2px;
  margin: 40px 0 50px 0;
  min-width: 270px;
  text-align: center;
`;
const PortfolioImageWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 50px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const PortfolioNavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  min-width: 150px;
  margin-bottom: 40px;
`;
const PortfolioNavItem = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: transform 0.2s ease-out;
  img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    transform: scale(1.35);
  }
`;

export const Portfolio = (props) => {
  return (
    <PortfolioWrapper id="portfolio">
      <PortfolioItem>
        <PortfolioTitle>Blackjack</PortfolioTitle>
        <PortfolioImageWrapper>
          <img src="./images/blackjackPreview.jpeg" alt="blackjack preview" />
        </PortfolioImageWrapper>
        <PortfolioNavWrapper>
          <PortfolioNavItem
            onClick={() => {
              window
                .open("https://github.com/FilipKozlowski98/Blackjack", "_blank")
                .focus();
            }}
            data-title-smallgithub="Open github"
          >
            <img
              src={
                props.mode === "day" ? "./images/gh-b.png" : "./images/gh-w.png"
              }
              alt="github"
            ></img>
          </PortfolioNavItem>
          <PortfolioNavItem
            onClick={() => {
              window.open("./Blackjack/index.html", "_blank").focus();
            }}
            data-title-preview="Preview"
          >
            <img
              src={
                props.mode === "day"
                  ? "./images/preview-b.png"
                  : "./images/preview-w.png"
              }
              alt="preview"
            ></img>
          </PortfolioNavItem>
        </PortfolioNavWrapper>
      </PortfolioItem>

      <PortfolioItem>
        <PortfolioTitle>Calculator</PortfolioTitle>
        <PortfolioImageWrapper>
          <img src="./images/calculatorPreview.jpeg" alt="calculator preview" />
        </PortfolioImageWrapper>
        <PortfolioNavWrapper>
          <PortfolioNavItem
            onClick={() => {
              window
                .open(
                  "https://github.com/FilipKozlowski98/Calculator",
                  "_blank"
                )
                .focus();
            }}
            data-title-smallgithub="Open github"
          >
            <img
              src={
                props.mode === "day" ? "./images/gh-b.png" : "./images/gh-w.png"
              }
              alt="github"
            ></img>
          </PortfolioNavItem>
          <PortfolioNavItem
            onClick={() => {
              window.open("./Calculator/index.html", "_blank").focus();
            }}
            data-title-preview="Preview"
          >
            <img
              src={
                props.mode === "day"
                  ? "./images/preview-b.png"
                  : "./images/preview-w.png"
              }
              alt="preview"
            ></img>
          </PortfolioNavItem>
        </PortfolioNavWrapper>
      </PortfolioItem>

      <PortfolioItem>
        <PortfolioTitle>Weather App</PortfolioTitle>
        <PortfolioImageWrapper>
          <img
            src="./images/weatherAppPreview.jpeg"
            alt="weather app preview"
          />
        </PortfolioImageWrapper>
        <PortfolioNavWrapper>
          <PortfolioNavItem
            onClick={() => {
              window
                .open(
                  "https://github.com/FilipKozlowski98/Weather-App",
                  "_blank"
                )
                .focus();
            }}
            data-title-smallgithub="Open github"
          >
            <img
              src={
                props.mode === "day" ? "./images/gh-b.png" : "./images/gh-w.png"
              }
              alt="github"
            ></img>
          </PortfolioNavItem>
          <PortfolioNavItem
            onClick={() => {
              window.open("./Weather App/index.html", "_blank").focus();
            }}
            data-title-preview="Preview"
          >
            <img
              src={
                props.mode === "day"
                  ? "./images/preview-b.png"
                  : "./images/preview-w.png"
              }
              alt="preview"
            ></img>
          </PortfolioNavItem>
        </PortfolioNavWrapper>
      </PortfolioItem>

      <PortfolioItem>
        <PortfolioTitle>Finance App</PortfolioTitle>
        <PortfolioImageWrapper>
          <img
            src="./images/financeAppPreview.jpeg"
            alt="finance app preview"
          />
        </PortfolioImageWrapper>
        <PortfolioNavWrapper>
          <PortfolioNavItem
            onClick={() => {
              window
                .open(
                  "https://github.com/FilipKozlowski98/Finance-App",
                  "_blank"
                )
                .focus();
            }}
            data-title-smallgithub="Open github"
          >
            <img
              src={
                props.mode === "day" ? "./images/gh-b.png" : "./images/gh-w.png"
              }
              alt="github"
            ></img>
          </PortfolioNavItem>
          <PortfolioNavItem
            onClick={() => {
              window.open("https://man-app-112a4.web.app", "_blank").focus();
            }}
            data-title-preview="Preview"
          >
            <img
              src={
                props.mode === "day"
                  ? "./images/preview-b.png"
                  : "./images/preview-w.png"
              }
              alt="preview"
            ></img>
          </PortfolioNavItem>
        </PortfolioNavWrapper>
      </PortfolioItem>

      <PortfolioItem>
        <PortfolioTitle>Mario Game</PortfolioTitle>
        <PortfolioImageWrapper>
          <img src="./images/marioPreview.jpeg" alt="mario game preview" />
        </PortfolioImageWrapper>
        <PortfolioNavWrapper>
          <PortfolioNavItem
            onClick={() => {
              window
                .open(
                  "https://github.com/FilipKozlowski98/Mario-Game",
                  "_blank"
                )
                .focus();
            }}
            data-title-smallgithub="Open github"
          >
            <img
              src={
                props.mode === "day" ? "./images/gh-b.png" : "./images/gh-w.png"
              }
              alt="github"
            ></img>
          </PortfolioNavItem>
          <PortfolioNavItem
            onClick={() => {
              window.open("./Mario Game/index.html", "_blank").focus();
            }}
            data-title-preview="Preview"
          >
            <img
              src={
                props.mode === "day"
                  ? "./images/preview-b.png"
                  : "./images/preview-w.png"
              }
              alt="preview"
            ></img>
          </PortfolioNavItem>
        </PortfolioNavWrapper>
      </PortfolioItem>
    </PortfolioWrapper>
  );
};
