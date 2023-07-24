import styled from "styled-components";
import Result from "./Result";
import Amount from "./Amount";
export default function BoxStyled(props) {
  return (
    <BoxStyle>
      <Amount
        setTipAmount={props.setTipAmount}
        setTotal={props.setTotal}
        setReset={props.setReset}
        reset={props.reset}
      />
      <Result
        tipamount={props.tipamount}
        total={props.total}
        reset={props.reset}
        setReset={props.setReset}
      />
    </BoxStyle>
  );
}
const BoxStyle = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 375px;
  height: 789px;
  flex-shrink: 0;
  border-radius: 25px 25px 0px 0px;
  background: #fff;
  box-shadow: 0px 32px 43px 0px rgba(79, 166, 175, 0.2);
  @media (min-width: 1440px) {
    width: 920px;
    height: 481px;
    flex-direction: row;
    padding: 32px 32px 32px 48px;
    border-radius: 25px;
  }
`;
