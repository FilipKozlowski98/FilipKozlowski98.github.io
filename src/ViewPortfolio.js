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
    @media (max-width: 560px) {
      width: 50%;
      height: 50%;
    }
  }
  &:hover {
    img {
      transform: translate(0, 20px);
      @media (max-width: 560px) {
        transform: translate(0, 0);
      }
    }
  }
  z-index: 10;
  @media (max-width: 560px) {
    bottom: 0px;
    right: calc(50vw - 37.5px);
  }
  @media (max-height: 630px) {
    right: 13px;
    top: 90px;
  }
`;
const ViewPortfolioText = styled.span`
  font-size: 20px;
  width: 100px;
  text-align: center;
  color: ${(props) => props.theme.mainColor};
  @media (max-width: 560px) {
    font-size: 14px;
  }
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
