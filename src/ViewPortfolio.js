import styled from "styled-components";

const ViewPortfolioWrapper = styled.a`
  display: block;
  position: absolute;
  right: 100px;
  bottom: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75px;
  height: 75px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    transition: transform 0.2s ease-out;
  }
  &:hover {
    img {
      transform: translate(0, 20px);
    }
  }
  z-index: 10;
`;
const ViewPortfolioText = styled.span`
  font-size: 20px;
  width: 100px;
  text-align: center;
  color: ${(props) => props.theme.mainColor};
`;

export const ViewPortfolio = (props) => {
  return (
    <ViewPortfolioWrapper href="#portfolio">
      <ViewPortfolioText>
        View my
        <br />
        portfolio
      </ViewPortfolioText>
      <img
        src={
          props.mode === "day"
            ? "./images/arrowDown-b.png"
            : "./images/arrowDown-w.png"
        }
        alt="arrow down"
      ></img>
    </ViewPortfolioWrapper>
  );
};
