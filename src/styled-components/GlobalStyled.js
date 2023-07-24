import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
* {
box-sizing: border-box;
margin: 0;
padding: 0;

}
body {
  
  background: #C5E4E7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
}
`;
export default GlobalStyled;
