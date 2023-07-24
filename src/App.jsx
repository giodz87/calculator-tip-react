import GlobalStyled from "./styled-components/GlobalStyled";
import { styled } from "styled-components";
import BoxStyled from "./components/BoxStyled";
import Logo from "./images/logo.svg";
import { Helmet } from "react-helmet";
import { useState } from "react";
function App() {
  const [tipamount, setTipAmount] = useState();
  const [total, setTotal] = useState();
  const [reset, setReset] = useState(false);
  console.log(reset);
  return (
    <StyledApp>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyled />
      <img src={Logo} alt="" />
      <BoxStyled
        tipamount={tipamount}
        setTipAmount={setTipAmount}
        total={total}
        setTotal={setTotal}
        reset={reset}
        setReset={setReset}
      />
    </StyledApp>
  );
}

export default App;
const StyledApp = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 50px;
  gap: 70px;
`;
