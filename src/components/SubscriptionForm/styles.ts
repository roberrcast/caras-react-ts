import styled from "styled-components";
import { X } from "react-feather";
import {
    fluid,
    flexColumnCenter,
    fullWidth,
    txtSizeWeight,
    hover,
    prompt,
    promptPosition,
    promptAnimation,
    promptActive,
    newsletterAlertPrompt,
    newsletterAlertHidden,
    newsletterAlertShow,
} from "../../styles/mixins";

// .newsletter
export const NewsletterWrapper = styled.section`
    position: relative;
    ${fullWidth};
    ${flexColumnCenter};
    padding: 2em;
    background-color: ${({ theme }) => theme.colors.bgSecondary};

    @media (max-width: 50.625em) {
        padding: 1rem 0.5rem;
    }
`;

// .newsletter__title
export const Title = styled.h1`
    font-family: ${({ theme }) => theme.fonts.playfair};
    ${txtSizeWeight("2.5rem")};

    @media (max-width: 79em) {
        font-size: 2.4rem;
    }
    @media (max-width: 56.5em) {
        font-size: 2rem;
    }
    @media (max-width: 53.125em) {
        font-size: 1.75rem;
    }
`;

// .newsletter__txt
export const Subtitle = styled.p`
    font-family: ${({ theme }) => theme.fonts.playfair};
    ${txtSizeWeight("1.5rem")};
    color: ${({ theme }) => theme.colors.primary};
    padding: 1rem;

    @media (max-width: 79em) {
        font-size: 1.35rem;
    }
    @media (max-width: 56.5em) {
        font-size: 1.25rem;
    }
    @media (max-width: 53.125em) {
        font-size: 1.15rem;
    }
    @media (max-width: 50.625em) {
        text-align: center;
        line-height: 2rem;
    }
    @media (max-width: 29.688em) {
        font-size: 1rem;
    }
`;

//Antes .newsletter__form
export const Form = styled.form`
    ${flexColumnCenter};
    font-family: ${({ theme }) => theme.fonts.barlowBold};
    text-transform: uppercase;
    margin: 1rem;
    gap: 1rem;
    width: 100%;

    @media (max-width: 25em) {
        margin: 0.5rem;
        align-items: start;
    }
`;

//Corresponde a los contenedores de .newsletter__name y __email
export const InputGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
`;

// .newsletter__label
export const Label = styled.label`

@media (max-width: 53.125em) {
    font-size: 0.95rem;
    }

    @media (max-width: 46.875em) {
    font-size: 0.8rem;
    }

    @media (max-width: 25em) {
    font-size: 0.76rem;
   margin-left: 55px;
   
`;

// .newsletter__input
export const Input = styled.input`
    position: relative;
    border: none;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.footerBg};
    padding: 0.5rem;

    @media (max-width: 46.875rem) {
        font-size: 0.75rem;
        width: 110px;
    }
`;

// .newsletter__submit
export const SubmitButton = styled(Input).attrs({ type: "submit" })`
    font-family: ${({ theme }) => theme.fonts.barlowBold};
    font-size: 1.2rem;
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.colors.bgWhite};
    ${({ theme }) => hover(theme.colors.primary)};
    width: auto;

    @media (max-width: 53.125em) {
        font-size: 0.99rem;
    }
    @media (max-width: 46.875em) {
        font-size: 0.85rem;
        width: 100px;
    }
    @media (max-width: 29.688em) {
        font-size: 0.9rem;
    }
`;

// Estilos base para todos los pop-ups de los prompts
const PromptBase = styled.span<{ $active?: boolean }>`
    ${promptAnimation};
    ${({ $active }) => $active && promptActive};
    position: absolute;

    /* Posiciones y colores específicos estarán en los componentes extendidos */
`;

// .newsletter__name-prompt
export const NamePrompt = styled(PromptBase)`
    ${({ theme }) =>
        prompt(
            theme.colors.prompts.name,
            theme.colors.prompts.text,
            "4px",
            "8px",
        )}
    ${promptPosition(fluid("250px", "1010px", "400px", "1800px"))};
    font-size: ${fluid("10.4px", "18px", "400px", "1800px")};
`;

// .newsletter__email-prompt y sus variaciones
export const EmailPrompt = styled(PromptBase)<{
    $status?: "success" | "error";
}>`
    ${({ theme, $status }) =>
        prompt(
            $status === "success"
                ? theme.colors.prompts.success
                : $status === "error"
                  ? theme.colors.prompts.error
                  : theme.colors.bgSecondary,
            theme.colors.prompts.text,
            "4px",
            "8px",
        )}
    ${promptPosition(fluid("313px", "1060px", "400px", "1800px"))};
    font-size: ${fluid("10.4px", "18px", "400px", "1800px")};
`;

// .newsletter__email-submit
export const SubmitPrompt = styled(PromptBase)`
    ${({ theme }) =>
        prompt(
            theme.colors.prompts.name,
            theme.colors.prompts.text,
            "4px",
            "8px",
        )}
    ${promptPosition("968px")};
    /* Añade el resto de los media queries si es necesario */
`;

// .newsletter__alert
export const Alert = styled.div<{
    $status: "success" | "error" | "";
    $active: boolean;
}>`
    ${newsletterAlertPrompt};
    ${newsletterAlertHidden};
    position: fixed;
    z-index: 1000;
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 350px;

    ${({ $status, theme }) =>
        $status === "error" &&
        `background-color: ${theme.colors.prompts.form};`}

    ${({ $status, theme }) =>
        $status === "success" &&
        `background-color: ${theme.colors.prompts.success2};`}

${({ $active }) => $active && newsletterAlertShow};

    @media (max-width: 25em) {
        width: 80%;
        margin: 0 10%;
    }
`;

// Centra este botón
// .newsletter__alert-close
export const AlertCloseButton = styled.i`
    width: 30px;
    display: flex;
    align-self: center;
    justify-content: center;
    align-items: center;
    transition: 0.2s all ease-in-out;
    ${({ theme }) => hover(theme.colors.black)};

    @media (hover: hover) {
        &:hover {
            transform: scale(1.1);
        }
    }
`;

// Icono de cerrado
export const CloseIcon = styled(X)``;

// .newsletter__alert-txt
export const AlertText = styled.p`
    text-align: center;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.black};

    @media (max-width: 26.25em) {
        line-height: 21px;
        font-size: 0.9rem;
    }
`;
