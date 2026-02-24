import styled from "styled-components";
import {
    fullWidth,
    flexCenter,
    flexColumnCenter,
    fluid,
} from "../../styles/mixins";

export const HeaderWrapper = styled.header`
    ${flexColumnCenter};
    justify-content: center;
    ${fullWidth};
    padding: 1.75rem;

    @media (max-width: 29.688em) {
        padding: 1.5rem 0.5rem;
    }
`;

export const LogoWrapper = styled.section`
    width: ${fluid("125px", "230px", "450px", "1800px")};
`;

//Antes header__home (the <a> tag)
export const LogoLink = styled.a`
    ${flexCenter};
`;

// Antes .header__logo
export const Logo = styled.img`
    width: 100%;
`;

// Antes header__menu
export const Menu = styled.section`
    width: 100%;
    margin-top: 1em;
`;

// Antes .header__nav
export const Nav = styled.nav`
    ${flexCenter};
    flex-wrap: wrap;

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.textMain};
        padding: 0 1em 0 0;
        font-family: ${({ theme }) => theme.fonts.playfair};
        font-size: ${fluid("0.8rem", "1.1rem", "500px", "1800px")};

        &:hover {
            color: ${({ theme }) => theme.colors.linkHover};
        }

        @media (max-width: 46.875em) {
            text-align: center;
            padding: 0;
        }
    }

    /* Grid layout para .header__nav */
    @media (max-width: 46.875em) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        justify-items: center;
    }
`;

// Anstes .header__social-media
export const SocialMedia = styled.section`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
`;

// Antes .header__link-icon
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
