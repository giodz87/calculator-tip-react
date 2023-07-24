import { styled } from "styled-components";
import StyledButton from "../styled-components/ButtonStyled";
export default function Result(props) {
  console.log(props.total);
  return (
    <StyledBox>
      <StyledTotal>
        <div>
          <h4>Tip Amount</h4>
          <p>/ person</p>
        </div>
        <h2>
          {props.tipamount && props.tipamount != Infinity
            ? "$" + props.tipamount.toFixed(2)
            : "$0.00"}
        </h2>
      </StyledTotal>

      <StyledTotal>
        <div>
          <h4>Total </h4>
          <p>/ person</p>
        </div>
        <h2>
          {props.total && props.total != Infinity
            ? "$" + props.total.toFixed(2)
            : "$0.00"}
        </h2>
      </StyledTotal>

      <StyledButton
        onClick={() => {
          props.setReset(false);
        }}
        style={
          !props.reset
            ? { background: "#0D686D", color: "#00474B" }
            : { background: "#26C2AE" }
        }
      >
        RESET
      </StyledButton>
    </StyledBox>
  );
}

const StyledBox = styled.section`
  margin-bottom: 32px;
  background: #00474b;
  border-radius: 15px;
  width: 325px;
  height: 257px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  button {
    background: #26c2ae;
    border-radius: 5px;
    width: 281px;
    height: 48px;
    font-family: sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #00474b;
    border: none;
    color: #00474b;
    text-align: center;
    font-family: Space Mono;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
  }

  @media (min-width: 1440px) {
    width: 413px;
    height: 417px;
    padding: 40px;
    margin-top: 30px;
    button {
      width: 333px;
      height: 48px;
    }
  }
`;

const StyledTotal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  h4 {
    color: #fff;
    font-family: Space Mono;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  p {
    color: #7f9d9f;
    font-family: Space Mono;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  h2 {
    color: #26c2ae;
    text-align: right;
    font-family: Space Mono;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.667px;
  }
  @media (min-width: 1440px) {
    h2 {
      font-size: 48px;
    }
  }
`;
