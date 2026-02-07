import styled from "styled-components";
import { fullWidth, flexCenter, flexColumnCenter } from "../../styles/mixins";

export const HeaderWrapper = styled.header`
    ${flexColumnCenter};
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    padding: 1.75rem;

    @media (max-width: 29.688em) {
        padding: 1.5rem 0.5rem;
    }
`;

// NEW: Corresponds to .header__logo-link (the <section> wrapper)
export const LogoWrapper = styled.section`
    width: 230px;

    @media (max-width: 53.125em) {
        width: 195px;
    }
    @media (max-width: 36.25em) {
        width: 30%;
    }
    @media (max-width: 29.688em) {
        width: 35%;
    }
`;

// UPDATED: Corresponds to .header__home (the <a> tag)
export const LogoLink = styled.a`
    ${flexCenter}; /* This is the ONLY style it should have from the layout */
`;

// This corresponds to .header__logo
export const Logo = styled.img`
    width: 100%;
`;

// This corresponds to .header__menu
export const Menu = styled.section`
    width: 100%;
    margin-top: 1em;
`;

// This corresponds to .header__nav
export const Nav = styled.nav`
    ${flexCenter};
    flex-wrap: wrap;

    /* Styles for .header__link from _components.scss are applied here */
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.textMain};
        padding: 0 1em 0 0;
        font-family: ${({ theme }) => theme.fonts.playfair};

        &:hover {
            color: ${({ theme }) => theme.colors.linkHover};
        }

        @media (max-width: 50.625em) {
            font-size: 0.9rem;
        }

        @media (max-width: 46.875em) {
            font-size: 1rem;
            text-align: center;
            padding: 0;
        }

        @media (max-width: 29.688em) {
            font-size: 0.8rem;
        }
    }

    /* Grid layout from .header__nav */
    @media (max-width: 46.875em) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        justify-items: center;
    }
`;

// This corresponds to .header__social-media
export const SocialMedia = styled.section`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
`;

// This corresponds to .header__link-icon
export const IconLink = styled.a`
    color: ${({ theme }) => theme.colors.textSub};

    &:hover {
        color: ${({ theme }) => theme.colors.linkHover};
    }
`;

export const IconWrapper = styled.i`
    color: ${({ theme }) => theme.colors.textSub};
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.linkHover};
    }
`;
