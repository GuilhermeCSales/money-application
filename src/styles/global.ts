import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #E5E5E5;
        --red: #F7685B;
        --blue: #109CF1;
        --blue-light: #74B5DD;
        --text-title: #334D6E;
        --text-body: #90A0B7;
        --shape: #ffffff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (min-width: 1080px) {
            font-size: 93.75%;
        }

        @media (min-width: 720px){
            font-size: 87.5%;
        }
    }

    body {
        background-color: var(--background-color);
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
