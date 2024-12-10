import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

    html {
        box-sizing: border-box;
    }

    *, *::before, *::after {
        box-sizing: inherit;
    }


    body {
        font-family: "Inter", sans-serif;
        font-size: 18px;
        word-break: break-word;
        transition: background 0.3s;
        letter-spacing: 0.05em;
        background: #FBFBFE;
        color: #6E7E91;
        overflow-y: scroll;
        padding-bottom: 108px;

        @media (max-width: 767px) {
            padding-bottom: 32px;
        }
    }
`;
