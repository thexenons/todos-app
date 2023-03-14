import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --page-padding: ${({ theme }) => theme.spacing(2)};
    }

    html {
        box-sizing: border-box;
        font-family: ${({ theme }) => theme.typography.fontFamily};
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    #root {
        display: grid;
        min-height: 100vh;
        grid-template-areas: "header"
                            "main"
                            "footer";
        grid-template-rows: auto 1fr auto;

        main {
            min-width: 0;
        }

        h1, h2, h3, h4, h5, h6, p, span {
            ${({ theme }) => theme.mixins.margin({ all: 0 })}
        }

        & > header {
            grid-area: header;
        }

        & > main {
            grid-area: main;
        }

        & > footer {
            grid-area: footer;
        }
    }
`;

export default GlobalStyles;
