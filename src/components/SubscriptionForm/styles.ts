import styled from "styled-components";
import { X } from "react-feather";
import {
    fluid,
    flexColumnCenter,
    fullWidth,
    txtSizeWeight,
    hover,
    prompt,
    inputPromptPosition,
    promptAnimation,
    promptActive,
    newsletterAlertPrompt,
    newsletterAlertHidden,
    newsletterAlertShow,
    promptPositionMobile,
} from "../../styles/mixins";

// .newsletter
export const NewsletterWrapper = styled.section`
    position: relative;
    ${fullWidth};
    ${flexColumnCenter};
    padding: 1em;
    background-color: ${({ theme }) => theme.colors.bgSecondary};

    @media (max-width: 50.625em) {
        padding: 1rem 0.5rem;
    }
`;

// .newsletter__title
export const Title = styled.h1`
    font-family: ${({ theme }) => theme.fonts.playfair};
    ${txtSizeWeight(fluid("1.75rem", "2.5rem", "500px", "1800px"))};
`;

// .newsletter__txt
export const Subtitle = styled.p`
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.playfair};
    ${txtSizeWeight(fluid("1rem", "1.5rem", "500px", "1800px"))};
    color: ${({ theme }) => theme.colors.primary};
    padding: 0.5rem;
`;

// .newsletter__form
export const Form = styled.form`
    ${flexColumnCenter};
    font-family: ${({ theme }) => theme.fonts.barlowBold};
    text-transform: uppercase;
    margin: 1rem;
    gap: 1rem;
    width: 100%;

    @media (max-width: 560px) {
        align-items: center;
        gap: 1.5rem;
    }

    @media (max-width: 400px) {
        margin: 0.5rem;
    }
`;

//Corresponde a los contenedores de .newsletter__name y __email
export const InputGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
    position: relative;

    @media (max-width: 500px) {
        flex-direction: column;
    }
`;

// .newsletter__label
export const Label = styled.label`
    font-size: ${fluid(".76rem", "1rem", "400px", "1800px")};

    @media (max-width: 25em) {
        margin-left: 0;
    }
`;

// .newsletter__input
export const Input = styled.input`
    position: relative;
    border: none;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.footerBg};
    padding: 0.3rem;
    transition: box-shadow 0.2s ease-in-out;

    &:focus {
        outline: none;
        border: none;
        box-shadow: 0 0 8px 3px ${({ theme }) => theme.colors.primaryGlow};
    }

    @media (max-width: 46.875rem) {
        font-size: 0.75rem;
        width: 110px;
    }
`;

export const SubmitWrapper = styled.div`
    @media (max-width: 560px) {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;

// .newsletter__submit
export const SubmitButton = styled(Input).attrs({ type: "submit" })`
    font-family: ${({ theme }) => theme.fonts.barlowBold};
    font-size: ${fluid(".8rem", "1.2rem", "500px", "1800px")};
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.colors.bgWhite};
    ${({ theme }) => hover(theme.colors.primary)};
    width: auto;
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
    ${inputPromptPosition};
    font-size: ${fluid("10.4px", "18px", "400px", "1800px")};
    ${promptPositionMobile("500px")};
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
    ${inputPromptPosition};
    font-size: ${fluid("10.4px", "18px", "400px", "1800px")};
    ${promptPositionMobile("500px")};
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
    ${inputPromptPosition};
    font-size: ${fluid("10.4px", "18px", "400px", "1800px")};
    ${promptPositionMobile("500px")};
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

    @media (max-width: 500px) {
        width: 80%;
        margin: -50% auto;
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
