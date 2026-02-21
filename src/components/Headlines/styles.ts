import styled from "styled-components";
import {
    fluid,
    fullWidth,
    grid,
    footerStyle,
    paddingStyle,
} from "../../styles/mixins";

export const HeadlinesContainer = styled.section`
    ${fullWidth};
    ${paddingStyle};
`;

export const HeadlinesContainerInner = styled.div`
    ${grid("repeat(auto-fit, minmax(min(100%, 220px), 1fr))", "3rem")};

    @media (max-width: 1500px) {
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
    }

    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
    }
`;

export const HeadlinesCard = styled.article``;

export const HeadlinesImageLink = styled.a``;

export const Image = styled.img`
    width: 100%;
    aspect-ratio: 1.65;
    object-fit: cover;
`;

export const Content = styled.div`
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0 0.5rem;
`;

export const SectionLink = styled.a`
    font-family: ${({ theme }) => theme.fonts.barlowBold};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.h4`
    font-size: ${fluid("1.3rem", "1.4rem", "400px", "1800px")};
    font-weight: 600;
`;

export const HeadlineText = styled.a``;

export const Footer = styled.footer`
    span {
        ${footerStyle};
    }
`;

export const Time = styled.time`
    ${footerStyle};
`;

export const AuthorLink = styled.a`
    ${footerStyle};
`;
