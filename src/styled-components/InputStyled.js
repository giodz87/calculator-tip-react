import { styled } from "styled-components";

const InputStyled = styled.input`
  padding: 0px 7px 1px 0px;
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align: right;
  color: #00474b;
  width: 311px;
  height: 48px;
  border-radius: 5px;
  background: #f3f9fa;
  border: none;
  outline: none;
  &.no-spin::-webkit-inner-spin-button,
  &.no-spin::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
    overflow: hidden;
  }

  @media (min-width: 1440px) {
    width: 379px;
    height: 48px;
    padding: 2px 17px 2px 74px;
  }
`;
export default InputStyled;
