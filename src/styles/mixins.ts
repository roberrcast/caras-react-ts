import { css } from "styled-components";
type ThemeColor = "primary" | "bgSecondary";

interface ParsedUnit {
    val: number;
    unit: string;
}

// Funciones para medidas dinámicas (fluidas)
const parseUnit = (value: string | number): ParsedUnit => {
    const match = String(value).match(/(-?[\d.]+)([a-z%]*)/);
    if (!match) return { val: parseFloat(String(value)), unit: "" };
    return { val: parseFloat(match[1]), unit: match[2] };
};

// Función interna para convertir a pixeles
const convertToPx = (
    value: string | number,
    rootFontSize: number = 16,
): number => {
    const { val, unit } = parseUnit(value);
    if (unit === "rem") {
        return val * rootFontSize;
    }

    return val;
};

/**
 * una función para generar un clamp() en CSS para fluidamente escalar valores
 * @param minSize min - el valor mínimo (p.ej., '0.7rem').
 * @param maxSize max - el valor máximo (p.ej., 1rem) .
 * @param minBreakpoint min - el Breakpoint mínimo (p.ej., 22rem).
 * @param maxBreakpoint max - el Breakpoint máximo (p.ej., 80rem).
 * @returns una función clamp() CSS.
 */

export const fluid = (
    minSize: string | number,
    maxSize: string | number,
    minBreakpoint: string | number,
    maxBreakpoint: string | number,
): string => {
    //Convertimos todos los inputs a pixeles para calcular correctamente
    const minSizePx = convertToPx(minSize);
    const maxSizePx = convertToPx(maxSize);
    const minBreakpointPx = convertToPx(minBreakpoint);
    const maxBreakpointPx = convertToPx(maxBreakpoint);

    const slope = (maxSizePx - minSizePx) / (maxBreakpointPx - minBreakpointPx);

    //El intercept ahora está calculado en pixeles
    const interceptPx = minSizePx - slope * minBreakpointPx;

    //La parte media de la función clamp(), usando el slope e intercept calculados
    const preferredValue = `${(slope * 100).toFixed(4)}vw + ${(interceptPx / 16).toFixed(4)}rem`;

    //Usamos los valores originales de min/max en el clamp() final para precisión
    return `clamp(${minSize}, ${preferredValue}, ${maxSize})`;
};

//Mixins simples (sin argumentos)
export const flexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const flexColumnCenter = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const fullWidth = css`
    width: 100%;
    box-sizing: border-box;
`;

export const flexSpaceBetween = css`
    display: flex;
    justify-content: space-between;
`;

//Mixin que dependen del theme
export const txtPrimary = css`
    font-family: ${({ theme }) => theme.fonts.playfair};
    color: ${({ theme }) => theme.colors.textMain};
`;

//Mixins como funciones (con argumentos)
export const txtSizeWeight = (size: string) => css`
    font-size: ${size};
    font-weight: 700;
`;

export const columnFlex = css`
    display: flex;
    flex-direction: column;
`;

//Mixin para el collage del '.highlights' que tiene diferente layout en media-query (1168px)
export const aspectRatio = css`
    width: 100%;
    display: block;
    aspect-ratio: 1.5;
    object-fit: cover;
`;

//Hover
export const hover = (color: string) => css`
    @media (hover: hover) {
        &:hover {
            color: ${color};
            cursor: pointer;
        }
    }
`;

//Prompts
export const prompt = (
    bg: string,
    color: string,
    padd: string,
    radius: string,
) => css`
    background-color: ${bg};
    color: ${color};
    padding: ${padd};
    border-radius: ${radius};
`;

export const inputPromptPosition = css`
    /* left: 100%; */
    left: calc(100% + 10px);
    top: 50%;
    /* transform: translate(10px, -50%); */

    white-space: nowrap;
`;

//Mixins de animación/Prompts
export const promptAnimation = css`
    opacity: 0;
    transform: translate(-20px, -50%);
    transition:
        opacity 0.3s ease-in-out,
        transform 0.3s ease-in-out,
        visibility 0.3s ease-in-out;
    visibility: hidden;
`;

export const promptActive = css`
    opacity: 1;
    transform: translate(0, -50%);
    visibility: visible;
`;

export const toggleAnimation = css`
    transition:
        opacity 0.3s ease-in-out,
        transform 0.3s ease-in-out,
        visibility 0.3s ease-in-out;
`;

export const newsletterAlertHidden = css`
    opacity: 0;
    visibility: hidden;
    transform: translateY(-40px);
    transition:
        opacity 0.3s ease-in-out,
        transform 0.3s ease-in-out,
        visibility 0.3s ease-in-out;
`;

export const newsletterAlertPrompt = css`
    display: flex;
    flex-direction: column;
    padding: 0.5rem 1rem 1rem 1rem;
    border-radius: 8px;
    gap: 8px;
`;

export const newsletterAlertShow = css`
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
`;

// Estilos para el contenido de las columnas
export const columnLayout = (
    display: string,
    flexDirection: string,
    alignItems: string,
    justifyContent: string,
) => css`
    display: ${display};
    flex-direction: ${flexDirection};
    align-items: ${alignItems};
    justify-content: ${justifyContent};
`;

// Estilos para iconos
export const baseIcon = (
    minSize: string,
    maxSize: string,
    minBreakpoint: string,
    maxBreakpoint: string,
    fillColor: ThemeColor,
    hoverColor: ThemeColor,
) => css`
    width: ${fluid(minSize, maxSize, minBreakpoint, maxBreakpoint)};
    height: ${fluid(minSize, maxSize, minBreakpoint, maxBreakpoint)};

    fill: ${({ theme }) => theme.colors[fillColor]};

    @media (hover: hover) {
        &:hover {
            cursor: pointer;
            fill: ${({ theme }) => theme.colors[hoverColor]};
        }
    }
`;

// Estilo para iconos Pause/Play
export const iconStyle = css`
    ${baseIcon("16px", "24px", "375px", "1800px", "bgSecondary", "primary")}
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.3s ease-in-out;
`;

// height & width mixin
export const heightWidth = (height: string, width: string) => css`
    height: ${height};
    width: ${width};
`;

// Estilo base botón
export const baseButton = (background: string, border: string) => css`
    background: ${background};
    border: ${border};
`;

// Mixin para grid
export const grid = (columnValue: string, gap: string) => css`
    display: grid;
    grid-template-columns: ${columnValue};
    gap: ${gap};
`;

// Mixin para width y height para user images
export const imgWidthHeight = (width: string, height: string) => css`
    width: ${width};
    height: ${height};
`;

export const border = (
    position: "top" | "bottom" | "left" = "bottom",
    value: string,
) => css`
border-${position}: 1px solid ${value};
`;

// Mixin para el padding responsivo de los headlines @700px
export const paddingStyle = css`
    padding: ${fluid("4rem", "4rem", "400px", "1800px")}
        ${fluid("1rem", "8rem", "400px", "1800px")}
        ${fluid("1rem", "4.75rem", "400px", "1800px")};
`;

// Mixin para el footer de los headlines
export const footerStyle = css`
    font-family: ${({ theme }) => theme.fonts.barlowLight};
    color: ${({ theme }) => theme.colors.textSub};
    font-size: ${fluid("0.75rem", "0.9rem", "400px", "1800px")};
    text-transform: uppercase;
`;
