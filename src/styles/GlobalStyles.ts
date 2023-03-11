import { createGlobalStyle, GlobalStyleComponent } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --color-primary: #007BFF;
        --color-primary-focus: rgba(0, 123, 255, 0.5);
        --color-primary-negative: rgba(0, 123, 255, 0.2);;

        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343B41;
        --grey-1: #868E96;
        --grey-0: #F8F9FA;

        --success: #3FE864;
        --negative: #E83F5B;
        --negative-hover:#bf1f39;
        --white-neutral: #FFFFFF;

        --inter-font: font-family: 'Inter', sans-serif;

        --font-1: 12px;
        --font-2: 16px;
        --font-3: 18px;
        --font-4: 22px;
    }
button {
  cursor: pointer;
  border: 0;
  background:transparent;
}
ul, ol, li{
  list-style:none
} 
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
body{
  background-color:#000000;
  font-family: "Inter";
  font-style: normal;
}

`;
