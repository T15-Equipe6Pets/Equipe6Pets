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
        --white-neutral: #FFFFFF;

        --inter-font: font-family: 'Inter', sans-serif;
    }
`;
