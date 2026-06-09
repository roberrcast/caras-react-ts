import {
    FeaturedSectionContainer,
    FeaturedSectionInner,
    Title,
    BackgroundVideo,
    VideoOverlay,
    Content,
    ColumnRight,
    ColumnLeft,
    ColumnLeftInner,
    Text,
    Button,
    Pause,
    Play,
} from "./styles";

// Hook video player
import { useVideoPlayer } from "../../hooks/useVideoPlayer";

// Videos
import heroVideo from "../../assets/fancy_hairstyle_optimized.mp4";
import heroVideoWebm from "../../assets/fancy_hairstyle.webm";

const FeaturedSection = () => {
    // Hook para el video player
    const { isPlaying, videoRef, togglePlay } = useVideoPlayer();

    const featuredData = [
        { span: "Inspírate", text: "con la alta costura" },
        { span: "Sumérgete", text: "en el arte y cultura" },
        { span: "Conecta", text: "con la actualidad" },
        { span: "Explora", text: "el espectáculo" },
    ];

    return (
        <FeaturedSectionContainer>
            <Title>Forma parte del círculo que define las tendencias</Title>

            <FeaturedSectionInner>
                <BackgroundVideo
                    id="featured-video"
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-label="Video de fondo con joven posando para la cámara"
                >
                    <source src={heroVideo} type="video/mp4" />
                    <source src={heroVideoWebm} type="video/webm" />
                    Su navegador es incompatible con la etiqueta de video.
                </BackgroundVideo>

                <VideoOverlay>
                    <Content>
                        <ColumnRight>
                            <Button
                                onClick={togglePlay}
                                aria-label={
                                    isPlaying
                                        ? "Pausar video"
                                        : "Reproducir video"
                                }
                                aria-controls="featured-video"
                            >
                                <Pause
                                    aria-hidden="true"
                                    style={{
                                        opacity: isPlaying ? 1 : 0,
                                        pointerEvents: isPlaying
                                            ? "auto"
                                            : "none",
                                    }}
                                />

                                <Play
                                    style={{
                                        opacity: isPlaying ? 0 : 1,
                                        pointerEvents: isPlaying
                                            ? "none"
                                            : "auto",
                                    }}
                                />
                            </Button>
                        </ColumnRight>

                        <ColumnLeft>
                            <ColumnLeftInner>
                                {featuredData.map((item, index) => (
                                    <Text key={index}>
                                        <span>{item.span}</span> {item.text}
                                    </Text>
                                ))}
                            </ColumnLeftInner>
                        </ColumnLeft>
                    </Content>
                </VideoOverlay>
            </FeaturedSectionInner>
        </FeaturedSectionContainer>
    );
};

export default FeaturedSection;
