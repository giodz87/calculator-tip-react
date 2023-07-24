import styled from "styled-components";
import StyledButton from "../styled-components/ButtonStyled";
import InputStyled from "../styled-components/InputStyled";
import IconDollar from "../images/icon-dollar.svg";
import IconPerson from "../images/icon-person.svg";
import { useEffect, useState } from "react";

export default function Amount(props) {
  const button = ["5%", "10%", "15%", "25%", "50%"];
  const [bill, setBill] = useState();
  const [ppl, setPpl] = useState();
  const [tip, setTip] = useState();

  useEffect(() => {
    if (bill || ppl || tip) {
      props.setReset(true);
    }
    if (!ppl > 1) {
      setPpl();
    }
    const totalAmount = (bill * tip) / 100 / ppl;
    props.setTipAmount(totalAmount);
    const perPersonAmount = bill / ppl + totalAmount;

    props.setTotal(perPersonAmount);
  }, [bill, ppl, tip]);

  useEffect(() => {
    if (!props.reset) {
      setBill("");
      setPpl("");
      setTip("");
    }
  }, [props.reset]);

  return (
    <StyledAmount>
      <div>
        <p>Bill</p>
        <div>
          <InputStyled
            type="number"
            placeholder="0"
            value={bill}
            className="no-spin"
            onChange={(e) => {
              if (e.target.value.toString().length <= 4)
                setBill(e.target.valueAsNumber);
            }}
          />
          <img src={IconDollar} alt="" />
        </div>
      </div>

      <StyedBtn>
        <p>Select Tip %</p>
        <div>
          {button.map((item) => (
            <StyledButton
              key={item}
              isClicked={parseFloat(item.replace("%", "")) == tip}
              onClick={(e) => {
                const numericValue = parseFloat(item.replace("%", ""));
                setTip(numericValue);
              }}
            >
              {item}
            </StyledButton>
          ))}
          <InputStyled
            placeholder="Custom"
            type="number"
            value={tip}
            className="no-spin"
            onChange={(e) => {
              if (e.target.value.toString().length <= 4)
                setTip(e.target.valueAsNumber);
            }}
          />
        </div>
      </StyedBtn>
      <div>
        <div>
          <p>Number of People</p>
          {ppl === 0 ? <p>Can’t be zero</p> : null}
        </div>
        <div>
          {
            <InputStyled
              type="number"
              placeholder="0"
              value={ppl}
              className="no-spin"
              onChange={(e) => {
                if (e.target.value.toString().length <= 4)
                  setPpl(e.target.valueAsNumber);
              }}
              style={
                ppl !== 0
                  ? {}
                  : { border: "2px solid #E17052", color: "#E17052" }
              }
            />
          }
          <img src={IconPerson} alt="" />
        </div>
      </div>
    </StyledAmount>
  );
}

const StyledAmount = styled.section`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 32px;
  div div:nth-child(1) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    p:nth-child(2) {
      color: #e17052;
    }
  }

  p {
    color: #5e7a7d;
    font-family: Space Mono;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 7px;
  }
  div {
    position: relative;
  }
  img {
    position: absolute;
    left: 19px;
    top: 16px;
  }
  @media (min-width: 1440px) {
  }
`;

const StyedBtn = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;

  div {
    justify-content: space-between;
    width: 311px;
    display: grid;
    grid-template-columns: 0% 47%;
    align-items: flex-start;
    gap: 16px;
  }
  input {
    width: 147.814px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #f3f9fa;
    color: #547878;
    text-align: right;
    font-family: Space Mono;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    padding: 0px 15px 0px 0px;
  }
  @media (min-width: 1440px) {
    div {
      grid-template-columns: 21% 21% 31%;
      width: 380px;
    }
    input {
      width: 117px;
      height: 48px;
      padding: 7px 15px 7px 15px;
    }
  }
`;
