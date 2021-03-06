import styled from "styled-components";

const ViewTaskWrapper = styled.div`
  position: absolute;
  left: 25px;
  top: 37px;
`;
const ViewTaskText = styled.div`
  font-size: 20px;
  text-align: center;
  color: ${(props) => props.theme.mainColor};
  cursor: pointer;
  @media (max-width: 560px) {
    font-size: 14px;
  }
`;

export const ViewTask = () => {
  return (
    <ViewTaskWrapper>
      <ViewTaskText
        onClick={() => {
          window.open("#placeholder").focus();
        }}
      >
        View current recruitment tasks.
      </ViewTaskText>
    </ViewTaskWrapper>
  );
};
