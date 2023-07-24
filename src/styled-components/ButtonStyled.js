import { styled } from "styled-components";

const StyledButton = styled.button`
  width: 146.631px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 5px;
  background: ${(props) => (props.isClicked ? "#26C2AE" : "#00474B")};
  color: #fff;
  text-align: center;
  font-family: Space Mono;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #9fe8df;
    color: #00474b;
  }
  @media (min-width: 1440px) {
    width: 117px;
    height: 48px;
  }
`;

export default StyledButton;
