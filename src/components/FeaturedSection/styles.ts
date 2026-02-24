import styled from "styled-components";
import {
    fluid,
    columnLayout,
    heightWidth,
    baseButton,
    iconStyle,
} from "../../styles/mixins";
import { ReactComponent as PlayIcon } from "../../assets/playIcon.svg";
import { ReactComponent as PauseIcon } from "../../assets/pauseIcon.svg";

// NEW main feature section container
export const FeaturedSectionContainer = styled.section``;

// .highlights__title
export const Title = styled.h2`
    font-size: ${fluid("1.3rem", "1.8rem", "400px", "1800px")};
    text-align: center;
    margin: 4rem 0;
`;

// .highlights
export const FeaturedSectionInner = styled.div`
    position: relative;
    height: 80vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.textMain};
`;

// NEW video container
export const BackgroundVideo = styled.video`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -2;
    object-fit: cover;
    object-position: top;
`;

// .highlights__txt-container
export const VideoOverlay = styled.div`
    position: absolute;
    gap: 1rem;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.videoOverlayBg};
    z-index: 1;
`;

export const Content = styled.div`
    ${heightWidth("100%", "100%")};
    display: flex;
    justify-content: space-between;

    @media (max-width: 600px) {
        flex-direction: column-reverse;
    }
`;

export const ColumnRight = styled.div`
    ${heightWidth("100%", "50%")};
    ${columnLayout("flex", "column", "start", "end")}

    @media (max-width: 880px) {
        width: ${fluid("100px", "330px", "660px", "880px")};
    }

    @media (max-width: 600px) {
        ${heightWidth("10%", "100%")};
    }
`;

export const ColumnLeft = styled.div`
    ${heightWidth("100%", "50%")};
    ${columnLayout("flex", "column", "center", "center")}

    @media (max-width: 880px) {
        width: ${fluid("500px", "430px", "660px", "880px")};
    }

    @media (max-width: 600px) {
        ${heightWidth("90%", "100%")};
    }
`;

export const ColumnLeftInner = styled.div``;

// .hightlights__txt
export const Text = styled.p`
    text-align: justify;
    font-size: ${fluid(".9rem", "1.5rem", "375px", "1800px")};
    //padding: 1.5rem;
    padding: ${fluid(".8rem", "1.5rem", "375px", "1800px")};
    z-index: 1;
    color: ${({ theme }) => theme.colors.bgSecondary};

    span {
        font-weight: 700;
        color: ${({ theme }) => theme.colors.primary};
    }
`;

// Botón de reproducción
export const Button = styled.button`
    ${baseButton("transparent", "none")}
    margin: 1rem 1.5rem;
    position: relative;
    width: ${fluid("16px", "24px", "375px", "1800px")};
    height: ${fluid("16px", "24px", "375px", "1800px")};
`;

// --- Iconos ---
export const Pause = styled(PauseIcon)`
    ${iconStyle}
`;

export const Play = styled(PlayIcon)`
    ${iconStyle}
`;
