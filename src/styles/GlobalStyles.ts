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
    src: url('../../public/fonts/Barlow-light.ttf') format('truetype');
    font-display: swap;
}

@font-face {
    font-family: 'Barlow-bold';
    src: url('../../public/fonts/Barlow-bold.ttf') format('truetype');
    font-display: swap;
}

@font-face {
    font-family: 'Playfair';
    src: url('../../public/fonts/Playfair-display-Regular.ttf') format('truetype');
    font-display: swap;
}

body {
    font-family: ${(props) => props.theme.fonts.barlowLight};
    color: ${(props) => props.theme.colors.textMain};
    background-color: ${(props) => props.theme.colors.bgWhite};
}

a {
    color: inherit;
    text-decoration: none;
}
`;
