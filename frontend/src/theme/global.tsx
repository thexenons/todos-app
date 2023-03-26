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
        display: flex;
        min-height: 100vh;

        main {
            flex: 1 1 auto;
            background-color: ${({ theme }) => theme.colors.background.default};
            color: ${({ theme }) => theme.colors.text.primary};
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
