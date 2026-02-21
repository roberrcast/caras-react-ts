import styled from "styled-components";
import {
    fluid,
    fullWidth,
    txtSizeWeight,
    grid,
    flexColumnCenter,
    border,
} from "../../styles/mixins";

export const Comments = styled.section`
    ${fullWidth};
`;

export const Title = styled.h3`
    ${txtSizeWeight(fluid("1.3rem", "2rem", "475px", "1800px"))};
    text-align: center;
    margin: 4rem 0;
`;

export const CommentsContainer = styled.section`
    width: 100%;
    display: flex;
    padding: 0 ${fluid("1rem", "8rem", "400px", "1800px")};
`;

// .comments__flex
export const CommentsContainerInner = styled.div`
    width: 100%;
    ${grid("repeat(auto-fit, minmax(min(100%, 220px), 1fr))", "3rem")};
    justify-content: space-between;
    padding-bottom: 4rem;
    ${({ theme }) => border("bottom", theme.colors.border)};
`;

export const CommentsCard = styled.section`
    box-sizing: border-box;
    ${flexColumnCenter};
    background-color: ${({ theme }) => theme.colors.bgOther};
    border-radius: 1rem;
    padding: 1rem;
    gap: 1rem;
`;

export const Image = styled.img`
    /* width: 75%; */
    width: 150px;
    height: 150px;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 50%;
`;

export const Username = styled.h4`
    font-family: ${({ theme }) => theme.fonts.barlowBold};
    font-size: 1rem;
    text-transform: uppercase;
`;

export const Text = styled.p`
    font-family: ${({ theme }) => theme.fonts.barlowLight};
    text-align: left;
`;
