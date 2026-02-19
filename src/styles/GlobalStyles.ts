import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

/* Estilos para resetear */
*, *::before, *::after {
box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/* Fuentes */
@font-face {
    font-family: 'Barlow-light';
    src: url('/fonts/Barlow-light.ttf') format('truetype');
    font-display: swap;
}

@font-face {
    font-family: 'Barlow-bold';
    src: url('/fonts/Barlow-bold.ttf') format('truetype');
    font-display: swap;
}

@font-face {
    font-family: 'Playfair';
    src: url('/fonts/Playfair-display-Regular.ttf') format('truetype');
    font-display: swap;
}

body {
    font-family: ${(props) => props.theme.fonts.playfair};
    color: ${(props) => props.theme.colors.textMain};
    background-color: ${(props) => props.theme.colors.bgWhite};
    box-sizing: border-box;
}

a {
    color: inherit;
    text-decoration: none;
}
`;
