import styled from "styled-components";

export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: ${(props) => props.theme.colors.bgWhite};
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

export const Logo = styled.img`
    height: 40px;
`;

export const Nav = styled.nav`
    a {
        margin: 0 1rem;
        color: ${(props) => props.theme.colors.textMain};
        text-decoration: none;
        font-family: ${(props) => props.theme.fonts.barlowBold};
        font-size: 1rem;

        &:hover {
            color: ${(props) => props.theme.colors.linkHover};
        }
    }
`;
