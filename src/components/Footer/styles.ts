import styled from "styled-components";
import {
    fullWidth,
    fluid,
    logoWidthHeight,
    flexSpaceBetween,
    border,
} from "../../styles/mixins";

export const FooterContainer = styled.footer`
    ${fullWidth};
    padding: 1.75rem ${fluid("1rem", "8rem", "400px", "1800px")};
    background-color: ${({ theme }) => theme.colors.footerBg};
`;

// .footer__menus-legal
export const MenusLegal = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: ${fluid("5rem", "10rem", "400px", "1800px")};

    @media (max-width: 450px) {
        justify-content: center;
        gap: 6rem;
    }
`;

// Antes .footer__logo-container
export const LogoContainer = styled.div`
    ${logoWidthHeight};
`;

export const FooterLogoLink = styled.a``;

export const Logo = styled.img`
    width: 100%;
`;

export const Menu = styled.section`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h4`
    font-weight: 700;
    font-size: ${fluid(".95rem", "1rem", "400px", "1800px")};
    margin: 0 0 1rem 0;
`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.colors.footerText};
    font-size: ${fluid(".95rem", "1rem", "400px", "1800px")};

    @media (hover: hover) {
        &:hover {
            color: ${({ theme }) => theme.colors.linkHover};
        }
    }
`;

export const DisclaimerSocial = styled.div`
    ${fullWidth};
    ${flexSpaceBetween};
    align-items: center;
    text-transform: uppercase;
    padding: 2rem 0;
    margin: 2rem 0 0 0;
    ${({ theme }) => border("top", theme.colors.border)};

    @media (max-width: 900px) {
        flex-direction: column;
        gap: 1rem;
    }
`;

export const Text = styled.p`
    opacity: 0.8;
    font-size: ${fluid(".75rem", ".9rem", "400px", "1800px")};

    @media (max-width: 600px) {
        text-align: center;
    }
`;

// .footer__social-media
export const SocialMedia = styled.div`
    display: flex;
    opacity: 0.8;
    gap: 1rem;
`;

export const LinkIcon = styled.a``;

export const Icon = styled.i`
    color: ${({ theme }) => theme.colors.textMain};
`;
