import { css } from "styled-components";

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

export const promptPosition = (left: string) => css`
    position: absolute;
    left: ${left};
`;

//Mixins de animación/Prompts
export const promptAnimation = css`
    opacity: 0;
    transform: translateX(-20px);
    transition:
        opacity 0.3s ease-in-out,
        transform 0.3s ease-in-out,
        visibility 0.3s ease-in-out;
    visibility: hidden;
`;

export const promptActive = css`
    opacity: 1;
    transform: transalteX(0);
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
