import styled from "styled-components";

const SettingsWrapper = styled.div`
  position: absolute;
  right: 50px;
  top: 30px;
  width: 75px;
  height: 75px;
  transition: transform 0.2s ease-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.35);
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Settings = (props) => {
  const modeChangeHandler = (changeMode, mode) => {
    mode === "day" ? changeMode("night") : changeMode("day");
  };

  return (
    <SettingsWrapper
      data-title-mode="Change mode"
      onClick={() => {
        modeChangeHandler(props.changeMode, props.mode);
      }}
    >
      <img
        src={props.mode === "day" ? "./images/sun.png" : "./images/moon.png"}
      />
    </SettingsWrapper>
  );
};
