import styled from "styled-components";

const OutsideWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-clip: border-box;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: ${(props) => props.theme.backgroundImage};
`;
const FaceWrapper = styled.div`
  width: 350px;
  height: 350px;
  margin-bottom: 40px;
  align-self: center;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
const InsideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const MainTitle = styled.h1`
  color: ${(props) => props.theme.mainColor};
  font-size: 50px;
  margin-bottom: 20px;
  letter-spacing: 1px;
`;
const SecondaryTitle = styled.h2`
  color: ${(props) => props.theme.secondaryColor};
  letter-spacing: 3px;
  font-size: 27.5px;
`;
const Spacer = styled.div`
  width: 300px;
  height: 2px;
  background-color: red;
  margin: 45px 0;
`;
const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  left: -10px;
`;
const SocialItem = styled.div`
  width: 100px;
  height: 100px;
  transition: transform 0.2s ease-out;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    transform: scale(1.35);
  }
`;

export const About = (props) => {
  return (
    <OutsideWrapper>
      <InsideWrapper>
        <FaceWrapper>
          <img src="./images/face.png" />
        </FaceWrapper>
        <MainTitle>Hi, I'm Filip Kozłowski</MainTitle>
        <SecondaryTitle>FRONTEND DEVELOPER</SecondaryTitle>
        <Spacer />
        <SocialWrapper>
          <SocialItem
            onClick={() => {
              window
                .open("https://www.linkedin.com/in/f-kozlowski98/", "_blank")
                .focus();
            }}
            data-title-linkedin="LinkedIn"
          >
            <img src="./images/li.png"></img>
          </SocialItem>
          <SocialItem
            onClick={() => {
              window
                .open("https://github.com/FilipKozlowski98", "_blank")
                .focus();
            }}
            data-title-github="GitHub"
          >
            <img
              src={
                props.mode === "day" ? "./images/gh-b.png" : "./images/gh-w.png"
              }
            ></img>
          </SocialItem>
          <SocialItem onClick={() => {}} data-title-email="Email me !">
            <img
              src={
                props.mode === "day"
                  ? "./images/mail-b.png"
                  : "./images/mail-w.png"
              }
            ></img>
          </SocialItem>
        </SocialWrapper>
      </InsideWrapper>
    </OutsideWrapper>
  );
};
